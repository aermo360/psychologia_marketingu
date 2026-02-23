// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://psychologiamarketingu.edu.pl',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 4321,
      strictPort: true,
      allowedHosts: [
        'psychologiamarketingu.edu.pl',
        'www.psychologiamarketingu.edu.pl',
        'cms.psychologiamarketingu.edu.pl',
        'localhost',
        '127.0.0.1'
      ]
    }
  }
});