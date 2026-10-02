import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// DOMINIO pendiente de elegir. Sustituye esta URL y el CNAME cuando lo tengas.
export default defineConfig({
  site: 'https://TU-DOMINIO-PENDIENTE.es',
  base: '/',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
