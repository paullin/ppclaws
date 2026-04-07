---
title: "test-driven-development"
description: "Use when implementing any feature or bugfix, before writing implementation code"
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-purple"
featured: false
---

## Introduction
The `test-driven-development` skill acts as an uncompromising enforcer of the TDD methodology. It directly addresses the problem of developers or AI agents writing large blocks of untested or poorly tested code, ensuring that code reliability is built-in from the very first line rather than added as an afterthought.

## Core Concept
"No production code without a failing test first." By strictly enforcing the Red-Green-Refactor loop, it ensures that every line of code serves a verified, tested purpose.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md)

- **Write failing test first (RED)**: Demands that the AI writes one minimal test showing what should happen before any production code is touched.
- **Verify failure**: Forces the AI to actually run the test and confirm it fails for the correct reason.
- **Write minimal code (GREEN)**: Instructs the AI to write only the exact code needed to make the test pass.
- **Refactor**: Only after the test is green is the AI permitted to clean up the code.
- **Delete unauthorized code**: Instructs the AI to completely delete any production code that was written before a failing test, preventing any "adaptation" of pre-written logic.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Strictly codifies the Red-Green-Refactor loop into an unbreakable rule ("NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST"). Provides clear "Good" and "Bad" code examples to guide the AI in writing minimal, behavior-focused tests.
- **Potential Limitations**: The rigid insistence on TDD with no exceptions (other than throwaway prototypes) can be counterproductive for highly exploratory work or pure UI/CSS tweaking.
- **What Makes a Good Skill**: It actively combats rationalization (e.g., "skip TDD just this once") by instructing the AI to delete any production code written before a test, enforcing discipline at the prompt level.