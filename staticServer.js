// staticServer.js
import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

export const createStaticServer = ({ root = "Public", port = 3001 } = {}) => {
    const mime = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon"
    };

    const server = http.createServer((req, res) => {
        const parsed = url.parse(req.url);
        let pathname = `.${parsed.pathname}`;
        let filePath = path.join(root, pathname);

        if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
            filePath = path.join(filePath, "index.html");
        }

        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Not Found");
                return;
            }
            const ext = path.extname(filePath);
            res.writeHead(200, { "Content-Type": mime[ext] || "text/plain" });
            res.end(data);
        });
    });

    return {
        start: () => server.listen(port, () => console.log(`Server on ${port}`)),
        stop: () => server.close()
    };
};