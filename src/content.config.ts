import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    category: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    slug: z.string(),
    draft: z.boolean().default(false),
    pillar: z.boolean().default(false),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([])
  })
});

export const collections = { articulos };
