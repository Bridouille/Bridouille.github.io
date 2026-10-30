# bridouille.github.io

The Studio Bridoux AB website, built with [Astro](https://docs.astro.build) and published on GitHub Pages at
https://bridouille.github.io.

Pushing to `master` publishes the site automatically, usually in 1 to 2 minutes. Follow the run in the repo's
**Actions** tab.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.23 or newer (check with `node -v`).

**Start the website locally:**

```sh
cd ~/Desktop/work/Bridouille.github.io
npm install        # only the first time, and after changing package.json
npm run dev
```

Then open http://localhost:4321 in your browser. The page reloads by itself every time you save a file. Press
`Ctrl+C` in the terminal to stop it.

- **On your phone:** run `npm run dev -- --host` instead, then open the "Network" address it prints from your phone
  (same Wi-Fi).
- **At phone size on your computer:** open Chrome's developer tools (`Cmd+Option+I`) and click the phone icon.

**Check the final version before pushing:**

```sh
npm run build      # builds the final site into dist/, the same way GitHub does
npm run preview    # serves that build at http://localhost:4321
```

If `npm run build` works on your computer, it will work on GitHub.

## Where things are

| What | Where | URL |
| --- | --- | --- |
| Home page | `src/pages/index.astro` | `/` |
| CrossFit Timer page | `src/pages/crossfit-timer.astro` | `/crossfit-timer/` |
| Heart Rate Monitor page | `src/pages/heartrate-monitor.astro` | `/heartrate-monitor/` |
| Privacy policies | `src/pages/*-privacy-policy.md` | `/<file name>/` |
| Not found page | `src/pages/404.astro` | any unknown URL |
| Play links, contact email, app list in the footer | `src/data/site.ts` | |
| Screenshots and app icons | `src/assets/<app>/` | |
| Top bars, footers, phone frame, logo | `src/components/` | |
| Page shell (`<head>`, favicon, theme colors) | `src/layouts/Base.astro`, `src/styles/global.css` | |
| Files served exactly as they are | `public/` | same path as in the folder |
| Flight Pass data | `flight-manager/` | `/flight-manager/...` |

**Every file in `src/pages/` becomes a page, and its file name is its URL.** For example,
`src/pages/foo-privacy-policy.md` is served at `/foo-privacy-policy/`.

**Everything in `public/` is copied as is.** That's where these live, at the same URLs as before:

- `public/app-ads.txt`
- `public/googled66975d7224f5af9.html`, the Google site verification file
- the favicons and `og-image.png`

Never rename or move files in `public/`: apps and Google request them by these exact paths.

**`flight-manager/` must stay at the root of the repo.** It holds the Flight Pass airports, airlines, aircraft JSON and
images, and the app downloads them from GitHub by their path in this repo, for example
`https://raw.githubusercontent.com/Bridouille/Bridouille.github.io/master/flight-manager/v2/airports.json`. The airline
logos and aircraft photos are loaded the same way. Moving the folder breaks every released version of the app. The
build also copies it into the site, so `https://bridouille.github.io/flight-manager/v2/airports.json` works too
(`astro.config.mjs`).

## Common tasks

### Edit text on a page

Open the page's file in `src/pages/`, change the text, and check it with `npm run dev`. The text is plain HTML in the
lower part of each `.astro` file. The part between the two `---` lines at the top is the code that imports images and
data.

### Add a privacy policy

1. Copy an existing policy, for example `src/pages/crossfit-timer-privacy-policy.md`, to
   `src/pages/my-app-privacy-policy.md`.
2. Change the `title:` at the top, then write the policy in Markdown below the second `---`. The title is shown as the
   page heading, so don't repeat it in the text.
3. It's live at `/my-app-privacy-policy/` after you push.

### Add a simple page (text only)

Create a Markdown file in `src/pages/`, like a privacy policy. It uses the same layout, with the site header and footer:

```md
---
layout: ../layouts/PolicyLayout.astro
title: Terms of service
description: One sentence for search engines.
---

Your text in Markdown.
```

### Add a page for a new app

1. Put the icon and screenshots in a new folder, `src/assets/my-app/`. Use PNG or JPG files; they are converted to
   smaller WebP images during the build.
2. Add the app to `src/data/site.ts`, with its name, page URL, Play Store link and privacy policy URL. It then appears
   in the footer automatically.
3. Copy `src/pages/crossfit-timer.astro` to `src/pages/my-app.astro`, which will be served at `/my-app/`. Change the
   imports at the top to your new images, set `const app = apps.myApp;`, and rewrite the text.
4. Add a card for it on the home page in `src/pages/index.astro`: copy one of the `<article class="card ...">` blocks.
5. Add its privacy policy (see above).

To show a screenshot in a phone frame:

```astro
<Phone src={screenshot} alt="What the screenshot shows" />
<Phone src={screenshot} alt="..." statusBar />  <!-- draws an Android status bar on top, for screenshots without one -->
```

### Change a Play link, the email or the GitHub link

Edit `src/data/site.ts`. Every page uses the links from there.

### Update the Flight Pass data

Replace the files in `flight-manager/`, keeping the same names and folders, then push.

## Publishing

`.github/workflows/deploy.yml` builds the site and publishes it on every push to `master`. You can also run it by hand
from **Actions › Deploy to GitHub Pages › Run workflow**.

This needs **Settings › Pages › Build and deployment › Source** set to **GitHub Actions**. That's a one-time setting.

## Updating Astro

Every few months:

```sh
npm outdated       # shows what's out of date
npm update         # updates within the current major versions
npm audit          # checks for known vulnerabilities
npm run build      # make sure everything still builds
```

For a new major version (for example Astro 7 to 8), run `npx @astrojs/upgrade` and read the upgrade guide at
https://docs.astro.build.
