## Practical Exercises

### Exercise 1 — Read the Breadcrumb (15 min)

**Goal:** Understand how deep elements are nested by reading their ancestor path.

**Step 1.** Use the element picker (`Ctrl + Shift + C`) and click on the subject title **"Matematyka"** on the Dashboard page.

**Step 2.** Look at the breadcrumb bar at the bottom of the Elements panel. You will see a long chain of ancestors from `html` all the way down to the element you clicked.

**Step 3.** Count how many elements appear in the breadcrumb between `<main>` and the element you clicked. Write this number down — this is the nesting depth of the title inside the page's main content.

**Step 4.** Now use the element picker to click on the **Eduboom logo image** (top-left of the page).

**Step 5.** Look at its breadcrumb. Count the depth from `<main>` to the logo image.

**Step 6.** Compare the two depths. The logo is NOT inside `<main>` — it sits outside it. Look at where it branches off from the `Matematyka` title's path.

**Write down:**

- How many levels deep is "Matematyka" from `<main>`?
  7 elements between main and the element
- Is the logo image inside `<main>`? What is its closest ancestor that contains `<main>` as a sibling?
  the logo is not inside <main>, it is inside <body> which contains <main>
- What is the tag and class of the direct parent of the "Matematyka" text?
    <div data-v-eae57e48="" class="subject-data"></div>

---

### Exercise 2 — Navigate Up the Tree (10 min)

**Goal:** Practice moving from a child element up through its ancestors.

**Step 1.** Use the element picker and click on the text **"5 Szkoła Podstawowa"** (the grade badge above "Matematyka").

**Step 2.** Look at the breadcrumb. Click on the element **two levels above** the current one in the breadcrumb. The Elements panel will jump to that ancestor and highlight it. At the same time, an outline may briefly appear on the page showing you which area that ancestor covers.

**Step 3.** Keep clicking one level up in the breadcrumb. At each step, look at the page to see what area is now highlighted.

**Step 4.** Stop when you reach the element that covers the **entire Matematyka row** (header + tabs + lesson cards). Note its tag and class.

**Step 5.** Do the same for the **"Chemia"** subject row. Is the element type and class the same as for Matematyka?

**Write down:**

- The tag and class of the element that wraps the entire Matematyka row
    <div data-v-eae57e48="" class="v-container v-locale--is-ltr p-0 pb-0 px-3"></div>
- The tag and class of the element that wraps the entire Chemia row
    <div data-v-eae57e48="" class="v-container v-locale--is-ltr p-0 pb-0 px-3"></div>
- Are they the same? What does this tell you about how the page is built?
  They are the same just in different divs for each subject

---

### Exercise 3 — Find Siblings (10 min)

**Goal:** Identify elements that sit at the same level under the same parent.

**Step 1.** Use the element picker and click on the **first lesson card** in the Matematyka row (the card showing "4.1 Rachunki pamięciowe"). Note its tag.

**Step 2.** In the breadcrumb, click one level up to select its **parent** element.

**Step 3.** With the parent selected, press `→` (right arrow) on your keyboard to expand it. You will see all of its direct children listed in the tree.

**Step 4.** Count how many direct children (lesson cards) the parent has. These children are all **siblings** of each other — same parent, same level.

**Step 5.** Press `↓` (down arrow) a few times to move through the siblings one by one. Notice that each one is the same tag with the same class structure — only the content inside is different.

**Step 6.** Now go to the **Lessons page** (`https://eduboom-pl-test.bgosoftware.net/lessons`). Use the element picker to click on one of the **grade filter pills** (a numbered circle, like "3 Przedszkole").

**Step 7.** Go one level up in the breadcrumb to the parent. Expand it. Count how many sibling grade filter pills share this parent.

**Write down:**

- The tag and class of the lesson card element (from Step 1)
    <div class= "swiper-wrapper">
- How many lesson cards (siblings) are inside the Matematyka cards container?
  6
- The class of the grade filter pill element (from Step 6)
<div class="swiper-wrapper" style="transform: translate3d(-1353.05px, 0px, 0px); transition-duration: 0ms; transition-delay: 0ms;">
- How many grade filter pills are siblings under the same parent?
  20+

---

### Exercise 4 — Spot the Repeated Pattern (10 min)

**Goal:** Recognize that visually similar elements are identical copies in the DOM.

**Step 1.** On the Dashboard, use the element picker to click on the **first lesson card** in Matematyka. Look at its opening tag in the Elements panel — note the tag name and class names.

**Step 2.** Now use the element picker to click on the **second lesson card** in the same row.

**Step 3.** Compare the two opening tags. Are the tag name and class names the same?

**Step 4.** Check if either card has a unique `id` attribute. Check if either has a `data-testid` attribute.

**Step 5.** Now look inside each card by expanding it in the tree (`→` arrow). Each card contains a number and a title. These are the only differences between cards.

**Step 6.** Think about this question: if all cards have the same tag and same classes, how would a test know which card is card number 3? Write your answer.

**Write down:**

- Are the opening tags of card 1 and card 2 identical? (yes / no)
  no
- Does any lesson card have a unique `id` or `data-testid`? (yes / no)
  no
- Your answer to Step 6 — how would you target the third card specifically?
  it has a unique data-lesson-id: 01994f41-5bf3-71b9-a115-4cc8c29efe85
  Or through the title of the lesson name which contains "3"

---

## My own findings

**Parent-child: Dashboard Uzupelnij profil button**

- Parent: `<div>` the banner on the dashboard
- Child: three elements`<button>` element — "Uzupelnij profil"; <div> element containing the title; <img> element
- Page: Dashboard
- Observation: an example of a parent div with three completely different elements

**Sibling group: Signup options**

- Parent: `<div>` containing different signup options
- Siblings: three `<button>` elements — Facebook, Google, Apple
- Page: https://eduboom-pl-test.bgosoftware.net/auth/signup
- Observation: three buttons inside one div. Each one of them can be selected with the different data-title
