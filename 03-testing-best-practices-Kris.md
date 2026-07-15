# 03 — Testing Best Practices Research

**Name:** Kris
**Date:** 15 July

---

## What's Working

## What's Working 1: AI-assisted exploratory testing with full context

**Applies to:** Manual
**Source:** Claude, cross-checked against Ministry of Testing articles on exploratory testing
**Our company:** Yes, we use Claude connected to our product docs, the live site, and Atlassian for manual testing
**Details:** Having the AI check the live site against documented specs and existing Atlassian tickets means it can act like a context-aware tester — catching doc-vs-behavior mismatches and flagging related/duplicate issues before a human tester spends time on them.

## What's Working 2: Traceability to requirements

**Applies to:** Manual
**Source:** Claude, confirmed by general QA best-practice writing (e.g. Ministry of Testing)
**Our company:** Yes, testing is grounded in actual product documentation rather than tester assumption
**Details:** Because the AI has direct access to product docs, checks can be tied back to real specs, which avoids the common problem of manual testing drifting away from documented requirements over time.

## What's Working 3: Ticket-aware testing

**Applies to:** Manual
**Source:** Claude, based on its Atlassian integration
**Our company:** Yes, Claude is connected to Atlassian during manual testing
**Details:** Pulling ticket history means the AI can check whether an issue was already reported or is related to a known bug, which supports better prioritization and avoids duplicate reports.

---

## What's Not Working

## What's Not Working 1: No automated test suite yet

**Applies to:** Automated
**Source:** Claude, confirmed by Google Testing Blog guidance on test pyramids
**Our company:** Yes, we currently have no established automated testing — it's still in development
**Details:** Without automated tests, regressions rely entirely on manual coverage, which is slower and harder to run consistently on every change; there's also a risk of falling into the "ice-cream cone" anti-pattern by starting with heavy E2E tests instead of a solid base of unit tests.

## What's Not Working 2: No structured/session-based approach to AI testing

**Applies to:** Manual
**Source:** Claude, based on Ministry of Testing's session-based test management (SBTM) approach
**Our company:** Not applicable / unclear — appears ad hoc rather than session-based
**Details:** Without a charter or session structure for what Claude explores each time, coverage can become inconsistent, and it's harder to know what was and wasn't tested.

## What's Not Working 3: Bug report quality from AI testing not yet standardized

**Applies to:** Manual
**Source:** Claude, confirmed by general QA guidance on reproducible bug reports
**Our company:** Not applicable / unclear — needs confirmation
**Details:** If bug reports generated during AI-assisted testing don't consistently include clear repro steps and expected vs. actual behavior, they may need manual cleanup before going into Atlassian, costing time downstream.
