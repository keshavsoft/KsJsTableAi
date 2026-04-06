// usage.js
import { createStaticServer } from "./staticServer.js";

const app = createStaticServer({ root: "public", port: 3001 });
app.start();