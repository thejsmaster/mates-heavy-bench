import { renderX, hydrationPending, effect, atom } from "mates";
import App from "./App.ts";

const app = document.getElementById("app");
if (!app) throw new Error("#app not found");

const ssr = document.getElementById("app-ssr");

if (!ssr) {
  renderX(App, app);
} else {
  const client = document.createElement("div");
  client.id = "app-client";
  client.style.display = "none";
  client.setAttribute("aria-hidden", "true");
  app.appendChild(client);

  renderX(App, client);

  const hydrated = atom(false);
  let swapped = false;
  let cleanupEffect: (() => void) | null = null;

  function doSwap() {
    if (swapped) return;
    swapped = true;
    hydrated.set(true);
    if (cleanupEffect) { cleanupEffect(); cleanupEffect = null; }
    ssr.replaceWith(client);
  }

  // Safety net: force swap after 3s
  setTimeout(doSwap, 3000);

  // Defer to after microtasks — scheduler flushes, components mount,
  // asyncAction fires, fetch interceptor increments the counter.
  queueMicrotask(() => {
    if (hydrationPending() === 0) {
      doSwap();
    } else {
      // Effect fires when counter changes. Each time it hits 0,
      // schedule a swap on the next macrotask (with double-check).
      cleanupEffect = effect(() => {
        if (hydrated()) return;
        if (hydrationPending() > 0) return;
        setTimeout(() => {
          if (!hydrated() && hydrationPending() === 0) doSwap();
        }, 0);
      });
    }
  });
}
