// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://praktycznymarketing.edu.pl',
  integrations: [
    sitemap({
      // Exclude blog pages — blog not yet live ("wkrótce")
      filter: (page) => !page.includes('/blog'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 4321,
      strictPort: true,
      allowedHosts: [
        'praktycznymarketing.edu.pl',
        'www.praktycznymarketing.edu.pl',
        'cms.praktycznymarketing.edu.pl',
        'localhost',
        '127.0.0.1'
      ]
    }
  }
});