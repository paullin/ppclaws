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
                            badge: z.string().optional(),
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
                    badge: z.string().optional(),
                })).optional()
            })).optional()
        })
    }),
    exampleCategory: defineCollection({
        loader: glob({
            pattern: "**/*.{json,yaml,yml}",
            base: "./src/content/exampleCategory",
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
                    badge: z.string().optional(),
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
            badge: z.string().optional(),
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
    }),
    example: defineCollection({
        loader: glob({
            pattern: "**/*.{md,mdx}",
            base: "./src/content/example",
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
            badge: z.string().optional(),
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
