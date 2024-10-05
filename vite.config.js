import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

const prodEnv = process.env.NODE_ENV === "production";

export default defineConfig({
  mode: prodEnv ? "production" : "development",
  build: {
    emptyOutDir: true,
    sourcemap: prodEnv ? true : "inline"
  },
  plugins: [legacy({ targets: ["defaults", "not IE 11"] })],

  server: {
    port: 5000,
    open: true
  },
  preview: {
    port: 5050,
    open: true
  }
});
