// 08 - Asynchronous JavaScript Part 2
// Name: Adriana Zlatanova
// Date: 2026-08-26

// Task 1: Async/await basics
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function login(username) {
  return new Promise((resolve) => resolve(`${username} logged in`));
}
function loadDashboard(previousMessage) {
  return new Promise((resolve) => resolve(`${previousMessage} -> dashboard loaded`));
}
async function runTestFlow() {
  const loginResult = await login("georgi");
  const dashboardResult = await loadDashboard(loginResult);
  console.log(dashboardResult);
}
runTestFlow();
// Same two steps as Week 7's login().then(loadDashboard).then(...) chain, but
// here they're just two lines top to bottom instead of nested .then()
// callbacks. It's easier to read because the code looks like normal
// synchronous code - no callback nesting to track, and each intermediate
// value has its own named variable (loginResult, dashboardResult) instead of
// being passed anonymously between .then() calls.

// Task 2: Error handling
function checkLoginStatus(username) {
  return new Promise((resolve, reject) => {
    if (username) {
      resolve(`${username} is logged in`);
    } else {
      reject("No username provided");
    }
  });
}
async function verifyLogin(username) {
  try {
    const message = await checkLoginStatus(username);
    console.log(message);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Done checking");
  }
}
verifyLogin("georgi"); // try block ran, "georgi is logged in" logged
verifyLogin();         // catch block ran, "Error: No username provided" logged
// finally ran both times - once per call, regardless of whether that call's
// await resolved or threw. Same reason it mattered in Week 7 with
// .then()/.catch()/.finally(): a Playwright test still needs its cleanup
// step (closing a page, logging out) to run whether the test passed or the
// await threw, and finally is the one place to write that once.

// Task 3: Sequential vs parallel
function simulateApiCall(endpoint) {
  const knownEndpoints = {
    "/students": ["Anna", "Georgi", "Maria"],
    "/lessons": ["Lesson 1", "Lesson 2"],
  };
  return wait(500).then(() => knownEndpoints[endpoint]);
}
async function sequentialCalls() {
  console.time("sequential");
  const students = await simulateApiCall("/students");
  const lessons = await simulateApiCall("/lessons");
  console.timeEnd("sequential"); // ~1000ms
  console.log(students, lessons);
}
sequentialCalls();
async function parallelCalls() {
  console.time("parallel");
  const [students, lessons] = await Promise.all([
    simulateApiCall("/students"),
    simulateApiCall("/lessons"),
  ]);
  console.timeEnd("parallel"); // ~500ms
  console.log(students, lessons);
}
parallelCalls();
// Parallel came in at roughly half the time (~500ms vs ~1000ms) because both
// 500ms waits run at the same time instead of one after the other. I'd be
// forced into sequential in a test when the second call needs a value that
// only comes out of the first one - e.g. logging in to get a session token,
// then using that token to load a student's dashboard. Promise.all only
// makes sense when the calls are independent of each other.

// Task 4: Array methods
let testResults = [
  { name: "Anna", score: 85 },
  { name: "Georgi", score: 45 },
  { name: "Maria", score: 92 },
];
console.log(testResults.map((r) => r.score));           // [85, 45, 92]
console.log(testResults.filter((r) => r.score >= 60));  // [Anna, Maria]
console.log(testResults.find((r) => r.score < 60));     // { name: "Georgi", score: 45 }
// .find() is the one that returns a single object instead of an array - it
// stops at the first match and hands back that one item (or undefined if
// nothing matches), while .map() and .filter() always return a full array
// even if that array ends up empty or has just one element.

// Task 5: Bring it together
function loadTestDataCallback(source, callback) {
  setTimeout(() => {
    if (source === "grades.json") {
      callback(null, [90, 45, 78, 55]);
    } else {
      callback(`File not found: ${source}`, null);
    }
  }, 400);
}
function loadTestData(source) {
  return new Promise((resolve, reject) => {
    loadTestDataCallback(source, (error, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });
}
async function testDataProcessor(source) {
  try {
    const grades = await loadTestData(source);
    const passed = grades.filter((score) => score >= 60);
    const labeled = grades.map((score) => (score >= 60 ? "Pass" : "Fail"));
    console.log("Grades:", grades);
    console.log("Passed:", passed);
    console.log("Labeled:", labeled);
  } catch (error) {
    console.log("Error:", error);
  }
}
testDataProcessor("grades.json");  // Grades: [90, 45, 78, 55], Passed: [90, 78], Labeled: [Pass, Fail, Pass, Fail]
testDataProcessor("missing.json"); // "Error: File not found: missing.json"
