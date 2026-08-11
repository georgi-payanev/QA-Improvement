// 05 - JavaScript Basics Part 2
// Name: Adriana Zlatanova
// Date: 2026-07-29

// Task 1: Conditionals
let score = 72;
if (score >= 60) {
  console.log("Pass");
} else if (score >= 50) {
  console.log("Borderline");
} else {
  console.log("Fail");
}
let result = score >= 60 ? "Pass" : "Fail";
console.log(result);
// With score = 55 the ternary logged "Fail", since it only checks >= 60 and has
// no room for "Borderline" - that's exactly why if/else if/else is the better
// choice whenever there are more than two possible outcomes to categorize.

// Task 2: Loops
let students = ["Elena", "Boris", "Mila", "Stoyan", "Radost"];
for (let i = 0; i < students.length; i++) {
  console.log(`${i + 1}: ${students[i]}`);
}
for (let student of students) {
  console.log(student);
}
for (let student of students) {
  if (student === "Stoyan") {
    continue;
  }
  console.log(student);
}
// A for loop gives you the index (useful for numbering or comparing neighbors),
// while for...of hands you the value directly with no counter to manage.
// for...of was easier to read here since I only needed the names themselves -
// that's the loop style reused in Task 5.

// Task 3: Functions
function isPassing(score) {
  return score >= 60;
}
console.log(isPassing(72));
console.log(isPassing(40));
const isPassingArrow = (score) => score >= 60;
console.log(isPassingArrow(72));
function isValidEmail(email) {
  return email.includes("@");
}
console.log(isValidEmail("elena.test@example.com"));
function getGreeting(name) {
  return `Hi, ${name}!`;
}
console.log(getGreeting(students[0]));
// isPassing and isPassingArrow returned identical results for the same input
// (true for 72, false for 40) - the arrow function is just shorter syntax
// for the same logic, not a different behavior.
// Quirk found while running top to bottom: this line actually logs
// "Hi, I'm undefined", not "Hi, Elena!". Task 5 declares another function
// named getGreeting with a different signature (takes a user object, not a
// name) - function declarations hoist, so the Task 5 version silently
// overwrites this one for the whole file, and students[0] (a string) has no
// .name property. Proof it's the redefinition: renaming this call's target
// or moving it after removing Task 5's getGreeting brings back "Hi, Elena!".
// (true for 72, false for 40) - the arrow function is just shorter syntax
// for the same logic, not a different behavior.

// Task 4: Objects
let user = {
  name: "Elena",
  email: "elena.test@example.com",
  age: 24,
};
console.log(user);
console.log(user.name);
console.log(user["email"]);
user.greet = function () {
  return `Hi, I'm ${this.name}`;
};
console.log(user.greet());
// Inside user.greet(), this.name refers to the object the method was called on
// (user), so it resolves to "Elena" - if the method were copied onto another
// object, this.name would follow that object instead.
// Grouping name/email/age into one object is more useful than separate
// userName/userEmail/userAge variables (Week 4 style) because related data
// stays together as one value - it can be passed to a function, logged, or
// stored in an array as a single unit instead of three variables that could
// drift out of sync.

// Task 5: Bring it together
let users = [
  { name: "Elena", email: "elena.test@example.com", age: 24 },
  { name: "Boris", email: "boris.test@example.com", age: 17 },
  { name: "Mila", email: "mila.test-example.com", age: 32 },
];
function getGreeting(user) {
  return `Hi, I'm ${user.name}`;
}
for (let user of users) {
  console.log(getGreeting(user));
  console.log("Valid email:", isValidEmail(user.email));
  console.log(user.age >= 18 ? "adult" : "minor");
}
// Mila's email is missing the "@" on purpose, so isValidEmail(user.email)
// has a real false case to log alongside the two true ones - not just the
// happy path.

// Free-choice: adding a role to each user and logging a permission level with
// a switch statement - the topic list covers switch, but Tasks 1-5 never
// used one, so this fills that gap using the same users array.
users[0].role = "admin";
users[1].role = "editor";
users[2].role = "viewer";
for (let user of users) {
  switch (user.role) {
    case "admin":
      console.log(`${user.name}: full access`);
      break;
    case "editor":
      console.log(`${user.name}: can edit content`);
      break;
    default:
      console.log(`${user.name}: read-only access`);
  }
}
