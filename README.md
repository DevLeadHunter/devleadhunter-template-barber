# DevLeadHunter — template barber

Nuxt 4 layer for the **barber / coiffeur** website template (`template_id`: `barber`).

Pixel-perfect integration of the Pencil maquette (`devleadhunter-pencil/Barber/maquette.pen`). Content is hardcoded for now — `SiteContent` / Storyblok / demo-host wiring comes later.

## Develop

```bash
npm install
npm run dev
```

Playground: `.playground/` extends this layer and renders `BarberRoot`.

## Structure

- `app/components/BarberRoot.vue` — public root
- `app/components/sections/*` — Hero, About, Services, CTA, Why, Footer
- `.playground/public/images/` — assets from the Pencil export
