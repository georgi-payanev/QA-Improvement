Exercise 1:

- Does the page have a `<header>` tag? Does it have a `<footer>` tag? - No it does not have <header> and <footer>
- What semantic tags ARE present? (`<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`?) - <nav>, <main>, <section>
- What tag wraps the top bar with the logo and the user avatar? - <div>
- Does the `<nav>` element have an `id` or `data-testid` attribute? - No it does not have such attributes

Exercise 2:

- The full class attribute of the **Lekcje** button
  v-list-item v-list-item--link v-theme--appLightTheme v-list-item--density-default v-list-item--one-line rounded-pill v-list-item--variant-text position-relative p-0 mb-2 app-menu-row

Pulpit:
v-list-item v-list-item--active v-list-item--link v-theme--appLightTheme v-list-item--density-default v-list-item--one-line rounded-pill v-list-item--variant-text position-relative p-0 mb-2 app-menu-row app-menu-row--active

- The extra class that the currently active menu item has
  v-list-item--active
  app-menu-row--active
  Липсват понеже Pulpit е избран по default и има active class

- Why do you think there is no `id` or `data-testid` on these buttons? (think about this — it will be discussed)
  имат href

Exercise 3:

- The HTML tag used for the lesson card (the one that surprised you in Step 2)
  background-image: url(&quot;/storage/videos/processed/cd634bb8-20e3-498b-b51d-ced19c38af84/thumbnails/thumb_00004.jpg&quot;)
- The custom class name of the left arrow button (the one with `prev`)
  slider-btn-prev
- The custom class name of the right arrow button (the one with `next`)
  slider-btn-next
- What attribute or class marks the left arrow button as disabled?
  v-btn--disabled
- Your observation: if you had to write a CSS selector to target only the disabled arrow button, what would you use?
  v-btn--disabled - If I want to select it only if it is disabled.
  slider-btn-prev - If I want to select the left button in general.

Exercise 4:

- The `alt` value of the Eduboom logo image
  alt="Eduboom Home"
- The `alt` value of the Chemia subject image
  alt="imageChemia"
- Your observation: would a screen reader understand these images correctly?
  Yes, perhaps Chemia instead of imageChemia would look better for users.

Exercise 5:

- Which selectors from the steps above were unique (matched exactly 1 element)?
  .cookie-action-btn-ok; cookie-action-btn-deny;
- Which selector matched the most elements?
  button
- What is the difference between `.logo-link img` and `img`? What does the first one limit?
  img searches for all img tags.
  .logo-link img - it first looks for the .logo-link class, then the descendant selector looks for img.

Homework:

## Element 1: Eduboom logo

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** <img>

