// 04 - JavaScript Basics Part 1
// Name: Adriana Zlatanova
// Date: 2026-07-16

// Task 1: Variables and data types
let userName = "Diana";
let userAge = 24;
const isActive = true;
let middleName = null;
let userEmail = "diana.test@example.com";
console.log(typeof userName);   // string
console.log(typeof userAge);    // number
console.log(typeof isActive);   // boolean
console.log(typeof middleName); // object - a known JS quirk, null isn't really an object
console.log(typeof userEmail);  // string, now that it has a real value instead of being left undefined

var role = "guest";
var role = "editor";
console.log(role); // "editor" - var let this be redeclared with no error at all
let role2 = "guest";
console.log(role2);
// var is avoided because it silently allows redeclaring the same variable in the same
// scope (see role above) - a typo or copy-paste mistake can overwrite a value and you'd
// never know. let throws a SyntaxError for the same redeclaration, catching it right away.
// Reassigning a const (isActive = false) throws "TypeError: Assignment to constant variable."
// typeof an unassigned variable (userEmail before I gave it a value) returned "undefined".

// Task 2: Operators
let score = 90;
let passingScore = 65;
console.log(score + passingScore); // 155
console.log(score - passingScore); // 25
console.log(score * 2);            // 180
console.log(score / 5);            // 18
console.log(score % 10);           // 0

console.log(score > passingScore); // true
console.log(score < passingScore); // false
console.log(score >= 100);         // false
console.log(score <= 85);          // false

console.log(score === 90);  // true
console.log(score !== 90);  // false
console.log("90" === 90);   // false - different types, no coercion with ===
console.log("90" == 90);    // true - == coerces the string to a number first
console.log("90" !== 90);   // true
console.log("90" != 90);    // false

let attendance = 82;
let passed = score >= passingScore && attendance >= 75;
console.log(passed); // true (also tested attendance = 40 - passed correctly flipped to false)
console.log(score >= passingScore || attendance >= 75); // true - only one side needs to hold
console.log(!passed); // false
// === compares value and type together; == converts types before comparing.
// === is the one to prefer in test code, so a string "90" read from a page or
// form field is never mistaken for equal to the number 90.

// Task 3: Strings and template literals
let welcomeConcat = "Welcome, " + userName + "! Active: " + isActive;
let welcomeTemplate = `Welcome, ${userName}! Active: ${isActive}`;
console.log(welcomeConcat);
console.log(welcomeTemplate);

console.log(userEmail.length);
console.log(userEmail.includes("@"));           // true
console.log(userEmail.includes("example.com")); // true

console.log(userName.toUpperCase()); // "DIANA"
console.log(userName.toLowerCase()); // "diana"

console.log(`${userName}'s test account email is ${userEmail}`);
// The template literal was easier - no juggling quotes and + signs, and ${} makes
// it obvious what's a variable versus plain text. An email missing the "@" sign
// would make userEmail.includes("@") return false.

// Task 4: Arrays
let students = ["Diana", "Nikolay", "Kristina", "Petar", "Yana"];
console.log(students);

console.log(students[0]);
console.log(students[students.length - 1]);

students.push("Todor");
students.pop();
console.log(students);
console.log(students.length);
// students.length - 1 always points at the real last element even as the array
// grows or shrinks, while a hardcoded index like students[4] silently points at
// the wrong element (or undefined) the moment the array's size changes.

// Free-choice: using .filter() to pull out only the passing scores from a small
// results array - useful for building a quick pass/fail report without a manual loop
let testScores = [50, 65, 88, 40, 95];
let passingScores = testScores.filter(s => s >= passingScore);
console.log(passingScores); // [ 65, 88, 95 ]
