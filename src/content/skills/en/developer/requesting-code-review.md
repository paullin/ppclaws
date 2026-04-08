---
title: "requesting-code-review"
description: "Use when completing tasks, implementing major features, or before merging to verify work meets requirements"
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-purple"
featured: false
---

## Introduction
The `requesting-code-review` skill ensures code is independently evaluated before proceeding to the next task or merging. It solves the problem of developers (or AI agents) reviewing their own work with biased context, which often leads to missed errors and cascading failures.

## Core Concept
Review early, review often. By dispatching a fresh subagent with strictly isolated context, this skill guarantees an objective evaluation focused entirely on the work product rather than the developer's thought process.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md)

- **Identify when to review**: Mandates reviews after each task in subagent-driven development, after major features, and before merging to `main`. This prevents errors from compounding over time.
- **Gather SHAs and dispatch reviewer**: Requires capturing exact Git commit hashes (`BASE_SHA` and `HEAD_SHA`) and explicitly formatting a request template. This isolates the reviewer's context strictly to the code diff and requirements.
- **Act on feedback categorically**: Forces immediate action on "Critical" and "Important" issues while allowing "Minor" issues to be deferred. This prevents blocking progress on trivial stylistic choices while safeguarding stability.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Establishes a clear, mandatory protocol for requesting code reviews (e.g., after each task or before merging). Provides an exact template for dispatching the reviewer subagent, ensuring consistent and context-rich evaluations.
- **Potential Limitations**: The requirement to dispatch a subagent for every minor task could introduce unnecessary overhead in fast-paced or single-developer projects.
- **What Makes a Good Skill**: It explicitly separates the developer's thought process from the code review by providing only the necessary context (WHAT, PLAN, SHAs), which prevents the reviewer from being biased by the developer's session history.