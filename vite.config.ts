import path from "node:path";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import generateFile from "vite-plugin-generate-file";
import figmaManifest from "./figma.manifest";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      svelte(),
      generateFile({
        type: "json",
        output: "./manifest.json",
        data: figmaManifest,
      }),
    ],
    build: {
      minify: isProduction,
      sourcemap: !isProduction ? "inline" : false,
      emptyOutDir: true,
      outDir: "dist", // 빌드 결과물 디렉토리
      rollupOptions: {
        input: {
          html: path.resolve(__dirname, "index.html"), // HTML 입력 파일
          ui: path.resolve(__dirname, "src/ui/main.ts"), // Svelte UI 코드
          plugin: path.resolve(__dirname, "src/figma/code.ts"), // Figma Plugin API 코드
        },
        output: {
          entryFileNames: "[name].js", // JS 파일 이름
          assetFileNames: "[name][extname]", // 정적 파일 이름
          format: "esm",
          dir: "dist", // 모든 출력 파일을 dist 디렉토리에 저장
        },
      },
    },
    publicDir: "public", // 정적 파일 처리
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/variables.scss";`, // SCSS 설정
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
