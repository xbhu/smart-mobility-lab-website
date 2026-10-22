import { defineConfig } from "astro/config";

// SITE_URL is set by the deploy workflow: new.mobilitypsu.com while previewing (switched to lab.mobilitypsu.com at cutover),
// lab.mobilitypsu.com after launch.
export default defineConfig({
  site: process.env.SITE_URL ?? "https://lab.mobilitypsu.com",
  trailingSlash: "ignore",
  build: { format: "directory" },
});
