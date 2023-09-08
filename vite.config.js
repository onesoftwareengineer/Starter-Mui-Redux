import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

  /* eslint-disable no-undef */
const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "src"),
    },
  },
});
