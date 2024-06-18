import { defineCollection, z } from "astro:content";

export const collections = {
    projects: defineCollection({
        type: "data",
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
    work: defineCollection({
        type: "data",
        schema: z.object({
            position: z.string(),
            type: z.string(),
            company: z.string(),
            link: z.string(),
            date: z.string(),
            activities: z.array(z.string()),
            order: z.number(),
        }),
    }),
    old_work: defineCollection({
        type: "data",
        schema: z.object({
            position: z.string(),
            type: z.string(),
            company: z.string(),
            link: z.string(),
            date: z.string(),
            activities: z.array(z.string()),
            order: z.number(),
        }),
    }),
};
