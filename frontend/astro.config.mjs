// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://psychologiamarketingu.edu.pl',
  trailingSlash: 'always',
  image: {
    // Zdjecia wykladowcow leza w Strapi (czesc jako ciezkie PNG-i). Autoryzacja domeny
    // pozwala <Image> pobrac je przy buildzie, przekonwertowac na WebP i serwowac
    // z naszego origin — bez podmieniania plikow w CMS-ie.
    domains: ['cms.psychologiamarketingu.edu.pl'],
  },
  integrations: [
    sitemap({
      // Keep noindex pages out of the sitemap (e.g. privacy policy)
      filter: (page) =>
        !page.includes('/polityka-prywatnosci') && !page.includes('/404'),
    }),
  ],
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