import { html, x, pathAtom } from "mates";
import { ABTestResults } from "./pages/ABTestResults.ts";

const _pages: Record<string, any> = { "/page-003": ABTestResults };

const App = () => {
  const p = pathAtom();
  const C = _pages[p];
  return C
    ? () => x(C, {})
    : () => html`<div style="font-family:system-ui;padding:3rem;text-align:center"><h1>Mates Heavy Benchmark</h1></div>`;
};

export { App };
