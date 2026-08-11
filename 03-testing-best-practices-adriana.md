# 03 — Testing Best Practices Research

**Name:** Adriana Zlatanova
**Date:** 2026-07-15

---

## What's Working

## What's Working 1: Regression testing is largely automated
**Applies to:** Automated
**Source:** Claude, cross-checked with the Google Testing Blog's general recommendation to automate repetitive, low-judgment checks
**Our company:** Yes — we have a lot of our regression coverage automated with Playwright, so manual QA only needs to cover a few remaining things by hand
**Details:** Automating the repetitive, stable-flow checks is exactly what most testing guidance recommends — it frees manual QA time for the exploratory and judgment-based testing that automation can't do well.

## What's Working 2: Feature verification across progressive environments
**Applies to:** Manual
**Source:** Claude, general industry practice around staged environment promotion (test → stage → prod)
**Our company:** Yes — a feature is tested in the Testing environment first, then re-tested in Stage, then verified again in Prod
**Details:** Re-verifying a feature at each environment stage catches environment-specific issues (config, data, integration differences) that a single test pass would miss — this progressive gate is a solid practice, even without a separate "pre-release regression" step.

## What's Working 3: QA documents test scenarios and cases per feature
**Applies to:** Manual
**Source:** Claude, matches Ministry of Testing's general guidance that documented test scenarios improve repeatability and review
**Our company:** Yes — QA writes test scenarios/cases for each feature, so there is a documented record of what was tested
**Details:** Having written test cases (rather than testing purely from memory) means coverage can be reviewed by someone else and repeated consistently the next time the feature changes.

## What's Working 4: Flaky failures get root-caused, not blindly re-run
**Applies to:** Automated
**Source:** Claude, confirmed by the Google Testing Blog's ["Flaky Tests at Google and How We Mitigate Them"](https://testing.googleblog.com/2016/05/flaky-tests-at-google-and-how-we.html)
**Our company:** Yes — when a test flakes, we analyze where the problem is rather than just re-running it and moving on
**Details:** The Google Testing Blog specifically calls out "silent retry" as an anti-pattern because it hides real information — investigating the root cause instead is the practice they recommend, and it's what we already do.

---

## What's Not Working

## What's Not Working 1: Automated tests are triggered manually, not run in CI/CD
**Applies to:** Automated
**Source:** Claude, general shift-left/CI good practice (tests should run automatically on every change, not on demand)
**Our company:** Yes — our Playwright suite is currently triggered manually rather than running automatically on PRs/merges
**Details:** Manual triggering means a run can be forgotten or skipped under time pressure, and feedback arrives much later than it would if tests ran automatically. **Suggestion:** wiring the existing Playwright suite into CI (even just on merge to main, before a full PR-gate is feasible) would be the single highest-leverage change here — it turns "we have automation" into "automation actually catches things before they ship."

## What's Not Working 2: No dedicated regression pass before release
**Applies to:** Manual/Automated
**Source:** Claude, matches the general "release gate" principle from Google Testing Blog-style CI practices
**Our company:** Yes — we don't currently run the automated suite or a manual regression pass specifically before a release; coverage instead comes from testing each feature as it moves through Testing → Stage → Prod
**Details:** Per-feature environment checks confirm that *feature* works, but they don't systematically check that *other, unrelated* areas didn't break — the classic gap regression testing exists to close. **Suggestion:** since the Playwright suite already covers a lot of regression, running it as an explicit gate right before each release (not just ad hoc) would close this gap cheaply, since the coverage already exists.

## What's Not Working 3: Test cases are scattered across three different places
**Applies to:** Manual
**Source:** Claude, expanded with general test-case-management best practice (single source of truth)
**Our company:** Yes — test scenarios/cases live in local `.md` files, Google Drive, and Confluence, with no single place that's authoritative
**Details:** When the same information can live in three places, it's easy for them to drift out of sync, and there's no easy way to answer "do we already have a test for this?" **Suggestion:** picking one system as the source of truth (even just "Confluence is canonical, local files are drafts") would reduce duplication risk.

## What's Not Working 4: Test automation ownership sits only with QA
**Applies to:** Automated
**Source:** Claude, general shift-left testing principle — developers own fast unit/component tests close to the code, QA focuses on end-to-end and exploratory testing
**Our company:** Yes — Playwright tests are written and maintained by QA only
**Details:** This matches the "ice-cream-cone" pattern Martin Fowler and others warn about — see his [Test Pyramid article](https://martinfowler.com/bliki/TestPyramid.html) and writeups of the ["ice cream cone" anti-pattern](https://bugbug.io/blog/software-testing/ice-cream-cone-anti-pattern/) — when most/all automated testing sits at the QA-owned E2E layer with no developer-owned unit/integration layer underneath it, coverage is slower to run and harder to scale as the codebase grows. **Suggestion:** this doesn't mean QA should own less — it means asking whether developers could own a layer of faster, lower-level automated tests underneath the Playwright suite, so QA's E2E automation isn't carrying the whole burden alone.
