import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap()],
  site: "https://thibaudbrault.dev",
});