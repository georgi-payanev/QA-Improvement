# 06 — Finding & Catching Elements
**Name:** Georgi
**Date:** 2026-08-18
**Site:** https://pl-test.eduboom.net/
**Account:** tester.17@abv.bg (Test33)

---

## Exercise 1 — Five Selection Methods
- `getElementById('lesson-title')` returned `null` — no element on this page has that `id`. `getElementById('app')` did work, since the whole app is mounted inside `<div id="app">`.
- There are 2 `.subject-content-wrapper` elements on the Dashboard (Mathematics, Chemistry — my test account has Chemistry as a second subject, not Physics).
- `getElementsByClassName` and `querySelectorAll` agreed: 2 `.lesson-title` elements.
- There are 14 `<button>` elements on the whole page.

## Exercise 2 — Nested Elements in a Container
- `mathBlock` has 3 buttons vs. 14 on the whole page — scoping the search massively cuts down the results.
- The active tab's text is `"test9"`.
- There are 0 inactive tabs in the Mathematics block — my account only has one test/chip in that subject, so there's nothing else to be "inactive."

## Exercise 3 — Parent/Child/Sibling Navigation
- The row above the title has class `"v-container v-locale--is-ltr d-flex p-0 text-container"`.
- That row has 2 children (the number badge and the title).
- The sibling I landed on (`previousElementSibling`) has the text `"1"`.
- The `===` check returned `true`.
- Climbing 3 levels lands on an `<A>` tag with href `"/mathematics/3-primary-school/test9/41-rachunki-pamieciowe-dodawanie-i-odejmowanie"`.

## Exercise 4 — Extracting Data From Repeated Cards
- 1 - 4.1 Rachunki pamięciowe — dodawa...
- 1 - 5.2 Metoda naukowa – etapy, przy...
- 0 titles contained "PLW" (my account's lesson titles don't use that prefix).
- There are 20 grade pills on the Lessons page.

## Exercise 5 — Attributes, Properties, Form Inputs
- `data-title` on the deny button: `"deny-cookies"` (the accept button matched `[data-title="accept-cookies"]` too).
- `getAttribute('href')` gave `"/mathematics/3-primary-school/test9/41-rachunki-pamieciowe-dodawanie-i-odejmowanie"`; `.href` gave the full `"https://pl-test.eduboom.net/mathematics/3-primary-school/test9/41-rachunki-pamieciowe-dodawanie-i-odejmowanie"` — `getAttribute` returns exactly what's written in the HTML (a relative path), while `.href` is the browser's resolved, absolute property.
- `chipsList.textContent` was just `"test9"` (the tab label); `chipsList.innerHTML` included the full wrapping markup — the `<div class="chips__list__item active">`, the `<button class="chip chip--active">`, and the `<span class="chip__text">` around it.
- The settings form has 5 inputs — types `text, email, text, text, text` — and all 5 are disabled by default, before clicking the edit icon. `inputs[1].value` (the email field) held `"tester.17@abv.bg"`.
- Also confirmed `setAttribute`/`getAttribute` round-trip: set `data-training="week6"` on `mathBlock`, read it back as `"week6"` — this only exists in memory and disappears on reload.
