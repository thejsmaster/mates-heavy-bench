import { onRequest, setServerTimeout, enableSSRIsolation } from "mates-fullstack";
enableSSRIsolation();
setServerTimeout(60);
onRequest((c) => { (c as any).resHeaders["x-benchmark"] = "1"; });
