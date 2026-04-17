import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [react(), vue()],
  vite: {
    plugins: [
      vanillaExtractPlugin({
        identifiers: ({ hash, ...rest }) => {
          console.log(rest);
          return `openlab-ui_${hash}`;
        },
      }),
    ],
    resolve: {
      alias: {
        // Only alias core to source — react/vue use built dist packages
        "@openlab-ui/core": path.resolve(__dirname, "../../packages/core/src"),
      },
    },
    ssr: {
      noExternal: ["@openlab-ui/core"],
    },
    optimizeDeps: {
      exclude: ["@openlab-ui/core"],
    },
  },
});
