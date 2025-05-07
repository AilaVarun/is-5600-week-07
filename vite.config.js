import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// src/config.js

export const BASE_URL = "https://friendly-space-garbanzo-q775xx5qgxqvhxx9q-3080.app.github.dev";
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})




