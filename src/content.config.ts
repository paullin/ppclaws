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
            description: z.string().optional(),
            hero: z.array(
                z.object({
                    image: z.string(), // Changed to string for flexibility in external/internal paths
                    title: z.string(),
                    description: z.string().optional(),
                    badge: z.string().optional(),
                    link: z.string(),
                })
            ),
            sections: z.array(
                z.object({
                    title: z.string(),
                    subtitle: z.string().optional(),
                    moreLink: z.string().optional(),
                    moreText: z.string().optional(),
                    columns: z.number().default(4),
                    items: z.array(
                        z.object({
                            title: z.string(),
                            description: z.string(),
                            tags: z.array(z.string()).optional(),
                            cover: z.string().optional(),
                            badge: z.string().optional(),
                            icon: z.string().optional(),
                            link: z.string().optional(),
                        })
                    ),
                })
            ),
            training: z.object({
                sectionTitle: z.string(),
                sectionSubtitle: z.string().optional(),
                title: z.string(),
                subtitle: z.string().optional(),
                description: z.string(),
                image: z.string(),
                features: z.array(z.string()),
                buttonText: z.string(),
                buttonLink: z.string(),
                secondaryButtonText: z.string().optional(),
                secondaryButtonLink: z.string().optional(),
            }).optional(),
            faq: z.object({
                title: z.string().optional(),
                subtitle: z.string().optional(),
                items: z.array(
                    z.object({
                        question: z.string(),
                        answer: z.string(),
                    })
                ),
                moreText: z.string().optional(),
                moreLink: z.string().optional(),
            }).optional(),
        }),
});

export const collections = {
    blog: blogCollection,
    authors: authors,
    homepage: homepage,
};
