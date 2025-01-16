import { Plugin } from "vite";
import { readFileSync } from "fs";

function includeHtml(): Plugin {
  return {
    name: "include-html-plugin",
    apply: "build", // 빌드 단계에서만 실행
    generateBundle() {
      const html = readFileSync("index.html", "utf-8");

      this.emitFile({
        type: "asset",
        fileName: "index.html",
        source: html,
      });
    },
  };
}

export default includeHtml;
