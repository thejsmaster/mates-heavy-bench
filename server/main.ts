import cluster from "node:cluster";
import { cpus } from "node:os";
import { onRequest, setServerTimeout } from "mates-fullstack";

if (cluster.isPrimary) {
  const numWorkers = Math.min(cpus().length, 8);
  console.log(`[cluster] primary ${process.pid} — forking ${numWorkers} workers`);
  for (let i = 0; i < numWorkers; i++) cluster.fork();
  cluster.on("exit", (worker) => {
    console.log(`[cluster] worker ${worker.process.pid} died — restarting`);
    cluster.fork();
  });
} else {
  setServerTimeout(60);
  onRequest((c) => {
    (c as any).resHeaders["x-benchmark"] = "1";
  });
  console.log(`[cluster] worker ${process.pid} ready`);
}