**HTML snapshot** (copy the opening tag from DevTools):
<img data-v-cd30edbd="" src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%20159%2024'%3e%3cg%20clip-path='url(%23a)'%3e%3cpath%20fill='%23F7B801'%20d='M18.693%2016.592H6.103a3.998%203.998%200%200%200%204.25%202.778%205.549%205.549%200%200%200%203.994-1.5l3.196%203.318A9.374%209.374%200%200%201%2010.16%2024C3.994%2024%200%2020.196%200%2015.02c0-5.21%204.056-8.916%209.522-8.916%205.113%200%209.267%203.26%209.267%208.98%200%20.447-.064%201.022-.096%201.503m-12.686-3.19h7.094a3.422%203.422%200%200%200-3.547-2.979%203.441%203.441%200%200%200-3.547%202.978ZM40.007%200v23.711h-5.784v-1.72a6.222%206.222%200%200%201-5.08%202.014c-4.73%200-8.533-3.452-8.533-8.98%200-5.497%203.803-8.916%208.532-8.916a6.315%206.315%200%200%201%204.793%201.79V0h6.072ZM34.03%2015.02c0-2.62-1.564-4.09-3.61-4.09-2.078%200-3.643%201.474-3.643%204.09%200%202.652%201.565%204.154%203.642%204.154%202.047%200%203.611-1.502%203.611-4.154Zm28.089-8.63v17.321h-5.784v-1.853a6.823%206.823%200%200%201-5.145%202.14c-4.25%200-7.349-2.428-7.349-7.924V6.391h6.071v8.691c0%202.685%201.055%203.739%202.876%203.739%201.79%200%203.26-1.183%203.26-4.09V6.39h6.07Z'/%3e%3cpath%20fill='%232EC4B6'%20d='M80.604%207.542a7.832%207.832%200%200%201%203.084%203.073%209.144%209.144%200%200%201%201.113%204.564%209.23%209.23%200%200%201-1.118%204.586%207.802%207.802%200%200%201-3.084%203.083%209.049%209.049%200%200%201-4.457%201.087%208.264%208.264%200%200%201-3.212-.607%206.166%206.166%200%200%201-2.44-1.82v2.204h-3.802V0h3.995v8.726a6.695%206.695%200%200%201%202.412-1.694%207.906%207.906%200%200%201%203.052-.575%209.061%209.061%200%200%201%204.457%201.085Zm-1.278%2011.505a5.326%205.326%200%200%200%201.42-3.868%205.327%205.327%200%200%200-1.42-3.872A4.83%204.83%200%200%200%2075.7%209.832a5.132%205.132%200%200%200-2.588.655%204.732%204.732%200%200%200-1.821%201.868%205.728%205.728%200%200%200-.671%202.813c-.021.98.21%201.948.67%202.812a4.73%204.73%200%200%200%201.822%201.87%205.13%205.13%200%200%200%202.588.655%204.823%204.823%200%200%200%203.627-1.475m12.284%203.787a8.153%208.153%200%200%201-3.246-3.116%208.793%208.793%200%200%201-1.166-4.523%208.714%208.714%200%200%201%201.166-4.505%208.177%208.177%200%200%201%203.244-3.099%2010.357%2010.357%200%200%201%209.362%200%208.2%208.2%200%200%201%203.249%203.099%208.713%208.713%200%200%201%201.166%204.505%208.797%208.797%200%200%201-1.166%204.523%208.17%208.17%200%200%201-3.244%203.116%2010.356%2010.356%200%200%201-9.362%200m8.304-3.767a5.297%205.297%200%200%200%201.438-3.867%205.288%205.288%200%200%200-1.438-3.876%204.883%204.883%200%200%200-3.643-1.475%204.83%204.83%200%200%200-3.627%201.475%205.322%205.322%200%200%200-1.421%203.866%205.321%205.321%200%200%200%201.423%203.877%204.822%204.822%200%200%200%203.626%201.474%204.876%204.876%200%200%200%203.642-1.474Zm12.302%203.767a8.159%208.159%200%200%201-3.243-3.116%208.797%208.797%200%200%201-1.166-4.523%208.713%208.713%200%200%201%201.166-4.505%208.18%208.18%200%200%201%203.243-3.099%2010.359%2010.359%200%200%201%209.363%200%208.173%208.173%200%200%201%203.243%203.099%208.715%208.715%200%200%201%201.168%204.505%208.789%208.789%200%200%201-1.168%204.523%208.146%208.146%200%200%201-3.243%203.116%2010.358%2010.358%200%200%201-9.363%200Zm8.309-3.767a5.297%205.297%200%200%200%201.438-3.867%205.306%205.306%200%200%200-1.438-3.876%204.887%204.887%200%200%200-3.643-1.475%204.832%204.832%200%200%200-3.627%201.475%205.33%205.33%200%200%200-1.419%203.873%205.329%205.329%200%200%200%201.419%203.87%204.822%204.822%200%200%200%203.627%201.474%204.875%204.875%200%200%200%203.643-1.474Zm35.949-10.725a7.565%207.565%200%200%201%201.885%205.607v9.78h-3.994v-9.267a5.001%205.001%200%200%200-.99-3.373%203.58%203.58%200%200%200-2.844-1.134%204.18%204.18%200%200%200-3.229%201.327%205.41%205.41%200%200%200-1.213%203.787v8.66h-3.994v-9.267a5.002%205.002%200%200%200-.992-3.373%203.569%203.569%200%200%200-2.843-1.134%204.177%204.177%200%200%200-3.243%201.311%205.442%205.442%200%200%200-1.198%203.803v8.66h-3.995V6.647h3.802v2.171a6.214%206.214%200%200%201%202.397-1.756%208.146%208.146%200%200%201%203.196-.607%207.72%207.72%200%200%201%203.403.72%205.518%205.518%200%200%201%202.349%202.124%207.107%207.107%200%200%201%202.716-2.09%208.824%208.824%200%200%201%203.674-.75%206.941%206.941%200%200%201%205.113%201.87'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h158.363v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" class="logo-img" alt="Eduboom Home">

