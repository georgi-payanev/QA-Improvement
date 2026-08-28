// 08 - Asynchronous JavaScript Part 2
// Name: Kris
// Date: 2026-08-28

// Task 1: Async/await basics

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function login(username) {
//   return new Promise((resolve) => resolve(`${username} logged in`));
// }
// function loadDashboard(previousMessage) {
//   return new Promise((resolve) => resolve(`${previousMessage} -> dashboard loaded`));
// }

// async function runTestFlow() {
//   const loginResult = await login("georgi");
//   const dashboardResult = await loadDashboard(loginResult);
//   console.log(dashboardResult);
// }
// runTestFlow();
// Comparison: with .then() chaining this would be login("georgi").then(loadDashboard).then(console.log);
// async/await is easier to read because each step is its own line

// Task 2: Error handling with try/catch/finally

// function checkLoginStatus(username) {
//   return new Promise((resolve, reject) => {
//     if (username) {
//       resolve(`${username} is logged in`);
//     } else {
//       reject("No username provided");
//     }
//   });
// }

// async function verifyLogin(username) {
//   try {
//     const message = await checkLoginStatus(username);
//     console.log(message);
//   } catch (error) {
//     console.log("Error:", error);
//   } finally {
//     console.log("Done checking");
//   }
// }

// verifyLogin("georgi");
// verifyLogin();

// finally ran in BOTH calls — it always runs regardless of success or failure.

// Task 3: Sequential vs parallel
// function simulateApiCall(endpoint) {
//   const knownEndpoints = {
//     "/students": ["Anna", "Georgi", "Maria"],
//     "/lessons": ["Lesson 1", "Lesson 2"],
//   };
//   return wait(500).then(() => knownEndpoints[endpoint]);
// }

// async function sequentialCalls() {
//   console.time("sequential");
//   const students = await simulateApiCall("/students");
//   const lessons = await simulateApiCall("/lessons");
//   console.timeEnd("sequential");
//   console.log(students, lessons);
// }
// sequentialCalls();

// async function parallelCalls() {
//   console.time("parallel");
//   const [students, lessons] = await Promise.all([
//     simulateApiCall("/students"),
//     simulateApiCall("/lessons"),
//   ]);
//   console.timeEnd("parallel");
//   console.log(students, lessons);
// }
// parallelCalls();
// The parallel version is roughly 2x faster (~500ms vs ~1000ms) because both
// 500ms waits happen at the same time instead of one after the other.
// You'd be forced to go sequential when call #2 needs data that only comes
// back from call #1 (e.g., you must log in and get a user ID before you can
// fetch that user's orders).

// Task 4: Array methods for test data
// let testResults = [
//   { name: "Anna", score: 85 },
//   { name: "Georgi", score: 45 },
//   { name: "Maria", score: 92 },
// ];

// console.log(testResults.map((r) => r.score));
// console.log(testResults.filter((r) => r.score >= 60));
// console.log(testResults.find((r) => r.score < 60));
// .find() returns a single object.

// Task 5: Bring it together — test data processor
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

testDataProcessor("grades.json");
testDataProcessor("missing.json");
