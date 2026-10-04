import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sepaag.github.io',
  base: '/eficasa',
  integrations: [sitemap()],
  build: { format: 'directory' }
});