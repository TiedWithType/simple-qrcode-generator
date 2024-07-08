import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      external: ["qrcode"],
    },
  },
});
