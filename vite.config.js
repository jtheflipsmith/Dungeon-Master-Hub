import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/',

    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/landingpage.html'),
                landing: resolve(__dirname, 'src/index.html'),
                spells: resolve(__dirname, 'src/pages/spells.html'),
                monsters: resolve(__dirname, 'src/pages/monsters.html'),
                about: resolve(__dirname, 'src/pages/about.html'),
                contact: resolve(__dirname, 'src/pages/contact.html')
            }
        }
    }
});