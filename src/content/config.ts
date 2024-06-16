import { defineCollection, z } from 'astro:content';

export const collections = {
	projects: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			source: z.string().optional(),
			site: z.string().optional(),
			content: z.string(),
			order: z.number(),
		}),
	}),
};