**Available attributes:**

- id: none
- class: [logo-img]
- type: none
- href: none
- src: [data:image/svg+xml]
- alt: [Eduboom Home]
- data-testid: none
- other relevant attributes: none

**CSS selectors:**

- By tag: `img` (note: matches [22] elements — not unique)
- By class: `logo-img` (note: matches [1] elements)
- By specific class combination: `.[class1].[class2]` (note: matches [X] elements)
- Descendant: `[parent] [child]` (note: matches [X] elements)
- Attribute: `[attr="value"]` (note: matches [X] elements)

**Best selector for automation:** `logo-img`
**Why:** single match, as well as a self explanatory selector

**Notes / observations:**
[Any missing attributes, bad practices, or things that surprised you]

## Element 2: The `<a>` link wrapping the logo

**Page:** Dashboard
**Tag:** <a>

**HTML snapshot** <a data-v-cd30edbd="" data-v-d86c52fc="" aria-current="page" href="/dashboard" class="router-link-active router-link-exact-active logo-link"></a>

**Available attributes:**

- id: none
- class: "router-link-active router-link-exact-active logo-link"
- type: none
- href: "/dashboard"
- src: data:image/svg+xml
- alt: "Eduboom Home"
- data-testid: none
- other relevant attributes: none

**CSS selectors:**

- By tag: `a` (note: matches [526] elements — not unique)
- By class: `router-link-active router-link-exact-active logo-link` (note: matches [1] elements, but too long for automation)
- By specific class combination: `logo-link` (note: matches [1] elements)
- Descendant: `[parent] [child]` (note: matches [X] elements)
- Attribute: `[attr="value"]` (note: matches [X] elements)

**Best selector for automation:** `logo-link`
**Why:** [only one match and self explanatory]

**Notes / observations:**
[Any missing attributes, bad practices, or things that surprised you]

## Element 3: Lekcje navigation button

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard — open side menu first
**Tag:** `<div>`

**HTML snapshot:**

```
<div class="d-flex align-items-center app-menu-item-mobile justify-start"><img loading="eager" src="data:image/svg+xml,..." class="ml-5 mr-2 btn-icon" alt=""> Lekcje</div>
```

**Available attributes:**

- id: none
- class: `d-flex align-items-center app-menu-item-mobile justify-start`
- type: not applicable
- href: none — this is a `<div>`, not an `<a>`. Navigation is handled by a Vue click event handler (router.push), not a real link.
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: none

**CSS selectors:**

- By tag: `div` (note: matches hundreds of elements — not unique)
- By class: `.app-menu-item-mobile` (note: matches ALL nav items — Pulpit, Lekcje, Profil all share this class — not unique)
- By text content (CSS): not possible with pure CSS

**Best selector for automation:** `.app-menu-item-mobile` with `{ hasText: 'Lekcje' }` in Playwright
**Why:** `.app-menu-item-mobile` alone matches all nav items. Adding `hasText` filters to exactly the one containing "Lekcje". This is more precise than `getByText('Lekcje')` alone, which could match other elements on the page (headings, banners) that also contain the word.

**Notes / observations:**
Не съм сигурен горната опция дали би проработила, понеже няма как това търсене да се пусне в Dev Tools. Аз бих използвал app-menu-item-mobile за да маркирам трите бутона за навигация и да намеря Lekcje. Това е и отговора ми от Клод:

okay but how do I narrow down the 3 nav items to only Lekcje in dev tools?

