import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [ vue() ],
    server: { port: 7777 },
    preview: { port: 7777 },
    build: { sourcemap: true },
    esbuild: { sourcemap: 'external' },
    css: { postcss: { plugins: [ autoprefixer ] }, devSourcemap: true },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@shared': fileURLToPath(new URL('./src/shared', import.meta.url))
        }
    }
});
