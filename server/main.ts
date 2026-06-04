import { onRequest, setServerTimeout } from "mates-fullstack";

setServerTimeout(60);

onRequest((c) => {
  c.resHeaders["x-benchmark"] = "1";
  // Log all API requests for debugging
  if (c.url?.startsWith("/api/")) {
    console.log("[rpc]", c.method, c.url);
  }
});
