# August for Dutchess

Campaign website for August Uribe, Democratic candidate for Dutchess County Legislator, Dover & East Pawling.

Production site: https://www.augustfordutchess.com

## Stack

- [Astro 4](https://astro.build/) static site
- React 18 islands for interactive components (contact & volunteer forms)
- Tailwind CSS
- Hosted on Vercel
- Form submissions handled by [Web3Forms](https://web3forms.com/)
- Donations handled by [ActBlue](https://actblue.com/)
- Analytics via Google Analytics (loaded through Partytown)

## Local development

Requires Node 20+.

```bash
npm install
cp .env.example .env   # then fill in real values
npm run dev            # starts the dev server on http://localhost:4321
```

### Environment variables

| Variable | Purpose |
| --- | --- |
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID (`G-XXXXXXXXXX`) |
| `PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key — delivers contact & volunteer form submissions to the campaign inbox |

Both are `PUBLIC_*` vars, which Astro inlines at build time. Any change to these requires a redeploy to take effect.

## Scripts

```bash
npm run dev       # local dev server
npm run build     # production build to ./dist
npm run preview   # serve the production build locally
```

## Project layout

```
src/
  components/   # Astro + React components (Nav, Footer, ContactForm, VolunteerForm, ...)
  layouts/      # Page layouts
  pages/        # Route files (index.astro, contact.astro, get-involved.astro, ...)
public/         # Static assets (images, favicons)
```

## Deploys

Pushes to `main` deploy automatically via Vercel. Preview deploys are created for every PR.
