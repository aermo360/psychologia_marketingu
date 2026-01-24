// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://praktycznymarketing.edu.pl',
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 4321,
      strictPort: true,
      allowedHosts: [
        'praktycznymarketing.edu.pl',
        '157.180.18.130',
        'localhost'
      ]
    }
  }
});