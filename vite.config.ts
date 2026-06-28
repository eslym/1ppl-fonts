import { defineConfig } from "vite";
import { dirname, basename } from "path";

const fonts = new Bun.Glob("fonts/*/index.css");
const fontFiles = new Bun.Glob("fonts/**/*");
const fontSourceFiles = new Bun.Glob("node_modules/@fontsource/**/*");

const entries: Record<string, string> = {};

for (const font of fonts.scanSync()) {
  const fontName = basename(dirname(font));
  entries[fontName] = font;
}

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: entries,
      output: {
        assetFileNames(assetInfo) {
          if (fonts.match(assetInfo.originalFileNames[0] || "")) {
            const fontName = basename(
              dirname(assetInfo.originalFileNames[0] || ""),
            );
            return `${fontName}.css`;
          }
          if (fontFiles.match(assetInfo.originalFileNames[0] || "")) {
            const name = assetInfo.originalFileNames[0]!.substring('fonts/'.length);
            const slashIndex = name.indexOf("/");
            const fontName = name.substring(0, slashIndex);
            return `assets/${fontName}/[hash][extname]`;
          }
          if (fontSourceFiles.match(assetInfo.originalFileNames[0] || "")) {
            const name = assetInfo.originalFileNames[0]!.substring('node_modules/@fontsource/'.length);
            const slashIndex = name.indexOf("/");
            const fontName = name.substring(0, slashIndex);
            return `assets/${fontName}/[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
