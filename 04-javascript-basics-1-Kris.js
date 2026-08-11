// 04 - JavaScript Basics Part 1
// Name: Kris
// Date: 16.07.2026

// ## Task 1 — Variables and Data Types
let userName = "Anna";
let middlename = null;
let userEmail = "kristest4267@gmail.com";
let userAge = 27;
const isActive = true;

var role = "student";
var role = "admin";

let role2 = "student";

console.log(typeof userName, typeof userAge, typeof isActive);
console.log(typeof middlename, typeof userEmail);

// var is avoided because the value can be rewritten and therefore lost.
// Reassigning the const isActive = false returns (TypeError: Assignment to constant variable)
// typeof declared but not assigned (userEmail) returned undefined

// ## Task 2 — Operators

let score = 85;
let passingScore = 60;
console.log(score + passingScore);
console.log(score - passingScore);
console.log(score * 2);
console.log(score / 5);
console.log(score % 10);

console.log(score > passingScore);
console.log(score < passingScore);
console.log(score >= 100);
console.log(score <= 85);

console.log(score === 85);
console.log(score !== 85);
console.log("85" === 85);
console.log("85" == 85);
console.log("85" !== 85);
console.log("85" != 85);

let attendance = 90;
let passed = score >= passingScore && attendance >= 75;
console.log(passed);

attendance = 50;

console.log(score >= passingScore || attendance >= 75);
console.log(passed);

// === (strict equality) checks both value and type without converting anything.
// == (loose equality) converts one value's type to match the other before comparing,
// which can cause unexpected results (e.g. "85" == 85 is true even though the types differ).
// In test code, === is preferred because it avoids hidden type-coercion bugs
// and makes assertions more predictable and reliable.

// ## Task 3 — Strings, Template Literals, and String Methods
let welcomeConcat = "Welcome, " + userName + "! Active: " + isActive;
let welcomeTemplate = `Welcome, ${userName}! Active: ${isActive}`;
console.log(welcomeConcat);
console.log(welcomeTemplate);

console.log(userEmail.length);
console.log(userEmail.includes("@"));
console.log(userEmail.includes("example.com"));

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(`${userName}'s test account email is ${userEmail}`);

//**Step 5.** Add a comment answering: which was easier to write, concatenation or a template literal, and what would `userEmail.includes("@")` return for an email missing the `@` sign?
//The template literal was easier to write. It would return false for an email missing the @ sign.

//## Task 4 — Arrays Basics (15 min)

let students = ["Anna", "Georgi", "Maria", "Ivan", "Elena"];
console.log(students);

console.log(students[0]);
console.log(students[students.length - 1]);

students.push("Petar");
students.pop();
console.log(students);
console.log(students.length);

//**Step 4.** Add a comment answering: why is `students.length - 1` a safer way to get the last element than a hardcoded number like `students[4]`?
//You cannot make a mistake by myscounting the number of students.

// Free-choice: finding "Elena" in the array and removing her
let removeIndex = students.indexOf("Elena");
students.splice(removeIndex, 1);
students.push("Petar");
console.log(students);
