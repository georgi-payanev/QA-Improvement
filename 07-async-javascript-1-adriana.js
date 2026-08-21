// 07 - Asynchronous JavaScript Part 1
// Name: Adriana Zlatanova
// Date: 2026-08-21

// Task 1: Callbacks
function checkScore(score, callback) {
  if (score >= 60) {
    callback(null, "Pass");
  } else {
    callback(null, "Fail");
  }
}
function checkAttendance(present, callback) {
  callback(null, present ? "Attended" : "Absent");
}
checkScore(72, function (error, scoreResult) {
  checkAttendance(true, function (error, attendanceResult) {
    console.log(scoreResult, "-", attendanceResult);
    console.log("Test run complete");
  });
});
// At 2 levels it's already a bit cramped; at 5-6 levels (say: log in, load
// dashboard, open a lesson, check a score, check attendance, log the result)
// each new step indents further right, so the code turns into a sideways
// pyramid. Error handling gets repeated at every level instead of written
// once, it's hard to tell which callback's error belongs to which step, and
// a single missing closing bracket can be almost impossible to spot.

// Task 2: Creating Promises
let simplePromise = new Promise(function (resolve, reject) {
  resolve("Login successful");
});
simplePromise.then((message) => console.log(message));

let failingPromise = new Promise(function (resolve, reject) {
  reject("Login failed: invalid password");
});
failingPromise
  .then((message) => console.log(message))
  .catch((error) => console.log("Error:", error));

let pendingPromise = new Promise((resolve) => setTimeout(() => resolve("Done"), 100));
console.log(pendingPromise);
// A Promise is always in one of three states: pending, fulfilled, or rejected.
// pendingPromise printed as pending ("Promise { <pending> }") because
// console.log ran immediately, and the setTimeout inside it hadn't fired yet -
// the 100ms delay means the resolve happens well after this line already ran.

// Task 3: Promise chaining
function login(username) {
  return new Promise((resolve) => resolve(`${username} logged in`));
}
function loadDashboard(previousMessage) {
  return new Promise((resolve) => resolve(`${previousMessage} -> dashboard loaded`));
}
function countLessons(previousMessage) {
  return new Promise((resolve) => resolve(`${previousMessage} -> found 4 lessons`));
}
login("georgi")
  .then(loadDashboard)
  .then(countLessons)
  .then((finalMessage) => console.log(finalMessage));
// loadDashboard receives "georgi logged in" - whatever login()'s promise
// resolved with. Each .then() passes its return value forward as the input
// to the next .then() in the chain, so the message keeps growing step by step.

// Task 4: Handling success and errors
function checkLoginStatus(username) {
  return new Promise(function (resolve, reject) {
    if (username) {
      resolve(`${username} is logged in`);
    } else {
      reject("No username provided");
    }
  });
}
checkLoginStatus("georgi")
  .then((message) => console.log(message))
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Done checking"));
checkLoginStatus()
  .then((message) => console.log(message))
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Done checking"));
// checkLoginStatus("georgi") resolved and landed in .then(); checkLoginStatus()
// with no argument rejected and landed in .catch(). .finally() ran for both
// calls regardless of which branch they took. That matters for tests because
// cleanup steps (closing a browser session, logging out, clearing test data)
// need to happen whether the test passed or failed - putting that logic in
// .finally() means it's written once instead of duplicated inside both
// .then() and .catch().

// Task 5: Simulating waits
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
console.log("Navigating to dashboard...");
wait(1000).then(function () {
  console.log("Dashboard loaded after 1 second");
});

console.log("Step 1: opening page");
wait(500)
  .then(function () {
    console.log("Step 2: page opened, waiting for animation");
    return wait(300);
  })
  .then(function () {
    console.log("Step 3: animation finished");
  });
// Removing the "return" in front of wait(300) makes "Step 3: animation
// finished" print almost right after "Step 2", instead of ~300ms later.
// Without return, the .then() callback finishes running (synchronously) and
// the chain treats that step as already done, so the next .then() doesn't
// wait on the inner wait(300) promise at all - it just fires on its own later.
// return matters because it hands that inner Promise back into the chain, so
// the next .then() is scheduled to wait for it instead of racing ahead of it.

// Task 6: Bring it together
function waitForCondition(conditionFn, timeoutMs) {
  const intervalMs = 200;
  let elapsed = 0;
  function poll() {
    if (conditionFn()) {
      return Promise.resolve("Condition met");
    }
    if (elapsed >= timeoutMs) {
      return Promise.reject("Timed out waiting for condition");
    }
    elapsed += intervalMs;
    return wait(intervalMs).then(poll);
  }
  return poll();
}
let elementVisible = false;
setTimeout(() => {
  elementVisible = true;
}, 600);
waitForCondition(() => elementVisible, 2000)
  .then((message) => console.log(message)) // "Condition met"
  .catch((error) => console.log("Error:", error));
waitForCondition(() => false, 500)
  .then((message) => console.log(message))
  .catch((error) => console.log("Error:", error)); // "Timed out waiting for condition"

function simulateApiCall(endpoint) {
  const knownEndpoints = {
    "/students": ["Anna", "Georgi", "Maria"],
    "/lessons": ["Lesson 1", "Lesson 2"],
  };
  return wait(500).then(function () {
    if (knownEndpoints[endpoint]) {
      return knownEndpoints[endpoint];
    }
    return Promise.reject(`404: ${endpoint} not found`);
  });
}
simulateApiCall("/students")
  .then((data) => console.log("Success:", data)) // ["Anna", "Georgi", "Maria"]
  .catch((error) => console.log("Error:", error));
simulateApiCall("/unknown")
  .then((data) => console.log("Success:", data))
  .catch((error) => console.log("Error:", error)); // "404: /unknown not found"

// Old-style callback function (imagine this came from an older library you can't edit)
function loadTestDataCallback(source, callback) {
  setTimeout(function () {
    if (source === "students.json") {
      callback(null, { count: 3 });
    } else {
      callback(`File not found: ${source}`, null);
    }
  }, 400);
}
// Wrapping the callback above so callers get a Promise instead
function loadTestData(source) {
  return new Promise(function (resolve, reject) {
    loadTestDataCallback(source, function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
loadTestData("students.json")
  .then((data) => console.log("Loaded:", data)) // { count: 3 }
  .catch((error) => console.log("Error:", error));
loadTestData("missing.json")
  .then((data) => console.log("Loaded:", data))
  .catch((error) => console.log("Error:", error)); // "File not found: missing.json"

// Free-choice: a small test-run summary that tallies pass/fail across a few
// calls - same idea I used for the integration test runner in my automation
// course homework, just written with .then()/.catch() instead of async/await
const sources = ["/students", "/lessons", "/unknown"];
let checksRun = 0;
let passed = 0;
let failed = 0;

function recordResult(ok) {
  checksRun++;
  if (ok) {
    passed++;
  } else {
    failed++;
  }
  if (checksRun === sources.length) {
    console.log("--- Test Run Summary ---");
    console.log({ total: sources.length, passed: passed, failed: failed });
  }
}

for (const source of sources) {
  simulateApiCall(source)
    .then(() => recordResult(true))
    .catch(() => recordResult(false));
}
