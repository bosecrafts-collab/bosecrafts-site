import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    italic: z.string().optional(),
    category: z.string(),
    categorySlug: z.string(),
    year: z.union([z.number(), z.string()]),
    client: z.string(),
    duration: z.string(),
    services: z.array(z.string()),
    tagline: z.string(),
    featured: z.boolean().default(false),
    accent: z.string().default('#6F6256'),
    excerpt: z.string().optional(),
    cover: z.string().optional(),
    images: z.array(z.string()).default([]),
    h3: z.string().optional(),
  }),
});

export const collections = {
  projects,
};
