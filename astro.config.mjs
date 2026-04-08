import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import pagefind from "astro-pagefind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // UPDATE THIS FOR PRODUCTION – This will also be used in the sitemap
  site: process.env.PRODUCTION_DOMAIN || "https://ppclaws.com/",

  integrations: [
      mdx(),
      sitemap({
          changefreq: "weekly",
          priority: 0.7,
          serialize(item) {
              // Extract the path from the URL
              const url = new URL(item.url);
              const path = url.pathname;
              const normalizedPath =
                  path === "/" ? "/" : path.replace(/\/+$/, "");
              
              // Set priority 1.0 for English and Chinese homepages
              if (normalizedPath === "/" || normalizedPath === "/zh") {
                  item.priority = 1.0;
              }
              
              return item;
          },
          lastmod: new Date(),
      }),
      svelte(),
      pagefind(),
  ],

  vite: {
      plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