● You can't — that's the limitation. DevTools Elements search can only match by tag, attribute, or text, but not by
"element with this class that also contains this text" combined.

Your only options are:

1. Arrow through the 3 results until you visually spot the Lekcje one
2. Ask the developers to add data-testid="nav-lessons" to the element

This is worth adding to your notes as a real finding.

---

## Element 4: Pulpit navigation button (active state)

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard — open side menu first
**Tag:** `<div>`

**HTML snapshot:**

```
<div class="d-flex align-items-center app-menu-item-mobile justify-start"><img loading="eager" src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4255_16733)'%3e%3cpath%20d='M7%201H3C1.9%201%201%201.9%201%203V9C1%2010.1%201.9%2011%203%2011H7C8.1%2011%209%2010.1%209%209V3C9%201.9%208.1%201%207%201Z'%20fill='%2300A79D'/%3e%3cpath%20d='M21%201H13C11.9%201%2011%201.9%2011%203V9C11%2010.1%2011.9%2011%2013%2011H21C22.1%2011%2023%2010.1%2023%209V3C23%201.9%2022.1%201%2021%201Z'%20fill='%2300A79D'/%3e%3cpath%20d='M23%2015V21C23%2022.1%2022.1%2023%2021%2023H3C1.9%2023%201%2022.1%201%2021V15C1%2013.9%201.9%2013%203%2013H21C22.1%2013%2023%2013.9%2023%2015Z'%20fill='%2300A79D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4255_16733'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" class="ml-5 mr-2 btn-icon" alt=""> Pulpit</div>
```

**Available attributes:**

- id: none
- class: `d-flex align-items-center app-menu-item-mobile justify-start` (verify — may have an additional active state class)
- type: not applicable
- href: none — same pattern as Lekcje, navigation via Vue click handler
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: check for any `aria-current` or active class difference compared to Lekcje

**CSS selectors:**

- By tag: `div` (not unique)
- By class: `.app-menu-item-mobile` (note: matches ALL nav items — not unique)
- Playwright: `page.locator('.app-menu-item-mobile', { hasText: 'Pulpit' })` (note: scopes to nav items, then filters by text — unique)
- Active state: v-list-item--active

