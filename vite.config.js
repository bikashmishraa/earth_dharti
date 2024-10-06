import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Set the correct base path if needed for Vercel deployment
  build: {
    outDir: 'dist',
  },
});
