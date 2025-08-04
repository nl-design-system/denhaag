import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { template } from 'lodash-es';

// copied from open-formulieren/open-forms-sdk:vite.config.mts
const ejsPlugin = () => ({
  name: 'compile-ejs',
  async transform(src: string, id: string) {
    const options = {
      variable: 'ctx',
      evaluate: /\{%([\s\S]+?)%\}/g,
      interpolate: /\{\{([\s\S]+?)\}\}/g,
      escape: /\{\{\{([\s\S]+?)\}\}\}/g,
    };
    if (id.endsWith('.ejs')) {
      const code = template(src, options);
      return { code: `export default ${code}`, map: null };
    }
    return undefined;
  },
});

export default defineConfig({
  plugins: [react(), ejsPlugin()],
});
