// ### Exercise 1 — The Five Selection Methods (15 min)

// **Write down:**
// - What did `getElementById('lesson-title')` return, and why?
//    It returned null, because there is no element with the ID of 'lesson-title' on the page.
// - How many `.subject-content-wrapper` elements are on the Dashboard?
//    There are 2 `.subject-content-wrapper` elements on the Dashboard. One for Mathematics and the second for Literature.
// - Did `getElementsByClassName` and `querySelectorAll` agree on the number of `.lesson-title` elements?
//    Yes, both methods returned the same number of elements.
// - How many `<button>` elements are on the whole page?
//    14

// ### Exercise 2 — Finding Nested Elements Inside One Container (15 min)

// **Write down:**
// - How many buttons are inside `mathBlock` vs. on the whole page?
//     There were 5 buttons inside `mathBlock` and 14 buttons on the whole page.
// - What is the text of the currently active tab?
//     Mathematics -> Section uno
// - How many inactive tabs are there in the Mathematics block?
//     There are 2 inactive tabs in the Mathematics block.

// ### Exercise 3 — Navigating Parent, Child, and Sibling Relationships (15 min)

// **Write down:**
// - The class of the row one level above the title
//     v-container v-locale--is-ltr d-flex p-0 text-container
// - How many children that row has
//     2 children
// - The text of the sibling you landed on in Step 4
//     '1'
// - The result of the `===` check in Step 5
//     true
// - The tag name and `href` you reach in Step 6
//     The tag name is 'A' and the href is '/mathematics/3-preschool/section-uno/lesson-one-1'

// ### Exercise 4 — Collections: Extracting Data From Repeated Cards (20 min)

// **Write down:**
// - The number + title pairs printed in Step 2 (list them)
//     1 - lesson one
//     2 - less 02
//     3 - lessson 1
//     4 - lessson 2
//     5 - less 1
// - How many card titles contained "PLW" in Step 3
//     0 of them
// - How many grade pills you counted in Step 4
//     20

// ### Exercise 5 — Attributes, Properties, and Form Inputs (20 min)

// **Write down:**
// - The `data-title` value you read in Step 1
//     'deny-cookies'
// - Both values from Step 2, and one sentence on why they're different
//       The `getAttribute` method returns the value as it is in the HTML, while the `href` property returns the full URL.
// - The `textContent` vs. `innerHTML` you saw in Step 4
//     textContent returns the text without any tags, while innerHTML returns the text along with any HTML tags.
// - How many inputs are in the settings form, their types, and whether they're disabled
//     There are 5 inputs with the following types: 4 text input (disabled), 1 email input (disabled).

// ### What to put in your file

// Write **one function per task below**. Everything you need is a small variation on something you already did in the exercises above —
// homework is about turning that same code into a reusable function, not hunting for brand-new selectors.
// Stay on the **Dashboard** for all four (no Incognito windows, no other pages needed). For each function,
// add a comment underneath showing what it returned when you actually ran it in the Console.

// 1. **`countMathLessonCards()`** — returns how many lesson cards are inside the Mathematics block. (Same `mathBlock` scoping idea as Exercise 2.)
// function countMathLessonCards() {
//   let mathBlock = document.querySelectorAll('.subject-content-wrapper')[0];
//   let lessonCards = mathBlock.querySelectorAll('.lesson-title');
//   return lessonCards.length;
// }
// countMathLessonCards();

// 2. **`getFirstLessonTitle()`** — returns the title text of the very first lesson card on the whole Dashboard.
// (Same idea as Exercise 3, Step 1 — just wrapped in a function.)
//     function getFirstLessonTitle() {
//       let title = document.querySelector('.lesson-title-text');
//       return title.textContent.trim();
//     }
//     getFirstLessonTitle();
// 3. **`getPhysicsActiveTab()`** — same as Exercise 2, Step 3, but for the **Physics** block instead of Math
// (it's the *second* `.subject-content-wrapper`, not the first).
//     function getPhysicsActiveTab() {
//       let physicsBlock = document.querySelectorAll('.subject-content-wrapper')[1];
//       return physicsBlock.querySelector('.chip--active').textContent.trim();
//     }
//     getPhysicsActiveTab();
// 4. **`getAllLessonNumbers()`** — loops through every lesson card on the Dashboard and returns just the number badges as a plain array,
// e.g. `["1", "2", "3", "1"]`. (Same loop as Exercise 4, Step 2 — just keep the number and drop the title.)
// function getAllLessonNumbers() {
//   let cards = document.querySelectorAll('.lesson-title');
//   let numbers = [];
//   for (const card of cards) {
//     numbers.push(card.querySelector('.index-bg').textContent.trim());
//   }
//   return numbers;
// }
// getAllLessonNumbers();

// ### Free-Choice Task (optional, only if you have extra time)

// Add **one more function of your choice** that finds something small we didn't cover — for example,
// counting how many `.chip--inactive` tabs exist across *both* subject blocks combined. Add a comment above it explaining
// what it demonstrates. Skip this if the four functions above already took you a while — it isn't required.

// function countInactiveTabs() {
//     let inactiveBlocks = document.querySelectorAll('.subject-content-wrapper');
//     let totalInactiveTabs = 0;
//     for (const block of inactiveBlocks) {
//         totalInactiveTabs += block.querySelectorAll('.chip--inactive').length;
//     }
//     return totalInactiveTabs;
// }
// countInactiveTabs();
