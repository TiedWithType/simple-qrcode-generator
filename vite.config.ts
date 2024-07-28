import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  appType: "spa",
  plugins: [tsconfigPaths()],
  build: {
    rollupOptions: {
      external: ["./node_modules/qrcode"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".webp")) {
            return "assets/[name].[ext]";
          }
          return `assets/[name]-[hash].[extname]`;
        },
      },
    },
  },
});
