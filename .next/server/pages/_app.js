const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e6ca1c._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__f7b725._.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
