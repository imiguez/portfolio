import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  //change port for production
  // preview: {
  //   port: process.env.PORT,
  // },
  // // for dev
  // server: {
  //   port: 3000,
  // },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      // types: `${path.resolve(__dirname, "./src/@types")}`,
      styles: `${path.resolve(__dirname, "./src/styles")}`,
    },
  },
})
