import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import fs from "fs";

import generateFile from "vite-plugin-generate-file";
import figmaManifest from "./figma.manifest";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      svelte(),
      {
        name: "copy-html",
        apply: "build",
        closeBundle() {
          const htmlPath = path.resolve(__dirname, "index.html");
          const distPath = path.resolve(__dirname, "dist/index.html");
          fs.copyFileSync(htmlPath, distPath);
          console.log("Copied index.html to dist directory.");
        },
      },
      generateFile({
        type: "json",
        output: "./manifest.json",
        data: figmaManifest,
      }),
    ],
    build: {
      base: "./",
      minify: isProduction,
      sourcemap: !isProduction ? "inline" : false,
      emptyOutDir: true,
      outDir: "dist",
      rollupOptions: {
        input: {
          ui: path.resolve(__dirname, "./src/ui/main.ts"),
          figma: path.resolve(__dirname, "./src/figma/code.ts"),
        },
        output: {
          entryFileNames: "[name].js",
          assetFileNames: "[name][extname]",
          format: "esm",
          dir: "dist",
        },
      },
    },
    server: {
      host: "localhost",
      port: 5173,
      strictPort: true,
      open: true,
    },
    resolve: {
      alias: {
        "@common": path.resolve(__dirname, "src/common"),
        "@figma": path.resolve(__dirname, "src/figma"),
        "@ui": path.resolve(__dirname, "src/ui"),
      },
    },
  };
});
