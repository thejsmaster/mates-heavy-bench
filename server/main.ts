import { onRequest, setServerTimeout } from "mates-fullstack";
setServerTimeout(60);
onRequest((c) => { (c as any).resHeaders["x-benchmark"] = "1"; });
