# 03 — Testing Best Practices Research
**Name:** Georgi
**Date:** 2026-07-19

---

## Methodology

Researched with Claude (general practices), then verified against the sources listed per point below. Compared against our actual setup on both products:
- **Old product** (ucha.se, RO/IT/ES sites + ucha.se mobile app) — manual testing only, no automation.
- **New product** (PL/GR/HU/TR/AL/RS sites + new mobile app) — manual test cases plus a growing Playwright automation suite; the automated findings below come from directly inspecting the `eduboom-qa-automation` repo, not just self-report.

---

## What's Working

## What's Working 1: AI-drafted test cases with mandatory QA review before use
**Applies to:** Manual
**Source:** Quanter — "Best practices for reviewing and adapting AI-generated test cases"
**Our company:** Yes, on both products
**Details:** We generate manual test cases with AI from the story definition, comments, chat notes and old test cases, but a QA always reviews/validates before they're used. Industry guidance is explicit that AI-generated cases should never be used as-is — this is exactly where we land, avoiding the "quantity over strategic coverage" trap AI test generation is known for.

## What's Working 2: Shift-left — test cases ready before planning (new product)
**Applies to:** Manual
**Source:** IBM — "What is Shift-Left Testing?"; Testlio — "Shift Left Testing"
**Our company:** Yes, for the new product — No, for the old product
**Details:** On the new product, test cases are drafted after refinement and ready *before* planning, so developers use them to define subtasks. IBM's research cites defects found this early as up to 10-15x cheaper to fix than ones caught in system testing. The old product doesn't do this — test cases are only written after the story reaches testing, so this benefit isn't captured there yet.

## What's Working 3: Standardized bug report skeleton for every bug
**Applies to:** Manual
**Source:** BrowserStack — "How to Write an Effective Bug Report"
**Our company:** Yes, on both products
**Details:** Every bug logged (via the Rovo agent in Jira) follows the same template, which is exactly what bug-reporting guides recommend for consistency and fast triage — anyone on the team can read a bug report without needing the reporter to clarify it.

## What's Working 4: Page Object Model with typed fixtures (new product automation)
**Applies to:** Automated
**Source:** Playwright official docs — "Page Object Model"; general test automation best practice
**Our company:** Yes
**Details:** The Playwright suite consistently wraps pages in POM classes (`basePage.ts` + per-feature pages) and injects environment/user config through typed custom fixtures. This keeps locators and setup out of test bodies, which is the standard recommendation for maintainable automation — confirmed by inspecting the actual repo structure, not just described secondhand.

## What's Working 5: Quick smoke test before full manual regression (old product)
**Applies to:** Manual
**Source:** BrowserStack — "20 QA Best Practices to Broaden Testing Strategy"
**Our company:** Yes
**Details:** Before running full manual test cases on a deployed story, we do a few minutes of happy-path smoke testing to catch blockers early. This matches the standard "fail fast, cheaply" smoke-testing practice — it avoids sinking a full manual pass into a build that's broken at the entry point.

---

## What's Not Working

## What's Not Working 1: Zero test automation on the old product
**Applies to:** Automated
**Source:** BugBug — "Software Testing Best Practices for 2026"; Katalon — "Best practices for test automation"
**Our company:** Yes, this is a real gap
**Details:** The old product (ucha.se + RO/IT/ES + its mobile app) has no automated tests anywhere — not for story testing, staging, or live regression. Current guidance targets roughly 60-70% automated coverage for regression/smoke, with manual reserved for exploratory/UX work. Right now 100% of regression on staging and live depends on manual checklists that are also outdated.

## What's Not Working 2: Hard-coded waits throughout the automation suite
**Applies to:** Automated
**Source:** Google Testing Blog — "Flaky Tests at Google and How We Mitigate Them"
**Our company:** Yes
**Details:** `waitForTimeout` (a fixed sleep) shows up 52 times across the new product's tests, page objects and utils. Google's own data attributes the majority of flaky-test pass/fail flips to exactly this kind of timing assumption — fixed sleeps break under real-world load/network variance, whereas Playwright's built-in auto-waiting and web-first assertions are designed to replace this entirely.

## What's Not Working 3: No CI/CD pipeline running tests automatically
**Applies to:** Automated
**Source:** Harness — "CI/CD Testing Explained"; Veritis — "CI/CD Pipeline Best Practices"
**Our company:** Yes
**Details:** A GitLab CI file exists, but it only runs on a schedule or manual web trigger — not on every commit/merge request. Best practice is to run automation as a gate on every change so regressions are caught before merge, not discovered later on a timer. Right now the pipeline produces reports but isn't acting as a safety net for the codebase.

## What's Not Working 4: Outdated staging/live regression checklists (old product)
**Applies to:** Manual
**Source:** BrowserStack QA best practices; general regression-testing maintenance guidance
**Our company:** Yes, acknowledged internally already
**Details:** The manual checklists used for staging/live release regression on the old product haven't been kept current. An out-of-date checklist gives false confidence — it looks like coverage but silently misses areas that changed since it was last updated, which is a known failure mode for any regression process based on static, unmaintained lists.

## What's Not Working 5: Test order dependency in the automation suite
**Applies to:** Automated
**Source:** Google Testing Blog — "Test Flakiness"; ICSE 2021 flaky-test root-cause study (async waits, shared state, order dependency)
**Our company:** Yes
**Details:** Some Playwright specs run with `mode: 'serial'` and reuse the same page-object instances and data across tests in one file (e.g. the onboarding flow feeds state into the next test). This is textbook test interdependence — one of the top three root causes of flakiness in the research above — because a failure or change in the first test silently breaks every test after it in the chain.

---

## Notes for the team discussion

The two products are at different maturity stages, so the fix priority isn't the same:
- **Old product** needs the checklist rewrite first (per our own plan), then basic AI-assisted regression automation — right now there's no safety net at all.
- **New product** already has the harder infrastructure (POM, fixtures, CI file) — the gaps left are tactical: replace `waitForTimeout` with proper waits, de-couple serial test state, and wire the existing GitLab CI job to run on every merge request instead of on a schedule.

---


