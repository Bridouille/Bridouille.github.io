// @ts-check
import { cpSync } from 'node:fs';
import { defineConfig } from 'astro/config';

// flight-manager/ stays at the repo root, not in public/: the Flight Pass app fetches it through
// raw.githubusercontent.com by its path in the repo. It is copied into the build so the site serves it too.
const flightManagerData = {
  name: 'flight-manager-data',
  hooks: {
    'astro:build:done': ({ dir }) => {
      cpSync(new URL('./flight-manager/', import.meta.url), new URL('flight-manager/', dir), { recursive: true });
    },
  },
};

export default defineConfig({
  site: 'https://bridouille.github.io',
  integrations: [flightManagerData],
});
