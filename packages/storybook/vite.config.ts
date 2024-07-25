import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';

export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: [react(), mdPlugin({ mode: [Mode.MARKDOWN] })],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'lodash'],
    },
  },
});
