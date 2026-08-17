// 06 - Finding & catching elements homework
// Name: Adriana Zlatanova
// Date: 2026-08-14
// Test on: https://pl-test.eduboom.net/dashboard

// 1. Count how many lesson cards are inside the Mathematics block.
// Scoped by subject name (not index [0]) - the Dashboard sorts subject blocks by
// "recently watched", so the Mathematics block isn't reliably the first one.
function countMathLessonCards() {
  const mathBlock = [...document.querySelectorAll('.subject-content-wrapper')]
    .find(block => block.textContent.includes('Mathematics'));
  return mathBlock.querySelectorAll('.lesson-title').length;
}
console.log(countMathLessonCards());
// Returned: 3

// 2. Get the title of the very first lesson card on the Dashboard
function getFirstLessonTitle() {
  const firstCard = document.querySelector('.lesson-title');
  return firstCard.querySelector('.lesson-title-text').textContent.trim();
}
console.log(getFirstLessonTitle());
// Returned: "5.2 Metoda naukowa – etapy, przy..."
// (the "..." is literally part of the DOM text, not a CSS ellipsis)

// 3. Find the active tab inside the Physics block.
// Scoped by subject name for the same reason as countMathLessonCards().
function getPhysicsActiveTab() {
  const physicsBlock = [...document.querySelectorAll('.subject-content-wrapper')]
    .find(block => block.textContent.includes('Physics'));
  return physicsBlock.querySelector('.chip--active').textContent.trim();
}
console.log(getPhysicsActiveTab());
// Returned: "test3"

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
// Returned: ["1", "1", "2", "3"]

// Free-choice (optional): count inactive tabs across both subject blocks combined
function countAllInactiveTabs() {
  return document.querySelectorAll('.chip--inactive').length;
}
console.log(countAllInactiveTabs());
// Returned: 2
