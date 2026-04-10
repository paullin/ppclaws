import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const homepage = defineCollection({
    loader: glob({
        pattern: "**/*.json",
        base: "./src/content/homepage",
        generateId: ({ entry }) => {
            return entry.replace(/\.json$/, "");
        },
    }),
    schema: ({ image }) =>
        z.object({
            hero: z.array(
                z.object({
                    image: z.string().optional(),
                    cssClass: z.string().optional(),
                    title: z.string(),
                    description: z.string().optional(),
                    badge: z.string().optional(),
                    link: z.string(),
                })
            ),
            sections: z.array(
                z.object({
                    id: z.string().optional(),
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
                            cover_text: z.string().optional(),
                            cover_theme: z.string().optional(),
                            badge: z.union([z.string(), z.array(z.string())]).optional(),
                            link: z.string().optional(),
                        })
                    ),
                })
            ),
            newsletter: z.object({
                title: z.string(),
                description: z.string(),
                emailPlaceholder: z.string(),
                buttonText: z.string(),
            }).optional(),
            submission: z.object({
                title: z.string(),
                description: z.string(),
                labels: z.object({
                    name: z.string(),
                    type: z.string(),
                    url: z.string(),
                    description: z.string(),
                    contact: z.string(),
                    submit: z.string(),
                }),
                placeholders: z.object({
                    name: z.string(),
                    type: z.string(),
                    url: z.string(),
                    description: z.string(),
                    contact: z.string(),
                }),
                types: z.array(z.object({
                    value: z.string(),
                    label: z.string(),
                })),
            }).optional(),
            footer: z.object({
                slogan: z.string(),
                columns: z.array(z.object({
                    title: z.string(),
                    links: z.array(z.object({
                        text: z.string(),
                        link: z.string(),
                        external: z.boolean().optional(),
                    })),
                })),
                socials: z.array(z.object({
                    platform: z.string(),
                    link: z.string(),
                    icon: z.string().optional(),
                    image: z.string().optional(),
                })),
                copyright: z.string(),
            }).optional(),
        }),
});

export const collections = {
    homepage: homepage,
    skillsCategory: defineCollection({
        loader: glob({
            pattern: "**/*.{json,yaml,yml}",
            base: "./src/content/skillsCategory",
            generateId: ({ entry }) => {
                return entry.replace(/\.(json|yaml|yml)$/, "");
            },
        }),
        schema: z.object({
            id: z.string().optional(),
            title: z.string(),
            description: z.string().optional(),
            sections: z.array(z.object({
                id: z.string().optional(),
                title: z.string(),
                items: z.array(z.object({
                    title: z.string(),
                    description: z.string().optional(),
                    link: z.string().optional(),
                    cover_text: z.string().optional(),
                    cover_theme: z.string().optional(),
                    badge: z.union([z.string(), z.array(z.string())]).optional(),
                })).optional()
            })).optional()
        })
    }),
    skills: defineCollection({
        loader: glob({
            pattern: "**/*.{md,mdx}",
            base: "./src/content/skills",
        }),
        schema: z.object({
            title: z.string(),
            description: z.string().optional(),
            author: z.string().optional(),
            date: z.coerce.date().optional(),
            tags: z.array(z.string()).optional(),
            category: z.string().optional(),
            cover_text: z.string().optional(),
            cover_theme: z.string().optional(),
            badge: z.union([z.string(), z.array(z.string())]).optional(),
            featured: z.boolean().default(false).optional(),
            relatedResources: z.array(z.object({
                title: z.string(),
                link: z.string(),
            })).optional(),
            recommendedReading: z.array(z.object({
                title: z.string(),
                link: z.string(),
            })).optional(),
        })
    })
};
