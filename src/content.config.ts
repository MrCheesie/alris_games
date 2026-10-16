import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight docs live in src/content/docs/ and are served under the site base
// path. Routes come from each entry's file path relative to that folder, so the
// `docs/` subfolder mounts the docs site at /alris_games/docs/ (leaving
// /alris_games/ for the games homepage in src/pages/index.astro) and turns
// docs/docs/guides/ai-harness-docs/ai-harness-doc.md into
// /alris_games/docs/guides/ai-harness-docs/ai-harness-doc/.
//
// Only the docs collection is defined. A second glob loader must not point at
// ./docs or ./src/content/docs: two collections claiming the same files makes
// the route disappear from the build.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
};
