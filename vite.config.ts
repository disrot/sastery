import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { loadLive } from "./src/youtube-live";

function youtubeApi(): Plugin {
  return {
    name: "youtube-api",
    configureServer(server) {
      server.middlewares.use("/api/youtube", async (_request, response) => {
        try {
          const data = await loadLive();
          response.setHeader("Content-Type", "application/json");
          response.setHeader("Cache-Control", "public, max-age=60");
          response.end(JSON.stringify(data));
        } catch {
          response.statusCode = 200;
          response.end(JSON.stringify({ channels: {}, uploads: [] }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [youtubeApi(), react()],
  server: {
    port: 5173,
    strictPort: false,
  },
});
