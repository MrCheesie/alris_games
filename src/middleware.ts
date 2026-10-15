import { defineMiddleware } from "astro:middleware";
import { readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const BASE = import.meta.env.BASE_URL;
const PUBLIC_DIR = join(process.cwd(), "public");

/**
 * Astro's dev server only serves files in public/ by their exact path, so a
 * folder URL such as /alris_games/RTG/ returns 404 in `npm run dev` even though
 * the built site (and GitHub Pages) resolve it to RTG/index.html.
 *
 * Mirror that directory-index behavior in dev so the same URLs work in both.
 * Gated on DEV so the static build and the prerendered pages are unaffected.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (!import.meta.env.DEV || response.status !== 404) return response;

  const { pathname } = context.url;
  if (!pathname.endsWith("/") || !pathname.startsWith(BASE)) return response;

  const inside = decodeURIComponent(pathname.slice(BASE.length));
  const target = join(PUBLIC_DIR, inside, "index.html");
  // Never read outside of public/.
  if (relative(PUBLIC_DIR, target).startsWith("..")) return response;

  try {
    return new Response(await readFile(target), {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch {
    return response;
  }
});
