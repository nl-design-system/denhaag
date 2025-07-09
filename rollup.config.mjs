import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import svgr from '@svgr/rollup';
import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import postcss from 'rollup-plugin-postcss';
import discardDuplicates from 'postcss-discard-duplicates';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeExternal from 'rollup-plugin-node-externals';
import summary from 'rollup-plugin-summary';

const inputExists = (config) => {
  try {
    return fs.existsSync(config.input);
  } catch {
    return false;
  }
};

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};

const createConfig = ({ dir, format, baseUrl, sourcemap, globals }) => ({
  input: path.join(baseUrl, 'src/index.tsx'),
  output: {
    dir,
    sourcemap,
    format,
    compact: true,
    globals,
  },
  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    nodeExternal(),
    nodeResolve({ browser: true }),
    postcss({
      extensions: ['.css', '.scss'],
      minimize: true,
      inject: (css, { insertAt } = {}) => {
        return `  
        if (typeof document !== 'undefined') { 

          const head = document.head || document.getElementsByTagName('head')[0]
          const style = document.createElement('style')
          style.type = 'text/css'
          style.nonce = window.NONCE
        
          if (${insertAt}=== 'top') {
            if (head.firstChild) {
              head.insertBefore(style, head.firstChild)
            } else {
              head.appendChild(style)
            }
          } else {
            head.appendChild(style)
          }
        
          if (style.styleSheet) {
            style.styleSheet.cssText = ${css}
          } else {
            style.appendChild(document.createTextNode(${css}))
          }
        }
        `;
      },
    }),
    commonjs({ include: /node_modules/ }),
    svgr({ icon: true, svgo: true, memo: true }),
    typescript({
      cacheDir: path.join(path.dirname(import.meta.url), '.rollup-cache'),
      tsconfig: path.join(baseUrl, 'tsconfig.json'),
      tsBuildInfoFile: path.join(baseUrl, '.tsbuildinfo'),
      compilerOptions: {
        outDir: dir,
      },
    }),
    summary(),
  ],
});

const baseUrl = cwd();

function emitCssDts() {
  return {
    name: 'emit-css-dts',
    generateBundle() {
      const dtsSource = `declare const css: string;\nexport default css;\nexport const stylesheet: string;\n`;
      this.emitFile({
        type: 'asset',
        fileName: 'css.d.mts',
        source: dtsSource,
      });
    },
  };
}

function emitStylesheetLoader() {
  return {
    name: 'emit-stylesheet-loader',
    generateBundle(options, bundle) {
      const css = bundle['css.mjs'].code;
      const cssWithoutExport = css.replace(/export\s*{.*};/, '');
      const constructedStylesheetCode = `const constructedStylesheet = new CSSStyleSheet();\nconstructedStylesheet.replaceSync(stylesheet);\nexport default constructedStylesheet;`;

      this.emitFile({
        type: 'asset',
        fileName: 'stylesheet.mjs',
        source: cssWithoutExport + constructedStylesheetCode,
      });

      this.emitFile({
        type: 'asset',
        fileName: 'stylesheet.d.mts',
        source: `declare const constructedStylesheet: CSSStyleSheet;\nexport default constructedStylesheet;\n`,
      });
    },
  };
}

const configs = [
  createConfig({ format: 'esm', dir: './dist/mjs', baseUrl, sourcemap: true, globals: outputGlobals }),
  {
    input: 'src/index.scss',
    output: {
      dir: './dist',
      sourcemap: false,
      format: 'esm',
      compact: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        plugins: [discardDuplicates()],
        extract: true,
      }),
    ],
  },
  {
    input: 'src/index.scss',
    output: {
      dir: './dist/mjs',
      sourcemap: false,
      entryFileNames: 'css.mjs',
      format: 'esm',
      compact: true,
    },
    plugins: [
      postcss({
        extensions: ['.css', '.scss'],
        extract: false,
        inject: false,
      }),
      emitCssDts(),
      emitStylesheetLoader(),
    ],
  },
]
  .map(({ input, ...config }) => ({
    ...config,
    input: path.resolve(cwd(), input),
  }))
  .filter(inputExists);

export default configs;
