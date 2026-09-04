import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Explicit handlers for SEO and crawler files to ensure 100% valid MIME types and prevent HTML fallback
  app.get("/sitemap.xml", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.sendFile(filePath);
    } else {
      res.status(404).send("Sitemap not found");
    }
  });

  app.get("/robots.txt", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "robots.txt");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.sendFile(filePath);
    } else {
      res.status(404).send("Robots.txt not found");
    }
  });

  app.get("/llms.txt", (req, res) => {
    const filePath = path.join(process.cwd(), "public", "llms.txt");
    if (fs.existsSync(filePath)) {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.sendFile(filePath);
    } else {
      res.status(404).send("LLMs.txt not found");
    }
  });

  // API health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, { maxAge: "1d", etag: true }));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
