import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { imagetools } from 'vite-imagetools'
import generateRss from "./plugins/vite-plugin-generate-rss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx() },
    generateRss(),
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
    vanillaExtractPlugin(),
    imagetools(),
    ViteImageOptimizer(),
  ],
  ssgOptions: {
    beastiesOptions: {},
  },
});
