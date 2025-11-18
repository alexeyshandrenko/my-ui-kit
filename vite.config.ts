/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dirname =
  typeof __dirname === 'undefined'
    ? path.dirname(fileURLToPath(import.meta.url))
    : __dirname;

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MyUiKit',
      fileName: (format) => `my-ui-kit.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, loaderContext) => {
          const filePath = loaderContext;
          if (
            filePath.includes('src/styles/index.scss') ||
            filePath.includes('src/styles/mixins.csss') ||
            filePath.includes('src/styles/reset.csss') ||
            filePath.includes('src/styles/variables.csss') ||
            filePath.includes('src/styles/globals.csss')
          ) {
            return content;
          }
          return '@import "@/styles/index"';
        },
      },
    },
  },
});
