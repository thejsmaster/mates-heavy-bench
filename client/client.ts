import { renderX } from "mates";
import App from "./App.ts";

const app = document.getElementById("app");
if (!app) throw new Error("#app not found");

// SSR-detection: if #app-ssr exists, we have SSR content to hydrate
const ssr = document.getElementById("app-ssr");

if (!ssr) {
  // No SSR — just render (dev mode)
  renderX(App, app);
} else {
  // Build the entire app in a detached div.
  // Components mount immediately via constructor() + _setup(),
  // fire asyncAction calls, fetch data — all off-screen.
  const client = document.createElement("div");
  client.id = "app-client";
  renderX(App, client);

  let swapped = false;

  function isReady(): boolean {
    // Components show "—" placeholder until async data arrives
    return !client.textContent?.includes("—") && client.textContent!.length > 200;
  }

  function doSwap() {
    if (swapped) return;
    swapped = true;
    // Atomic swap: replace SSR container with client container.
    // Components' connectedCallback fires — they see _hasMounted
    // is true (set by constructor _setup), so they skip re-mount.
    // The DOM swaps in one frame — no flash.
    ssr.replaceWith(client);
  }

  // Check readiness after a macro task
  setTimeout(function check() {
    if (isReady()) {
      doSwap();
    } else {
      setTimeout(check, 16);
    }
  }, 0);
}
