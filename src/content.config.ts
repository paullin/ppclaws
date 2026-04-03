import { defineCollection, z, reference } from "astro:content";
import { file, glob } from "astro/loaders";

const blogCollection = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/blog",
        generateId: ({ entry }) => {
            return entry.replace(/\.(md|mdx)$/, "");
        },
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            author: reference("authors"),
            pubDate: z.date(),
            isDraft: z.boolean(),
            linkedContent: z.string().optional(),
            image: image(),
            imageAlt: z.string().optional(),
        }),
});

const authors = defineCollection({
    loader: file("src/content/authors/authors.json"),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            image: image(),
            position: z.record(z.string()),
        }),
});

const homepage = defineCollection({
    loader: glob({
        pattern: "**/*.json",
        base: "./src/content/homepage",
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string().optional(),
            hero: z.array(
                z.object({
                    image: image(),
                    title: z.string(),
                    description: z.string().optional(),
                    badge: z.string().optional(),
                    link: z.string(),
                })
            ),
            sections: z.array(
                z.object({
                    id: z.string(),
                    title: z.string(),
                    subtitle: z.string().optional(),
                    items: z.array(
                        z.object({
                            title: z.string(),
                            desc: z.string(),
                            cover: image(),
                            link: z.string().optional(),
                        })
                    ),
                })
            ),
        }),
});

export const collections = {
    blog: blogCollection,
    authors: authors,
    homepage: homepage,
};
