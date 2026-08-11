# 01 — HTML & CSS Element Analysis and Practical Exercises

**Name:** Adriana Zlatanova
**Date:** 2026-06-24
**Site:** https://eduboom-pl-test.bgosoftware.net

---

## Exercise 1 — Map the Page Structure

**Does the page have a `<header>` tag?**
No. The top bar is a `<div class="app-top-bar">`, not a semantic `<header>` element.

**Does the page have a `<footer>` tag?**
No. There is no `<footer>` element anywhere on the page.

**What semantic tags ARE present? (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`)**
Only `<main>` is present — `<main class="v-main" style="...">`. No `<nav>`, `<section>`, `<article>`, or `<aside>` tags exist. The navigation is built with styled `<a>` and `<div>` elements, not a semantic `<nav>`.

**What tag wraps the top bar with the logo and the user avatar?**
`<div class="app-top-bar">` wraps the top navigation bar. Inside it is `<div class="app-nav-bar-wrap">` which contains the logo and user area.

**Does the `<nav>` element have an `id` or `data-testid` attribute?**
There is no `<nav>` element at all on the page, so this question does not apply. The absence of `<nav>` is itself a noteworthy observation.

---

## Exercise 2 — Inspect the Navigation

**The full class attribute of the Lekcje button:**
`v-btn v-theme--appLightTheme text-vblack v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-text w-100 d-flex align-items-center justify-start app-menu-item app-menu-item-desktop tablet-menu-item p-0`

**The extra class that the currently active menu item has:**
`v-btn--active` (also has `aria-current="page"` attribute)

**Why do you think there is no `id` or `data-testid` on these buttons?**
These navigation items were built with Vuetify and the team did not add test-specific attributes. They rely on `data-title` attributes (e.g. `data-title="lessons"`) and CSS classes for identification, but none of those were created with automation in mind. It means writing reliable selectors for these elements is harder.

---

## Exercise 3 — Inspect Real Buttons

**The HTML tag used for the lesson card (the one that surprised you):**
The lesson category tabs/chips are `<button>` elements with `role="button"`. What is surprising is that they use `<button>` correctly, but have no `id` or `data-testid`. Their only unique identifier is a dynamically generated UUID in the `id` attribute (e.g. `id="019c3308-a573-7169-a08b-b76accaa886f"`).

**The custom class name of the left arrow button (with `prev`):**
`slider-btn-prev`

**The custom class name of the right arrow button (with `next`):**
`slider-btn-next`

**What attribute or class marks the left arrow button as disabled?**
Both: the HTML `disabled` attribute is present (`disabled=""`), AND the class `v-btn--disabled` is added by Vuetify.

**CSS selector you would use to target only the disabled arrow button:**
`.slider-btn-prev[disabled]` or `.slider-btn-prev.v-btn--disabled`
(The `[disabled]` attribute selector is more reliable because `v-btn--disabled` is a Vuetify-generated class that might change.)

---

## Exercise 4 — Inspect Images and Links

**The `alt` value of the Eduboom logo image:**
Empty string `""` — the `alt` attribute exists but has no value. This is bad practice.

**The `alt` value of the Chemia subject image:**
`"imageChemia"` — the value is present but not very descriptive. A better value would be something like `"Chemistry subject icon"` or `"Chemia"`.

**Would a screen reader understand these images correctly?**
No. The logo image has an empty `alt`, so a screen reader would skip it completely — users relying on assistive technology would not know the logo exists. The Chemia image `alt="imageChemia"` reads as a technical identifier, not a meaningful description. Neither image provides good accessibility.

---

## Exercise 5 — Write and Test CSS Selectors

| Selector tested | Matches | Notes |
|---|---|---|
| `.cookie-action-btn-ok` | 1 | Unique — good for automation |
| `.cookie-action-btn-deny` | 1 | Unique — good for automation |
| `button` | 13+ | Not useful — matches everything |
| `.logo-link` | 0 | Class does not exist on this site |
| `.logo-link img` | 0 | Same — class not present |
| `.app-menu-item.v-btn--active` (active nav item) | 1 | Unique — targets only the current page nav link |
| `[alt="user"]` | 2 | Not unique — avatar appears in two places in the DOM |

**Which selectors were unique (matched exactly 1 element)?**
`.cookie-action-btn-ok`, `.cookie-action-btn-deny`, and `.app-menu-item.v-btn--active`

**Which selector matched the most elements?**
`button` — matched 13 or more elements depending on page state.

**What is the difference between `.logo-link img` and `img`?**
`img` selects every `<img>` element on the entire page. `.logo-link img` would limit the scope to only `<img>` elements that are descendants of an element with class `logo-link`. The descendant selector narrows the match and reduces false positives. On this site, `.logo-link` does not exist, so `.logo-link img` matches nothing — but the principle is correct: descendant selectors give context and precision.

---

## Homework

### Required Elements

---

## Element 1: Eduboom logo image

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<img>`

**HTML snapshot:**
```
<img data-v-74a9cbf1="" src="data:image/svg+xml,..." alt="" width="168" height="20">
```
*(src is an inline SVG data URI — not a file path)*

**Available attributes:**
- id: none
- class: none (no class on this img element)
- type: not applicable
- href: not applicable
- src: inline SVG data URI (data:image/svg+xml,...)
- alt: "" (empty — bad practice)
- data-testid: none
- other relevant attributes: `data-v-74a9cbf1` (Vue internal), `width="168"`, `height="20"`

**CSS selectors:**
- By tag: `img` (note: matches 4+ elements — not unique)
- By attribute (alt): `[alt=""]` (note: matches multiple elements with empty alt — not unique)
- By attribute (width): `[width="168"]` (note: likely matches 1 element — verify in DevTools)
- Descendant: `[href="/dashboard"] img` (note: targets img inside the logo link — likely unique)

**Best selector for automation:** `[href="/dashboard"] img` or `[width="168"]`
**Why:** The logo image has no id, no class, and empty alt. The safest approach is to target it via its parent `<a>` link (which points to /dashboard) as a descendant selector. `[width="168"]` is also specific but depends on the fixed width not changing.

**Notes / observations:**
The `alt` attribute is empty. This is an accessibility failure — screen readers will skip this image entirely and users won't know the logo exists. There is also no `id` or `data-testid`, which makes it hard to select reliably. The src is an embedded SVG (data URI), not an external file.

---

## Element 2: Logo link (wrapping the logo image)

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<a>`

**HTML snapshot:**
```
<a data-v-74a9cbf1="" href="/dashboard" class="">
```

**Available attributes:**
- id: none
- class: "" (empty class attribute)
- type: not applicable
- href: /dashboard
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `data-v-74a9cbf1` (Vue internal)

**CSS selectors:**
- By tag: `a` (note: matches many elements — not unique)
- By attribute (href): `[href="/dashboard"]` (note: matches 1–2 elements — verify in DevTools)
- Descendant: `a:has(img)` (note: targets any `<a>` that contains an `<img>` — may match multiple)
- Combination: `[href="/dashboard"]:has(img)` (note: most specific — likely unique)

**Best selector for automation:** `[href="/dashboard"]:has(img)`
**Why:** Combines the href value (unique to logo link) with the fact that it wraps an image, making it very specific without needing a class or id.

**Notes / observations:**
The class attribute exists but is empty — no meaningful CSS class is applied. There is no `id` or `data-testid`. The `href="/dashboard"` attribute is the most useful hook for automation. The link appears twice in the DOM (the page count was 2), likely once in the top bar and once in the sidebar nav.

---

## Element 3: Lekcje navigation button

**Page:** Dashboard — side menu / sidebar (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<a>`

**HTML snapshot:**
```
<a data-v-dc2c74e0="" href="/lessons" class="v-btn v-theme--appLightTheme text-vblack v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-text w-100 d-flex align-items-center justify-start app-menu-item app-menu-item-desktop tablet-menu-item p-0" data-title="lessons">
```

**Available attributes:**
- id: none
- class: v-btn v-theme--appLightTheme text-vblack v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-text w-100 d-flex align-items-center justify-start app-menu-item app-menu-item-desktop tablet-menu-item p-0
- type: not applicable (it's an `<a>`, not a `<button>`)
- href: /lessons
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `data-title="lessons"`, `data-v-dc2c74e0` (Vue internal)

**CSS selectors:**
- By tag: `a` (note: matches many elements — not unique)
- By class: `.app-menu-item` (note: matches 3 elements — all nav items share it)
- By attribute (href): `[href="/lessons"]` (note: matches 1 element — unique)
- By attribute (data-title): `[data-title="lessons"]` (note: matches 1 element — unique)
- Descendant: `.app-menu-item[href="/lessons"]` (note: matches 1 element)

**Best selector for automation:** `[data-title="lessons"]`
**Why:** The `data-title` attribute is specific to this element, clearly describes its purpose, and is stable — it won't change with layout or style updates. It matches exactly 1 element.

**Notes / observations:**
This is actually an `<a>` tag styled to look like a button (Vuetify pattern). It has no `id` or `data-testid`. The many Vuetify utility classes (`v-btn--density-default`, etc.) should never be used as selectors — they're generated by the framework and describe visual behaviour, not identity. The `data-title` attribute is a custom attribute that works as a reasonable substitute.

---

## Element 4: Pulpit navigation button (active)

**Page:** Dashboard — sidebar (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<a>`

**HTML snapshot:**
```
<a data-v-dc2c74e0="" href="/dashboard" aria-current="page" class="v-btn v-btn--active v-theme--appLightTheme text-vblack v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-text w-100 d-flex align-items-center justify-start app-menu-item app-menu-item-desktop tablet-menu-item p-0" data-title="dashboard">
```

**Available attributes:**
- id: none
- class: (same as Lekcje) + `v-btn--active` extra class
- type: not applicable
- href: /dashboard
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `data-title="dashboard"`, `aria-current="page"`, `data-v-dc2c74e0`

**CSS selectors:**
- By tag: `a` (note: matches many — not unique)
- By class (active): `.app-menu-item.v-btn--active` (note: matches 1 element — the currently active page)
- By attribute (data-title): `[data-title="dashboard"]` (note: matches 1 element — unique)
- By aria attribute: `[aria-current="page"]` (note: matches 1 element — tracks active page)

**Best selector for automation:** `[aria-current="page"]`
**Why:** The `aria-current="page"` attribute is a semantic accessibility standard that marks the currently active page link. It's the most meaningful and reliable way to select "whichever nav item is currently active" regardless of which page you're on.

**Notes / observations:**
The extra class `v-btn--active` is added by Vuetify and could be used, but `aria-current="page"` is a better choice because it's a semantic HTML standard, not a framework-specific class. Both target the active nav item dynamically.

---

## Element 5: OK cookie consent button

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<button>`

**HTML snapshot:**
```
<button type="button" class="v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat cookie-action-btn-ok" small="" data-title="accept-cookies">
```

**Available attributes:**
- id: none
- class: v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat cookie-action-btn-ok
- type: button
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `data-title="accept-cookies"`, `small=""`

**CSS selectors:**
- By tag: `button` (note: matches 13+ elements — not unique)
- By class: `.cookie-action-btn-ok` (note: matches 1 element — unique)
- By attribute: `[data-title="accept-cookies"]` (note: matches 1 element — unique)
- By type + class: `button[type="button"]` (note: matches many — not unique)

**Best selector for automation:** `.cookie-action-btn-ok`
**Why:** Custom class that clearly describes the element's purpose, matches exactly 1 element, and is not tied to visual styling. It will survive layout changes as long as the class name stays the same.

**Notes / observations:**
No `id` or `data-testid`. The Vuetify framework classes (`v-btn`, `v-btn--density-default`, etc.) should not be used as selectors — they are visual/layout descriptors and may change with framework updates. The custom class `cookie-action-btn-ok` is the best available hook.

---

## Element 6: Odmowa cookie consent button

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<button>`

**HTML snapshot:**
```
<button type="button" class="v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat text-fix cookie-action-btn-deny" small="" data-title="deny-cookies" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0); caret-color: rgb(0, 0, 0);">
```

**Available attributes:**
- id: none
- class: v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat text-fix cookie-action-btn-deny
- type: button
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `data-title="deny-cookies"`, `small=""`, inline `style` attribute

**CSS selectors:**
- By tag: `button` (note: matches many — not unique)
- By class: `.cookie-action-btn-deny` (note: matches 1 element — unique)
- By attribute: `[data-title="deny-cookies"]` (note: matches 1 element — unique)
- Combination: `.cookie-action-btn-deny[type="button"]` (note: matches 1 element)

**Best selector for automation:** `.cookie-action-btn-deny`
**Why:** Same reasoning as the OK button — it's a purpose-specific custom class that matches exactly 1 element.

**Notes / observations:**
This button has an inline `style` attribute with color values. This is unusual — it suggests the styling is being applied dynamically, possibly by Vuetify's theme system. Inline styles should never be used as selectors for automation. This button also has an extra class `text-fix` that the OK button does not have.

---

## Element 7: The `<nav>` element

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** Does not exist

**HTML snapshot:**
```
NOT PRESENT — there is no <nav> element on this page
```

**Available attributes:**
- id: N/A
- class: N/A
- type: N/A
- href: N/A
- src: N/A
- alt: N/A
- data-testid: N/A
- other relevant attributes: N/A

**CSS selectors:**
- By tag: `nav` (note: matches 0 elements)

**Best selector for automation:** none available
**Why:** The element does not exist.

**Notes / observations:**
This is a significant accessibility and semantic HTML gap. The entire navigation is built with `<div>`, `<a>`, and Vuetify components — none of them wrapped in a `<nav>` element. A screen reader user relying on landmark navigation (jumping between `<nav>` and `<main>`) would not be able to navigate this site efficiently. From a test automation perspective, there is no semantic landmark to scope navigation-related selectors to.

---

## Element 8: The `<main>` element

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<main>`

**HTML snapshot:**
```
<main class="v-main" style="--v-layout-left: 0px; --v-layout-right: 0px; --v-layout-top: 0px; --v-layout-bottom: 0px;">
```

**Available attributes:**
- id: none
- class: v-main
- type: not applicable
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: inline `style` with Vuetify CSS custom properties for layout

**CSS selectors:**
- By tag: `main` (note: matches 1 element — unique)
- By class: `.v-main` (note: likely matches 1 element — verify)

**Best selector for automation:** `main`
**Why:** The element tag itself is unique on the page (there should only ever be one `<main>` per page according to HTML spec). No need for a class or id.

**Notes / observations:**
`<main>` is the only semantic landmark element present on the page. It has no `id` or `data-testid`. The `.v-main` class is a Vuetify class and shouldn't be used as a test selector. Using `main` as a selector is perfectly valid and reliable.

---

## Element 9: Chemia subject image

**Page:** Lessons (https://eduboom-pl-test.bgosoftware.net/lessons)
**Tag:** `<img>`

**HTML snapshot:**
```
<img data-v-aeb70e48="" loading="eager" src="/storage/24e9ac19-a153-4fc6-bb84-6a23c61d5d5a.svg" alt="imageChemia" class="lesson-section-detailed-image">
```

**Available attributes:**
- id: none
- class: lesson-section-detailed-image
- type: not applicable
- href: not applicable
- src: /storage/24e9ac19-a153-4fc6-bb84-6a23c61d5d5a.svg
- alt: imageChemia
- data-testid: none
- other relevant attributes: `loading="eager"`, `data-v-aeb70e48` (Vue internal)

**CSS selectors:**
- By tag: `img` (note: matches many elements — not unique)
- By class: `.lesson-section-detailed-image` (note: matches multiple subject images — not unique)
- By attribute (alt): `[alt="imageChemia"]` (note: matches 1 element — unique)
- By attribute (src contains): `[src*="24e9ac19"]` (note: matches 1 element — but depends on UUID)
- Combination: `.lesson-section-detailed-image[alt="imageChemia"]` (note: matches 1 element)

**Best selector for automation:** `[alt="imageChemia"]`
**Why:** The `alt` attribute is specific to the Chemistry subject and matches exactly 1 element. It does not depend on a UUID in the file path.

**Notes / observations:**
The `alt` value `"imageChemia"` is present (better than empty) but not descriptive in plain language. A more meaningful alt would be `"Chemistry"` or `"Chemia subject icon"`. The src contains a UUID-style filename which would be difficult to use in a selector. The class `.lesson-section-detailed-image` is shared across all subject images.

---

## Element 10: Hamburger / burger menu button

**Page:** Dashboard or Lessons page (mobile/tablet viewport)
**Tag:** `<button>`

**HTML snapshot:**
```
Not visible in desktop viewport — the sidebar is permanently displayed at desktop width.
In mobile viewport, the hamburger renders as a Vuetify icon button inside the app bar.
```

**Available attributes:**
- id: none (based on DOM inspection)
- class: Vuetify v-btn v-btn--icon classes (framework-generated)
- type: button
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: none observed

**CSS selectors:**
- In mobile viewport context: `.v-app-bar__nav-icon` or `button.v-btn--icon` inside the app bar area
- Scoped: `.app-top-bar button.v-btn--icon` (note: verify count in DevTools — may not be unique)

**Best selector for automation:** Requires manual verification in DevTools at mobile viewport
**Why:** The hamburger does not render in the desktop DOM. To inspect it, resize the browser to a narrow viewport (under ~960px) and use the element picker.

**Notes / observations:**
This element shows a key challenge: some elements only exist in the DOM under certain viewport conditions. In Playwright tests, you would need to set the viewport size to mobile dimensions to interact with this button. The element has no `id` or `data-testid`, making it harder to target reliably across breakpoints.

---

### Free-Choice Elements

---

## Element 11: User avatar image (top bar)

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<img>`

**HTML snapshot:**
```
<img src="/assets/default_user_img-DNoukM7s.svg" class="user-card-image" alt="user">
```

**Available attributes:**
- id: none
- class: user-card-image
- type: not applicable
- href: not applicable
- src: /assets/default_user_img-DNoukM7s.svg
- alt: user
- data-testid: none
- other relevant attributes: none

**CSS selectors:**
- By tag: `img` (note: matches many — not unique)
- By class: `.user-card-image` (note: matches 2 elements — not unique, appears twice in DOM)
- By attribute (alt): `[alt="user"]` (note: matches 2 elements — not unique)
- By attribute (src): `[src="/assets/default_user_img-DNoukM7s.svg"]` (note: matches 2 elements — not unique)

**Best selector for automation:** unclear — no reliable unique selector available
**Why:** The image appears twice in the DOM (top bar and sidebar). Without an `id` or `data-testid` it is not possible to target just the top-bar instance without a parent-scoped descendant selector.

**Notes / observations:**
The `alt="user"` is technically present but not descriptive — a screen reader would say "user" with no additional context. A better alt would be "Profile photo" or "User avatar". This element appears twice (top bar + sidebar), creating ambiguity for automation.

---

## Element 12: Lesson category chip / tab button

**Page:** Dashboard (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<button>`

**HTML snapshot:**
```
<button data-v-94660a52="" class="chip chip--active" id="019c3308-a573-7169-a08b-b76accaa886f" role="button" style="--v-chip-color-default: #FF6156; --v-chip-color-lighter: #FFF4F3; --v-chip-color-darker: #920A00;">
```

**Available attributes:**
- id: 019c3308-a573-7169-a08b-b76accaa886f (UUID — dynamically generated, not reliable)
- class: chip chip--active
- type: not specified (defaults to "button")
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `role="button"`, inline `style` with CSS custom properties, `data-v-94660a52`

**CSS selectors:**
- By tag: `button` (note: matches many — not unique)
- By class (active): `.chip.chip--active` (note: matches 2 elements — both active chips)
- By class (inactive): `.chip.chip--inactive` (note: matches inactive chips)
- By id: `#019c3308-a573-7169-a08b-b76accaa886f` (note: matches 1 — but UUID changes, unreliable)

**Best selector for automation:** `.chip.chip--active` for "any active tab" or `.chip.chip--inactive` for "any inactive tab"
**Why:** The class combination `.chip.chip--active` or `.chip.chip--inactive` describes the state reliably. The `id` is a UUID and should not be used — it may change between deployments.

**Notes / observations:**
The `id` attribute on this element exists but contains a UUID, which is a dynamically generated identifier. UUIDs as `id` values are not suitable for test selectors because they can change between environments or deployments. The `.chip--active` / `.chip--inactive` class pattern is a much better indicator of tab state for automation purposes.

---

## Element 13: Left arrow (prev) button — disabled state

**Page:** Lessons (https://eduboom-pl-test.bgosoftware.net/lessons)
**Tag:** `<button>`

**HTML snapshot:**
```
<button data-v-688dab6f="" type="button" class="v-btn v-btn--disabled v-btn--icon v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-elevated prev-next-btn slider-btn-prev" disabled="">
```

**Available attributes:**
- id: none
- class: v-btn v-btn--disabled v-btn--icon v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-elevated prev-next-btn slider-btn-prev
- type: button
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `disabled=""` (HTML disabled attribute), `data-v-688dab6f`

**CSS selectors:**
- By tag: `button` (note: matches many — not unique)
- By class: `.slider-btn-prev` (note: matches 1 element — unique)
- By disabled state: `.slider-btn-prev[disabled]` (note: matches 1 element only when disabled)
- By disabled class: `.slider-btn-prev.v-btn--disabled` (note: matches 1 element only when disabled)

**Best selector for automation:** `.slider-btn-prev`
**Why:** The custom class `slider-btn-prev` is specific to this button and matches exactly 1 element. To also assert its disabled state, add `[disabled]`: `.slider-btn-prev[disabled]`.

**Notes / observations:**
This is a great example of how disabled state is represented in HTML. Both a CSS class (`v-btn--disabled`) and the native HTML `disabled` attribute are applied simultaneously — Vuetify adds the class for styling while the `disabled` attribute makes the button non-interactive for browsers and assistive technology. For assertions in tests, checking `button[disabled]` is more reliable than checking a CSS class.

---

## Element 14: Right arrow (next) button — enabled state

**Page:** Lessons (https://eduboom-pl-test.bgosoftware.net/lessons)
**Tag:** `<button>`

**HTML snapshot:**
```
<button data-v-688dab6f="" type="button" class="v-btn v-btn--elevated v-btn--icon v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-elevated prev-next-btn slider-btn-next">
```

**Available attributes:**
- id: none
- class: v-btn v-btn--elevated v-btn--icon v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-elevated prev-next-btn slider-btn-next
- type: button
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `data-v-688dab6f`

**CSS selectors:**
- By class: `.slider-btn-next` (note: matches 1 element — unique)
- By enabled state: `.slider-btn-next:not([disabled])` (note: matches 1 element only when enabled)

**Best selector for automation:** `.slider-btn-next`
**Why:** Custom class, matches exactly 1 element. Pair with `:not([disabled])` for assertions that the button is clickable.

**Notes / observations:**
Compared to Element 13 (left/prev), this button does NOT have the `disabled` attribute and does NOT have the `v-btn--disabled` class — that is the observable difference between the two states. This is the correct pattern: the enabled and disabled states are clearly distinguishable in the HTML. No `id` or `data-testid`.

---

## Element 15: Pomoc (Help) button

**Page:** Dashboard and Lessons page (https://eduboom-pl-test.bgosoftware.net/dashboard)
**Tag:** `<button>`

**HTML snapshot:**
```
<button data-v-17cd0e8f="" data-v-99369476="" type="button" class="v-btn v-btn--elevated v-theme--appLightTheme bg-vblue v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-elevated border-btn-vblue common-button w-100" data-title="help-btn">
```

**Available attributes:**
- id: none
- class: v-btn v-btn--elevated v-theme--appLightTheme bg-vblue v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-elevated border-btn-vblue common-button w-100
- type: button
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: `data-title="help-btn"`, `data-v-17cd0e8f`, `data-v-99369476`

**CSS selectors:**
- By tag: `button` (note: matches many — not unique)
- By class: `.common-button` (note: may match other buttons — verify count)
- By attribute: `[data-title="help-btn"]` (note: matches 1 element — unique)
- Combination: `button[data-title="help-btn"]` (note: matches 1 element)

**Best selector for automation:** `[data-title="help-btn"]`
**Why:** The `data-title` attribute is purpose-specific and matches exactly 1 element. It won't be affected by styling changes.

**Notes / observations:**
This button appears on both the Dashboard and Lessons pages. The `data-title` attribute is used consistently across the site as a custom identifier (similar to `data-testid`). While it's not a dedicated test attribute, it functions as one for this site.

---

## Summary observations

The Eduboom site is built with Vue.js and the Vuetify UI framework. The most significant finding is the near-complete absence of semantic HTML — only `<main>` exists as a landmark element; there is no `<header>`, `<footer>`, or `<nav>`. This is both an accessibility problem and a test automation challenge, because we cannot scope selectors to meaningful page regions.

The second major issue is the lack of `id` and `data-testid` attributes across most elements. Many elements rely only on Vuetify framework classes (`v-btn--elevated`, `v-btn--density-default`, etc.) which are visual descriptors generated by the framework and should never be used as test selectors. The most reliable hooks available are the custom `data-title` attributes that developers added to some elements, and purpose-specific custom classes like `cookie-action-btn-ok` and `slider-btn-prev`.

The empty `alt` attribute on the logo image on the Dashboard is a clear accessibility bug. Several images have either empty or technically-valid-but-meaningless `alt` values (`"imageChemia"`, `"user"`), which would make screen reader experiences poor.

For future test automation work, I would recommend asking developers to add `data-testid` attributes to all interactive elements (buttons, links, form fields), add semantic `<header>`, `<nav>`, and `<footer>` elements, and fix the missing `alt` text on the logo image.
