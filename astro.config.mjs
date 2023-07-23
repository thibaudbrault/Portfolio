import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })],
  site: "https://thibaudbrault.dev"
});