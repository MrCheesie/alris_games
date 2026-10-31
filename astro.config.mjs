import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://mrcheesie.github.io',
  base: '/alris_games',
  integrations: [
    react(),
    starlight({
      title: 'Alris Games',
      customCss: ['./src/styles/style.css'],
      // Entries live one level under src/content/docs/ so the docs site is
      // served at /alris_games/docs/ instead of /alris_games/ (which is the
      // games homepage from src/pages/index.astro).
      sidebar: [
        {
          label: 'Guides',
          items: [{ autogenerate: { directory: 'docs/guides' } }],
        },
      ],
    }),
  ],
});
