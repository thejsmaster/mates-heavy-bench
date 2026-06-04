/**
 * Server middleware for mates-heavy-bench.
 *
 * Auth + SSR control:
 *   - matesAuth() extracts JWT from httpOnly cookies, sets ctx.auth
 *   - When ctx.auth is set → SSR is automatically skipped (SPA mode)
 *   - skipSSR() would skip SSR for all requests (even unauthenticated)
 */

import { onRequest, setServerTimeout, matesAuth, skipSSRIfAuthenticated } from "mates-fullstack";

// Give SSR 60s timeout
setServerTimeout(60);

// Auth: parse JWT from httpOnly cookies → ctx.auth
// When user is authenticated, SSR is automatically skipped (serves empty shell).
// To always skip SSR regardless of auth, use skipSSR() instead.
matesAuth({
  access: { secret: process.env.JWT_SECRET || "bench-secret", expiresIn: "15m" },
  refresh: { secret: process.env.JWT_REFRESH_SECRET || "bench-refresh-secret", expiresIn: "7d" },
  cookie: {
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  },
});

// Explicit SSR policy: skip SSR for authenticated users (already the default)
skipSSRIfAuthenticated();

// Request marker
onRequest((c) => {
  (c as any).resHeaders["x-benchmark"] = "1";
});
