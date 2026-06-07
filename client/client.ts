import { renderX } from "mates";
import App from "./App.ts";
const root = document.getElementById("app");
if (root) { root.innerHTML = ""; renderX(App, root); }
