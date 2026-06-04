import { renderX } from "mates";
import { App } from "./App.ts";

const root = document.getElementById("app");
if (root) {
  // Clear SSR content before client hydration to avoid duplicate rendering
  root.innerHTML = "";
  renderX(App, root);
}
