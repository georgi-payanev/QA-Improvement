# 06 — Finding & Catching Elements

**Name:** Adriana Zlatanova
**Date:** 2026-08-14
**Site:** https://pl-test.eduboom.net/

---

## Exercise 1 — Five Selection Methods
- `getElementById('lesson-title')` returned `null` — this app doesn't put `id` attributes on lesson content, only on the root `#app` div (`getElementById('app')` works fine)
- There are 2 `.subject-content-wrapper` elements on the Dashboard
- `getElementsByClassName` and `querySelectorAll` agreed: 4 `.lesson-title` elements
- There are 12 `<button>` elements on the whole Dashboard page

## Exercise 2 — Nested Elements in a Container
- `mathBlock` (`.subject-content-wrapper[0]`) turned out to be the **Physics** block, not Mathematics — the Dashboard sorts subjects by "Ostatnio oglądane" (most recently watched), so index `[0]` isn't guaranteed to be any particular subject. It had 3 buttons (1 tab + 2 carousel arrows); the whole page has 12
- The active tab's text is `"test3"`
- There are 0 inactive tabs in that block, since only one section (`test3`) has been started so far

## Exercise 3 — Parent/Child/Sibling Navigation
- The row above the title has class `"v-container v-locale--is-ltr d-flex p-0 text-container"`
- That row has 2 children (the number badge and the title)
- The sibling I landed on (`previousElementSibling`) has the text `"1"`
- The `===` check returned `true`
- Climbing 3 levels lands on an `<A>` tag with `href` `"/physics/6-secondary-school/test3/52-metoda-naukowa-etapy-przyklady-i-dokumentowanie-wynikow-1"`

## Exercise 4 — Extracting Data From Repeated Cards
- 1 - 5.2 Metoda naukowa – etapy, przy... *(this title is genuinely cut off with a literal `...` baked into the DOM text node itself, not a CSS ellipsis — worth remembering if a test ever asserts on exact title text)*
- 1 - 4.10 Analizowanie informacji
- 2 - PLW Lesson 4 Missions
- 3 - PLW Lesson 2 Missions from CSV
- 2 titles contained "PLW"
- There are 20 grade pills on the Lessons page

## Exercise 5 — Attributes, Properties, Form Inputs
- `data-title` on the accept button: `"accept-cookies"`
- `getAttribute('href')` gave `"/physics/6-secondary-school/test3/52-metoda-naukowa-etapy-przyklady-i-dokumentowanie-wynikow-1"`; `.href` gave the full `"https://pl-test.eduboom.net/physics/6-secondary-school/test3/52-metoda-naukowa-etapy-przyklady-i-dokumentowanie-wynikow-1"` — `getAttribute` returns exactly what's in the HTML (a relative path), `.href` is the browser's resolved absolute URL
- `chipsList.textContent` was just `"test3"` (the plain tab label); `chipsList.innerHTML` included the wrapping `<div class="chips__list__item active">`, `<button class="chip chip--active">` and `<span class="chip__text">` tags around it
- The settings form has 5 inputs (text, email, text, text, text) and all 5 are disabled by default, before clicking the edit icon; `inputs[1]` (the email field) held `"adriana+2@ucha.se"`
