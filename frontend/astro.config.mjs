// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://157.180.18.130:4322',
  vite: {
    plugins: [tailwindcss()]
  }
});