import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE_URL is set by the deploy workflow; the production site is https://lab.mobilitypsu.com.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://lab.mobilitypsu.com",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [sitemap()],
});
