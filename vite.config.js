// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  server: {
    cors: "*",
    hmr: {},
    fs: {
      allow: [".."],
    },
  },
  build: {
    minify: true,
    emptyOutDir: true,
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: resolve(__dirname, "/js/index.js"),
      output: {
        entryFileNames: "[name].js",
        format: "es",
        compact: true,
      },
    },
  },
});
