// 06 - Finding & catching elements homework
// Name: Georgi
// Date: 2026-08-18
// Test on: https://pl-test.eduboom.net/dashboard
// Account: tester.17@abv.bg (Test33) — my second subject block is Chemistry, not Physics

// 1. Count how many lesson cards are inside the Mathematics block
function countMathLessonCards() {
  const mathBlock = document.querySelectorAll('.subject-content-wrapper')[0];
  return mathBlock.querySelectorAll('.lesson-title').length;
}
console.log(countMathLessonCards());
// Returned: 1

// 2. Get the title of the very first lesson card on the Dashboard
function getFirstLessonTitle() {
  const firstCard = document.querySelector('.lesson-title');
  return firstCard.querySelector('.lesson-title-text').textContent.trim();
}
console.log(getFirstLessonTitle());
// Returned: "4.1 Rachunki pamięciowe — dodawa..."

// 3. Find the active tab inside the second subject block (named "Physics" in the
// exercise sheet, but on my account the second .subject-content-wrapper is Chemistry)
function getPhysicsActiveTab() {
  const secondBlock = document.querySelectorAll('.subject-content-wrapper')[1];
  return secondBlock.querySelector('.chip--active').textContent.trim();
}
console.log(getPhysicsActiveTab());
// Returned: "test6"

// 4. Get every lesson card's number badge as a plain array
function getAllLessonNumbers() {
  const cards = document.querySelectorAll('.lesson-title');
  const numbers = [];
  for (const card of cards) {
    numbers.push(card.querySelector('.index-bg').textContent.trim());
  }
  return numbers;
}
console.log(getAllLessonNumbers());
// Returned: ["1", "1"]

// Free-choice (optional): count inactive tabs across both subject blocks combined.
// Demonstrates the same querySelectorAll(...).length pattern applied at document
// scope instead of a single container.
function countAllInactiveTabs() {
  return document.querySelectorAll('.chip--inactive').length;
}
console.log(countAllInactiveTabs());
// Returned: 0
