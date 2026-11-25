# Thunder

Source code for [thunderapp.dev](https://thunderapp.dev).

## Development

Use Node.js 26, as in CI.

```sh
npm ci
npm run dev
```

Run `npm run lint` to check the code and `npm run build` to type-check and build the site into `dist/`. Run `npm run preview` to serve that build locally.

The landing page is in `src/pages/landing.tsx`, its screenshots are in `public/previews/`, and the legal documents are in `src/markdown/`. The build includes direct-entry HTML for the privacy policy and terms of use, plus a 404 page for GitHub Pages.
