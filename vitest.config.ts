import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/tests/**/*.spec.ts"],
    watch: true,
    globals: true,
    environment: "jsdom",
  },
});
