import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// `npm run build`        → dist/        （Web サーバーに置く通常版）
// `npm run build:single` → dist-single/ （1つの HTML にまとめた配布版。ダブルクリックで開ける）
export default defineConfig(({ mode }) => {
  const isSingle = mode === 'single';

  return {
    base: './',
    plugins: isSingle ? [viteSingleFile()] : [],
    css: {
      preprocessorOptions: {
        // コンポーネントの .scss から `@use 'tokens'` / `@use 'mixins'` で読み込めるようにする
        scss: { loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))] },
      },
    },
    build: {
      outDir: isSingle ? 'dist-single' : 'dist',
      emptyOutDir: true,
    },
  };
});
