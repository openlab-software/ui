import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@openlab-ui/vue/styles.css": path.resolve(
        __dirname,
        "../../packages/vue/dist/index.css",
      ),
      "@openlab-ui/vue": path.resolve(__dirname, "../../packages/vue/dist"),
    },
  },
});