**Best selector for automation:** `.v-list-item--active (by default the Pulpit button is selected when the user is on dashboard, so this is a good way to select it)

**Notes / observations:**

---

# Element 5: OK cookie consent button

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** `<button>`

**HTML snapshot:**

```
<button type="button" class="v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat cookie-action-btn-ok" small="" data-title="accept-cookies"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator="">OK</span><!----><!----></button>
```

**Available attributes:**

- id: none
- class: `v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat cookie-action-btn-ok`
- type: `button`
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: none

**CSS selectors:**

- By tag: `button` (note: matches 11 elements — not unique)
- By class: `.cookie-action-btn-ok` (note: matches 1 element — unique)
- By class combination: `.v-btn.cookie-action-btn-ok` (note: matches 1 element)
- By attribute: `[type="button"]` (note: matches many elements — not unique)

**Best selector for automation:** `.cookie-action-btn-ok`
**Why:** Custom class that clearly describes the element's purpose and matches exactly 1 element. The Vuetify `v-btn` classes describe visual styling and should never be used as selectors.

**Notes / observations:**

## Element 6: Odmowa cookie consent button

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** `<button>`

**HTML snapshot:**

```
<button type="button" class="v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat cookie-action-btn-deny">
```

**Available attributes:**

- id: none
- class: `v-btn v-theme--appLightTheme v-btn--density-default v-btn--size-default v-btn--variant-flat cookie-action-btn-deny`
- type: `button`
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: none

**CSS selectors:**

- By tag: `button` (note: matches 11+ elements — not unique)
- By class: `.cookie-action-btn-deny` (note: matches 1 element — unique)
- By class combination: `.v-btn.cookie-action-btn-deny` (note: matches 1 element)

**Best selector for automation:** `.cookie-action-btn-deny`
**Why:** Custom, descriptive class that matches exactly 1 element — same reasoning as the OK button.

**Notes / observations:**

## Element 7: The `<nav>` element

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** `<nav>`

**HTML snapshot:**

```
<nav class="v-navigation-drawer v-navigation-drawer--left v-navigation-drawer--temporary v-navigation-drawer--active v-theme--appLightTheme v-navigation-drawer--mobile side-menu">
```

**Available attributes:**

- id: no
- class="v-navigation-drawer v-navigation-drawer--left v-navigation-drawer--temporary v-navigation-drawer--active v-theme--appLightTheme v-navigation-drawer--mobile side-menu"
- type: not applicable
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: possibly `aria-label` (verify)

**CSS selectors:**

- By tag: `nav` (note: check count — may be 1 or more depending on AppBar + footer structure)
- First instance: `nav:first-of-type` (if multiple exist)

**Best selector for automation:** .app-top-bar nav
**Why:** `<nav>` first looks at the app-top-bar which is a unique class then looks at the nav tag which is only 1

**Notes / observations:**

## Element 8: The `<main>` element

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** `<main>`

**HTML snapshot:**

```
<main class="v-main">
```

**Available attributes:**

- id: none
- class="v-main"
- type: not applicable
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: none expected

**CSS selectors:**

- By tag: `main` (note: should match exactly 1 element by HTML spec — verify)

**Best selector for automation:** `main`
**Why:** There should be exactly one `<main>` element per page. If the site follows HTML standards, the tag alone is a unique, stable, semantic selector.

**Notes / observations:**
In Playwright, `page.locator('main')` is used to scope searches to the page content area — for example: `page.locator('main').getByRole('button', { name: 'Lekcje' })`. This avoids accidentally matching elements in headers or footers. It is one of the most useful structural elements in test writing.

## Element 9: Chemia subject image

**Page:** https://eduboom-pl-test.bgosoftware.net/lessons
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
- src="/storage/24e9ac19-a153-4fc6-bb84-6a23c61d5d5a.svg"
- alt: imageChemia
- data-testid: none
- other relevant attributes: possibly `loading="lazy"`

**CSS selectors:**

- By tag: `img` (note: many matches — not unique)
- By alt: `[alt="imageChemia"]` (note: matches 1 element IF alt is correctly set — verify this)
- By class: `.v-img__img` (note: matches ALL Vuetify images — not unique)
- Descendant: [verify parent card class in DevTools]

**Best selector for automation:** `[alt="Chemia"]` (if alt is correctly set)
**Why:** A descriptive alt attribute targets the image by its content — exactly how a screen reader identifies it. If alt is missing or generic, this is itself a finding worth reporting.

**Notes / observations:**
Check what alt text is actually used. If `alt=""` or `alt="subject"`, that is an accessibility defect AND an automation problem. Subjects are displayed in a Swiper carousel on the lessons page, so the element may only be visible after interacting with the carousel.

## Element 10: Hamburger / burger menu button

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** `<button>`

**HTML snapshot:**

<div data-v-c56f642e="" data-v-d86c52fc="" class="burger-wrap"><div data-v-c56f642e="" class="top-line ptop1"></div><div data-v-c56f642e="" class="center-line"></div><div data-v-c56f642e="" class="top-line"></div></div>
```
```

**Available attributes:**

- id: none
- class: burger-wrap
- type: `button`
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none
- other relevant attributes: check for `aria-label` (e.g. `aria-label="Menu"`) and `aria-expanded`

**CSS selectors:**

- By tag: `button` (not unique)
- By class: `burger-wrap` \
- By aria-label: `[aria-label="Menu"]` (note: only works if the attribute exists — verify)

**Best selector for automation:** burger-wrap
**Why:** Vuetify app bar nav icons often have no custom class. If `aria-label="Menu"` exists, Playwright's `getByRole('button', { name: 'Menu' })` is the idiomatic approach.

**Notes / observations:**
This is intentionally a harder element. The hamburger is critical for test flows — you must click it before Lekcje or Pulpit are interactable. If it has no `data-testid` and no unique custom class, this is a real testability gap. Recommendation: add `data-testid="hamburger-menu-btn"` to make it reliably selectable in tests.

## Free-Choice Elements

---

## Element 1: REgistration button

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** <button>

**HTML snapshot**
<button data-v-17cd0e8f="" data-v-eae57e48="" type="button" class=" v-btn-v-btn-elevated v-theme--appLightTheme bg-vorange v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-elevated border-btn-vorange common-button" data-title="go-to-signup"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><!----><span data-v-17cd0e8f="">Uzupełnij profil</span></span><!----><!----></button>

**Available attributes:**

- id: none
- class: v-btn v-btn--elevated v-theme--appLightTheme bg-vorange v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-elevated border-btn-vorange common-button
- type: button
- href: none
- src: none
- alt: none
- data-title: go-to-signup
- other relevant attributes: [list any others you see]

**CSS selectors:**

- By tag: `button` (note: matches [38] elements — not unique)
- By class: `v-btn` (note: matches [28] elements)
- By title: `go-to-signup` (note: matches [1] elements)

**Best selector for automation:** By title: `go-to-signup`
**Why:** self explanbatory and single match

**Notes / observations:**
[Any missing attributes, bad practices, or things that surprised you]

## Element 2: Email field

**Page:** https://eduboom-pl-test.bgosoftware.net/auth/signup
**Tag:** <input>

**HTML snapshot** <input placeholder="E-mail" size="1" type="email" aria-labelledby="input-v-0-24-label" id="input-v-0-24" aria-describedby="" aria-required="true" aria-invalid="false" append-inner-icon-color="vcyan" class="v-field__input" value="">

**Available attributes:**

- id: none
- class: v-field\_\_input
- type: email
- href: none
- src: none
- alt: none
- data-testid: none
- other relevant attributes: [list any others you see]

**CSS selectors:**

- By tag: `input` (note: matches [13] elements — not unique)
- By class: `v-field__input` (note: matches [1] elements)
- By specific class combination: `.[class1].[class2]` (note: matches [X] elements)
- Descendant: `[parent] [child]` (note: matches [X] elements)
- Attribute: `[attr="value"]` (note: matches [X] elements)

**Best selector for automation:** `v-field__input`
**Why:** [one sentence explaining why this selector is reliable or not]

**Notes / observations:**
[Any missing attributes, bad practices, or things that surprised you]

## Element 3: Google Registration button

**Page:** https://eduboom-pl-test.bgosoftware.net/auth/signup
**Tag:** <button>

**HTML snapshot** <button data-v-17cd0e8f="" data-v-4ae57cd2="" type="button" class="v-btn v-btn--elevated v-theme--appLightTheme bg-border-color v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-elevated border-btn-border-color common-button w-100 social-media-btn" data-title="google-btn"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator=""><img data-v-17cd0e8f="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVYSURBVHgB7ZpNbBtFFIDf23USJ01aC1pIEFU2ICSkIjDEiSpRqZu0SIhLXQIS6YHYIA7QA71xCCXOoUKcmhw5OTlAWqlRzQ1UEi/i0IqkjbkAFYduQYqhKcQhv4135zFrO45/1vZ67SSu1E+y4h3PzL43837mJwCP2FsQqsAd2e1ygsONAnoRqR0B3QDk4t27MqqpvExlhD8jMmVN15UOJRKDCqlIgajskUURhvhXd46wFiFFJzbeNn1rDGxiS4FtwVGGKkAEKgN92I4iZSkQld2SKDqC1RI8Hz4juuZvUyKq1RaWFbh3onsAgI3YM5WyiBEw/5NTN0NWKgtWKi2c7ObmQmO7ILyBC0G4Ot/rOWelsqNUBUN4IgrAroIq1ouWZqCoCe2V8Hqd0NP27Q3VUu1CP0R7X/GJKAbBJgR0FwnV1KOLv+ml0q3KEz7RwqwwFW3myrF53lFMJxgXBQqtaM2RDkXJS1ILJz0yT2Q+nuiOcxUlqFD41HvzWTjhuUqAXrAIIxhdZ/sCZkKbEX39qCTGdcNJP06JYUv4RMu8zssyHe5syPyHvp9VwAbGjBAJF7nwp+0In5Agt2Dty8furH13WGJL9aWa2h61apKlwPo1h+xADBvCr1zpAP1eY6FmNSG8QVYiE7mDJQoPbML+92+D89hf5q2IhmtBeIP0DFAYXJpet5hbYWPmEGz82Ar0QNwqGntiasYPNUJ6BjY0h9usgrNrITEbxqwYbAowCjVEWgERC4fNhEm9dxvqX/wn8vS1mQjUEOm1ELelopkSnTo43/hzHC5CWfReWCGoIlzOyNRg88tbz5lOXDLrikB7Pvp8NKTM50wFJCiBw6HVgvm45MBierDLmgHsgYo34dXBaarAQ0mmAiVH18gVUGOkFeDOsVSqslYgV+w2SqBR3fq+rQBhSQdlADLsPVmWsp0HkNRirZbJAV+suPlG5DqUBaNhq1UJSUIUBorVwcQJX9ZzkjhfiXItwmaNftf2wyfL3RDVm4y39Mz2X1FgB5Av/OcTQCi6F+F79G/Cn7akVw1pE0rF+DxHvrz+DJxdejUpvAHSEOwQIhUf/cTrGWadVqQVSMX4LD8YWT3CPy9w86nLLJY7v+6zvN20ivz5okRY2scYE5XM5+w8QEl7jbJGeDd2nI/+s6adoABB94RXgiqCVBe2UEvNjEAGWQrUvaYpc/HHlYFFmdv9gWI9uUQUwtVSgi/4gkillzKg5weEvEz8UezYcI7JmMKPRiRDia6v3radG4w1jSE8/+qzUj/XfJJymOC51GdMpwxWQQpojI1H+kOq1SaeCa8sPngu2Pj3WUnQDlpoQaPTgy1556WmChydeEfShPgcT8+Wlw78JE7lfxTkFxaz/SHFvF+vtImCVwA8BakBEuIHwbnwATjWny/SO6osLvTk2n9BBQy6Jt70EaLto0VIRrStsOziEUbCIgPS8O9paFgsENx08E9/1jxm9pMIBZif/DXyVN8Rbuq2lw+tkNxjGJ9WPlLOYpX1xt+AOe6DuNnOY31TupwBDYfPt4wUaicW63R+8helQiXKgjX8Adq+W+BY7UwqgRgKDzZ/WKxNyf0AXzYE+PLB8nqmUljdfVg9fB7iLddDbLOp5PGN5Ssmz6W3ziWWEbTzewJiMHrzzKSlG5qyLvkS0QnjhmPLsBMgxATusD+dmbR0O5NsYgMjQnH7HCILBwEWpYgBw9HmDW1E8YfK2ndXdNHdebnPy0Ojj389BXYg+oG7oWJH8C2q8q8GctDrWm4SZUFnMs8dbh7zXYjYnukv/DL7LvehmEAU0QGVemDKjTIy9yNqlf8BvHb6xD8DHYQAAAAASUVORK5CYII=" alt="" class="icon-image mr-2" loading="eager"><span data-v-17cd0e8f="">Google</span></span><!----><!----></button>

**Available attributes:**

- id: none
- class: v-btn v-btn--elevated v-theme--appLightTheme bg-border-color v-btn--density-default rounded-pill v-btn--size-default v-btn--variant-elevated border-btn-border-color common-button w-100 social-media-btn
- type: button
- href: none
- src: data:image/png
- alt: none
- data-testid: [value or "none"]
- data-title="google-btn"

**CSS selectors:**

- By tag: `button` (note: matches [X] elements — not unique)
- By class: `.[class-name]` (note: matches [X] elements)
- data-title="google-btn"

**Best selector for automation:** `google-btn`
**Why:** [one sentence explaining why this selector is reliable or not]

**Notes / observations:**
[Any missing attributes, bad practices, or things that surprised you]

## Element 4: User avatar image (top bar)

**Page:** https://eduboom-pl-test.bgosoftware.net/dashboard
**Tag:** `<a>`

**HTML snapshot:**

```
<a href="/auth/signup" class="v-card v-card--link v-theme--appLightTheme text-surface v-card--density-default rounded-xl v-card--variant-tonal user-card text-center p-0 ml-2" data-title="user-profile-link"><!----><div class="v-card__loader"><div class="v-progress-linear v-theme--appLightTheme v-locale--is-ltr" role="progressbar" aria-hidden="true" aria-valuemin="0" aria-valuemax="100" style="top: 0px; height: 0px; --v-progress-linear-height: 2px;"><!----><div class="v-progress-linear__background"></div><div class="v-progress-linear__buffer" style="width: 0%;"></div><div class="v-progress-linear__indeterminate"><div class="v-progress-linear__indeterminate long"></div><div class="v-progress-linear__indeterminate short"></div></div><!----></div></div><!----><!----><div class="v-progress-circular v-progress-circular--visible v-theme--appLightTheme text-vcyan position-relative user-progress-circular m-2 overflow-visible" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="40" style="width: 44px; height: 44px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" style="transform: rotate(calc(-90deg));"><circle class="v-progress-circular__underlay" fill="transparent" cx="50%" cy="50%" r="20" stroke-width="4" stroke-dasharray="125.66370614359172" stroke-dashoffset="0"></circle><circle class="v-progress-circular__overlay" fill="transparent" cx="50%" cy="50%" r="20" stroke-width="4" stroke-dasharray="125.66370614359172" stroke-dashoffset="75.39822368615503px"></circle></svg><div class="v-progress-circular__content"><div class="progress-chip d-flex justify-center align-items-center p-0 m-0"><span class="chip-content">0</span></div><img src="/assets/default_user_img-DNoukM7s.svg" class="user-card-image" alt="user"></div></div><!----><span class="v-card__overlay"></span><span class="v-card__underlay"></span></a>
```

**Available attributes:**

- id: none
- class: `v-card`
- type: not applicable
- href: not applicable
- src: `/assets/default_user_img-DNoukM7s.svg`
- alt: `user`
- data-testid: none
- other relevant attributes: none

**CSS selectors:**

- By tag: `a` (not unique — 12+ matches)
- By class: `.user-card-image` (note: matches 2 elements — appears in top bar AND side menu)
- By alt: `[alt="user"]` (note: matches 2 elements — same problem)
- data-title="user-profile-link"

**Best selector for automation:** data-title="user-profile-link"
**Why:** The element appears once

**Notes / observations:**
Two problems worth reporting: (1) `alt="user"` is not descriptive — a screen reader would only say "user" with no context; a better value would be "Profile photo of [username]". (2) `.user-card-image` is not unique — this would cause a test that tries to click or assert on this image to potentially fail or target the wrong instance. This is a real testability defect.

## Element 5: Search input field

**Page:** https://eduboom-pl-test.bgosoftware.net/lessons
**Tag:** `<span>`

**HTML snapshot:**

```
<span data-v-8cca593a="" class="search-btn-text">Wyszukaj lekcję</span>
```

**Available attributes:**

- id: none
- class: search-btn-text
- type: `span`
- href: not applicable
- src: not applicable
- alt: not applicable
- data-testid: none (verify)

**CSS selectors:**

- By class: `search-btn-text`
- By placeholder: `[placeholder="Wyszukaj lekcję"]` (note: verify this matches exactly)

**Best selector for automation:** `getByPlaceholder('Wyszukaj lekcję')` in Playwright
In Dev tools with class: search-btn-text
**Why:** The placeholder text describes the input's purpose. In Playwright, `getByPlaceholder()` is the idiomatic way to find inputs — more readable than a CSS class selector.

**Notes / observations:**
This search input filters lessons in real time as you type. Testing it requires both typing into it and asserting that the results list updates. The Polish placeholder means tests are tied to the Polish locale. This is a good example of where a `data-testid="lesson-search-input"` would make the selector locale-independent and more robust.
