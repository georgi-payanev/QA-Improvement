// 07 - Asynchronous JavaScript Part 1
// Name: Kris
// Date: 19.08.2026

// Task 1: Callbacks
// function checkScore(score, callback) {
//   if (score >= 60) {
//     callback(null, "Pass");
//   } else {
//     callback(null, "Fail");
//   }
// }

// function checkAttendance(present, callback) {
//   callback(null, present ? "Attended" : "Absent");
// }

// checkScore(72, function (error, scoreResult) {
//   checkAttendance(true, function (error, attendanceResult) {
//     console.log(scoreResult, "-", attendanceResult);
//     console.log("Test run complete");
//   });
// });

//**Step 3.** Add a comment answering: this is only two levels deep — what would it look like at five or six levels, and why would that be hard to read and debug?

// checkScore(72, function (error, scoreResult) {
//   // Level 1
//   checkAttendance(true, function (error, attendanceResult) {
//     // Level 2
//     checkHomework(true, function (error, homeworkResult) {
//       // Level 3
//       checkParticipation(true, function (error, participationResult) {
//         // Level 4
//         checkFinalGrade(true, function (error, finalGradeResult) {
//           // Level 5
//           console.log(scoreResult, attendanceResult, homeworkResult, participationResult, finalGradeResult);
//           console.log("Test run complete");
//         });
//       });
//     });
//   });
// });

// At five or six levels deep, the code forms a "pyramid" —
// each new async step adds another layer of indentation, so the code
// keeps shifting further to the right instead of staying readable.
// This is hard to read because you have to track which "error" and
// "result" belongs to which level just by counting curly braces, and
// it's hard to debug because there's no single place to handle errors —
// each level needs its own error check, or a failure deep in the chain
// can get silently missed.

// Task 2: Creating Promises

// let simplePromise = new Promise(function (resolve, reject) {
//   resolve("Login successful");
// });

// simplePromise.then(function (message) {
//   console.log(message);
// });

// let failingPromise = new Promise(function (resolve, reject) {
//   reject("Login failed: invalid password");
// });

// failingPromise
//   .then(function (message) {
//     console.log(message);
//   })
//   .catch(function (error) {
//     console.log("Error:", error);
//   });

// let pendingPromise = new Promise(function (resolve) {
//   setTimeout(() => resolve("Done"), 100);
// });
// console.log(pendingPromise);

//*Step 4.** Add a comment answering: what are the three states a Promise can be in, and which one did `pendingPromise` print as in Step 3?
// Pending, fulfilled, and rejected. The `pendingPromise` printed as "pending" because it was still waiting for the setTimeout to complete before it could be resolved or rejected.

//## Task 3 — Promise Chaining (15 min)

// function login(username) {
//   return new Promise(function (resolve) {
//     resolve(`${username} logged in`);
//   });
// }

// function loadDashboard(previousMessage) {
//   return new Promise(function (resolve) {
//     resolve(`${previousMessage} -> dashboard loaded`);
//   });
// }

// function countLessons(previousMessage) {
//   return new Promise(function (resolve) {
//     resolve(`${previousMessage} -> found 4 lessons`);
//   });
// }
// login("georgi")
//   .then(loadDashboard)
//   .then(countLessons)
//   .then(function (finalMessage) {
//     console.log(finalMessage);
//   });

//**Step 3.** Add a comment answering: what value does `loadDashboard` actually receive when it runs, and where does that value come from?
//loadDashboard receives the previous value returned by login, which is the string "georgi logged in".

// Task 4: Handling success and errors`.

// function checkLoginStatus(username) {
//   return new Promise(function (resolve, reject) {
//     if (username) {
//       resolve(`${username} is logged in`);
//     } else {
//       reject("No username provided");
//     }
//   });
// }
// checkLoginStatus("georgi")
//   .then((message) => console.log(message))
//   .catch((error) => console.log("Error:", error))
//   .finally(() => console.log("Done checking"));

// checkLoginStatus()
//   .then((message) => console.log(message))
//   .catch((error) => console.log("Error:", error))
//   .finally(() => console.log("Done checking"));

//**Step 3.** Add a comment answering: which call landed in `.then()` and which landed in `.catch()`? Did `.finally()` run for both, and why is that useful for a test that needs to clean up regardless of pass/fail?
// The first call with "georgi" landed in `.then()` because it resolved successfully, while the second call without a username landed in `.catch()` because it was rejected. Yes, `.finally()` ran for both calls, which is useful for cleanup tasks that need to be executed regardless of whether the promise was fulfilled or rejected.

// Task 5: Simulating waits`

// function wait(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// }

// console.log("Navigating to dashboard...");
// wait(1000).then(function () {
//   console.log("Dashboard loaded after 1 second");
// });

// console.log("Step 1: opening page");
// wait(1000)
//   .then(function () {
//     console.log("Step 2: page opened, waiting for animation");
//     return wait(1000);
//   })
//   .then(function () {
//     console.log("Step 3: animation finished");
//   });

//**Step 4.** Add a comment answering: try deleting the `return` in front of the second `wait(300)` and run it again. What changes about when "Step 3: animation finished" prints, and why does `return` matter there?
// Without the `return`, "Step 3: animation finished" prints immediately after "Step 2: page opened, waiting for animation" because the second `wait(1000)` is not being returned to the promise chain. The `return` is important because it ensures that the next `.then()` waits for the promise returned by `wait(1000)` to resolve before executing, maintaining the intended sequence of asynchronous operations.

// Task 6: Bring it together

function wait(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), ms);
  });
}

// function waitForCondition(conditionFn, timeoutMs) {
//   const intervalMs = 200;
//   let elapsed = 0;

//   function poll() {
//     if (conditionFn()) {
//       return Promise.resolve("Condition met");
//     }
//     if (elapsed >= timeoutMs) {
//       return Promise.reject("Timed out waiting for condition");
//     }
//     elapsed += intervalMs;
//     return wait(intervalMs).then(poll);
//   }

//   return poll();
// }

// let elementVisible = false;
// setTimeout(() => {
//   elementVisible = true;
// }, 600);

// waitForCondition(() => elementVisible, 2000)
//   .then((message) => console.log(message))
//   .catch((error) => console.log("Error:", error));

// waitForCondition(() => false, 500)
//   .then((message) => console.log(message))
//   .catch((error) => console.log("Error:", error));

// function simulateApiCall(endpoint) {
//   const knownEndpoints = {
//     "/students": ["Anna", "Georgi", "Maria"],
//     "/lessons": ["Lesson 1", "Lesson 2"],
//   };

//   return wait(500).then(function () {
//     if (knownEndpoints[endpoint]) {
//       return knownEndpoints[endpoint];
//     }
//     return Promise.reject(`404: ${endpoint} not found`);
//   });
// }

// simulateApiCall("/students")
//   .then((data) => console.log("Success:", data))
//   .catch((error) => console.log("Error:", error));

// simulateApiCall("/unknown")
//   .then((data) => console.log("Success:", data))
//   .catch((error) => console.log("Error:", error));

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

// Your job: wrap it so callers get a Promise instead of a callback
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
  .then((data) => console.log("Loaded:", data))
  .catch((error) => console.log("Error:", error));

loadTestData("missing.json")
  .then((data) => console.log("Loaded:", data))
  .catch((error) => console.log("Error:", error));
