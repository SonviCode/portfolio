import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      img: z.string(),
      img_alt: z.string().optional(),
      links: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      ),
    }),
  }),
};
