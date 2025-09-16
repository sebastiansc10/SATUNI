import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // ✅ quitamos componentTagger() si no está instalado/importado
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ sin "./"
    },
  },
}));
