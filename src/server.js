import { createServer } from "node:http";
import { greeting } from "./greeting.js";

const port = Number(process.env.PORT ?? 3000);

createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/api/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: greeting(url.searchParams.get("name")) }));
    return;
  }
  if (url.pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "UP" }));
    return;
  }
  res.writeHead(404).end();
}).listen(port, () => console.log(`Écoute sur le port ${port}`));
