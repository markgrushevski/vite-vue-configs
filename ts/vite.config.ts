import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
// @formatter:off
// prettier-ignore
export default defineConfig({
    plugins: [ vue(), mkcert() ],
    server: { cors: true, port: 7777, https: true },
    preview: { cors: true, port: 7777, https: true },
    build: { sourcemap: true },
    esbuild: { sourcemap: 'external' },
    css: { postcss: { plugins: [ autoprefixer ] }, devSourcemap: true },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
            '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
            '@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
            '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
            '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
            '@shared': fileURLToPath(new URL('./src/shared', import.meta.url))
        }
    }
});
