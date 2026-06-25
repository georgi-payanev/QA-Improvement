# 02 — DOM Structure exercises

**Name:** Adriana Zlatanova
**Date:** 2026-06-25
**Site:** https://eduboom-pl-test.bgosoftware.net

---

## Exercise 1 — Breadcrumb

- "Matematyka" is 7 levels deep from `<main>`
- The logo image is NOT inside `<main>` — it lives inside `<div class="app-top-bar">` which is a sibling of `<main>`, not a child of it. The shared ancestor that contains both the logo and `<main>` is the outer Vuetify layout `<div class="v-layout">`
- Direct parent of the "Matematyka" text: `<div class="v-card-title p-0 subject-card-title">`

---

## Exercise 2 — Navigate Up

- The entire Matematyka row is wrapped in: `<div class="subject-content-wrapper">`
- The entire Chemia row is also wrapped in: `<div class="subject-content-wrapper">`
- Yes, they are the same tag and the same class — every subject row reuses exactly the same container structure. This confirms the page is built from a repeated component: the data (subject name, lessons) changes but the HTML skeleton is identical for each subject

---

## Exercise 3 — Siblings

- Lesson card tag: `<button>` with Vuetify classes (no `id`, no `data-testid`)
- The Matematyka cards container has 6 direct children — 6 lesson card `<button>` siblings
- Grade filter pill class: `chip-wrapper`
- There are 20+ grade filter pills as siblings under the same parent on the Lessons page

---

## Exercise 4 — Repeated Pattern

- Yes, card 1 and card 2 have identical opening tags — same tag, same class names
- No lesson card has a unique `id` or `data-testid`
- To target the third card specifically you would use a positional selector like `:nth-child(3)`, or match it by the text content inside the card (e.g., find the card that contains "4.3" or the specific lesson title) — Playwright supports `locator.filter({ hasText: '...' })` for exactly this

---

## My own findings

**Parent-child: logo link and logo image**
- Parent: `<a href="/dashboard">` — no class, no id, sits inside `div.app-nav-bar-wrap`
- Child: `<img alt="" width="168">` — the Eduboom logo image, also no class, no id, empty alt
- Page: Dashboard
- Observation: neither the parent nor the child has a unique identifier on its own. The only reliable selector is a descendant one that uses the parent's `href`: `[href="/dashboard"] img`. This is a real example of how a parent-child relationship becomes the selector strategy when individual elements have no usable attributes

**Sibling group: sidebar navigation items**
- Parent: `<div>` — the sidebar nav container (no meaningful class of its own)
- Siblings: three `<a class="app-menu-item ...">` elements — Pulpit, Lekcje, Profil — all sharing the same tag, same base classes, same internal structure
- Page: Dashboard
- Observation: the siblings are structurally identical; the only things that differ per item are `href`, `data-title`, and the active state. The active item gets one extra class (`v-btn--active`) and one extra attribute (`aria-current="page"`). This is the same active-state pattern as the category tabs from Exercise 3 — a recurring design pattern across the whole site: one extra class or attribute flags the currently selected item within a group of identical siblings
