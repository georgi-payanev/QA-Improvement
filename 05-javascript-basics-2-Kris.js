// 05 - JavaScript Basics Part 2
// Name: Kris
// Date: 30.07.2026

// Task 1: Conditionals

// let score = 55;
// if (score >= 60) {
//   console.log("Pass");
// } else if (score >= 50) {
//   console.log("Borderline");
// } else {
//   console.log("Fail");
// }

// let score = 55;
// let result = score >= 60 ? "Pass" : "Fail";
// console.log(result);

//**Step 4.** Add a comment answering: what did your ternary log for `score = 55`, and when would you prefer `if/else` over a ternary?
// The ternary logged "Fail" for score = 55. I would prefer if/else over a ternary when there are multiple conditions to check.

// Task 2: Loops`. Recreate the array from last week

// **Goal:** Iterate through the `students` array from Week 4 using `for` and `for...of`. You will reuse this loop pattern in Task 5.

let students = ["Anna", "Georgi", "Maria", "Ivan", "Elena"];

// for (let i = 0; i < students.length; i++) {
//   console.log(`${i + 1}: ${students[i]}`);
// }

// for (let student of students) {
//   console.log(student);
// }

// for (let student of students) {
//   if (student === "Ivan") {
//     continue;
//   }
//   console.log(student);
// }

//**Step 5.** Add a comment answering: what is the difference between a `for` loop and a `for...of` loop, and which one did you find easiest to read? (That is the one you'll reuse in Task 5.)
// The `for` loop uses an index to access elements in the array, while the `for...of` loop directly iterates over the elements of the array. I found the `for...of` loop easier to read.

// ## Task 3 — Functions (15 min)

// **Goal:** Write the same small piece of logic using two function syntaxes, then write two functions you will reuse directly in Task 5.

// function isPassing(score) {
//   return score >= 60;
// }
// console.log(isPassing(72));
// console.log(isPassing(40));

// const isPassingArrow = (score) => score >= 60;
// console.log(isPassingArrow(72));

// function isValidEmail(email) {
//   return email.includes("@");
// }
// console.log(isValidEmail("kristest4267@gmail.com:"));
// console.log(isValidEmail("kristest4267gmail.com"));

// function getGreeting(name) {
//   return `Hi, ${name}!`;
// }
// console.log(getGreeting(students[0]));

//**Step 5.** Add a comment answering: do `isPassing` and `isPassingArrow` return the same result for the same input? You will call `isValidEmail` and `getGreeting` again, unchanged, in Task 5.
// Yes, both functions return the same result for the same input.

// ## Task 4 — Objects (10 min)

// **Goal:** Turn one plain student name into a structured object. In Task 5 you will turn the whole `students` array into a list of objects shaped like this one.

// let user = {
//   name: "Anna",
//   email: "anna.test@example.com",
//   age: 27,
// };
// console.log(user);
// console.log(user.name);
// console.log(user["email"]);

// user.greet = function () {
//   return `Hi, I'm ${this.name}`;
// };
// console.log(user.greet());

//**Step 4.** Add a comment answering: what does `this.name` refer to inside `user.greet()`, and why is an object a more useful way to group a user's data than separate variables like `userName`, `userEmail`, `userAge` from Week 4?
// this.name refers to Anna, the name property of the user object that greet() was called on.
// An object is more useful than separate variables because all the related data (name, email, age) stays bundled together as one unit

// Task 5: Bring it together

let users = [
  { name: "Anna", email: "anna.test@example.com", age: 27 },
  { name: "Georgi", email: "georgi.test@example.com", age: 17 },
  { name: "Maria", email: "maria.test-example.com", age: 32 },
];

function getGreeting(user) {
  return `Hi, I'm ${user.name}, my email is ${user.email}, and I'm ${user.age} years old.`;
}
function isValidEmail(email) {
  return email.includes("@");
}
function isAdult(user) {
  return user.age >= 18;
}

for (let user of users) {
  console.log(getGreeting(user));
  console.log("Valid email:", isValidEmail(user.email));
  console.log(isAdult(user) ? "adult" : "minor");
}

// Free-Choice Task: counts how many users have a valid email
function countValidEmails(users) {
  let count = 0;
  for (let user of users) {
    if (isValidEmail(user.email)) {
      count++;
    }
  }
  return count;
}
console.log(
  `${countValidEmails(users)} out of ${users.length} users have a valid email.`,
);
