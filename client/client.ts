import { renderX } from "mates";
import App from "./App.ts";

const ssr = document.getElementById("app-ssr");
const client = document.getElementById("app-client");

if (!ssr || !client) {
  // No SSR structure — render directly (dev mode)
  const root = document.getElementById("app");
  if (root) renderX(App, root);
} else {
  // Render client app into hidden staging container
  renderX(App, client);

  let swapped = false;
  function doSwap() {
    if (swapped) return;
    swapped = true;
    ssr.style.display = "none";
    ssr.setAttribute("aria-hidden", "true");
    client.style.display = "";
    client.removeAttribute("aria-hidden");
  }

  // Wait for async data to load: poll for non-empty content
  // in the staging container. Components with asyncAction
  // show "—" as placeholder until data arrives.
  function pollReady(attempts: number) {
    if (swapped) return;
    // Check if staging has substantive content (not just loading placeholders)
    const hasRealContent =
      client.querySelector('[class*="api-card"]') !== null &&
      !client.textContent?.includes("—") &&
      client.textContent!.length > 100;

    if (hasRealContent) {
      doSwap();
    } else if (attempts > 0) {
      // Data still loading — check again after a microtask break
      requestAnimationFrame(() => pollReady(attempts - 1));
    } else {
      // Timeout after ~2.5s — swap anyway (data might never arrive)
      doSwap();
    }
  }

  // Start polling after next macro task (hydration rendered)
  setTimeout(() => pollReady(50), 0);
}
