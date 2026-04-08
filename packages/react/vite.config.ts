import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: ({ hash }) => `openlab-ui_${hash}` }),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist/@types",
      entryRoot: "./src",
    }),
  ],
  resolve: {
    alias: {
      "@openlab-ui/core": path.resolve(__dirname, "../core/src"),
    },
  },

  build: {
    cssCodeSplit: true,
    rollupOptions: {
      external: ["react", "react-dom", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "OpenLabUI",
      fileName: "index",
      formats: ["es"],
    },
  },
});
