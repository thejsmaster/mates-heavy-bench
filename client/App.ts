import { html, x, pathAtom } from "mates";

// Import all pages eagerly
import { ABTestResults } from "./pages/ABTestResults.ts";

const _pages: Record<string, any> = { "/page-001": ABTestResults };

const App = () => {
  const p = pathAtom();
  const C = _pages[p];
  return C
    ? () => x(C, {})
    : () => html`<div style="font-family:system-ui;padding:3rem;text-align:center"><h1>Bench</h1></div>`;
};

export { App };
