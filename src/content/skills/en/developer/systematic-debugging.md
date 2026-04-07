---
title: "systematic-debugging"
description: "Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes"
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-purple"
featured: false
---

## Introduction
The `systematic-debugging` skill enforces a disciplined, evidence-based approach to fixing software issues. It solves the widespread problem of developers (and AI agents) guessing at solutions, throwing random patches at a problem, and ultimately masking the true underlying issue or creating new bugs.

## Core Concept
"No fixes without root cause investigation first." By mandating a four-phase diagnostic process, this skill ensures that every fix addresses the actual failure rather than just treating the symptom.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md)

- **Read error messages carefully**: Demands that the AI fully read stack traces, file paths, and error codes rather than skipping past them.
- **Reproduce consistently**: Instructs the AI to verify if the issue happens reliably and to gather more data instead of guessing if it doesn't.
- **Check recent changes**: Forces a review of Git diffs, new dependencies, and configuration changes to identify what triggered the failure.
- **Gather evidence in multi-component systems**: Before proposing any fix, the AI must add diagnostic instrumentation (like logging data entering and exiting a component) to isolate exactly where the system breaks.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Enforces an "Iron Law" that strictly forbids proposing fixes without first investigating the root cause. Mandates a structured four-phase diagnostic approach, particularly emphasizing the addition of diagnostic instrumentation in multi-component systems.
- **Potential Limitations**: The absolute refusal to attempt quick patches might frustrate users who are facing trivial syntax errors or obvious typos where the root cause is already known.
- **What Makes a Good Skill**: It directly addresses the psychological traps of debugging (e.g., rushing under time pressure or guessing) by codifying a methodical, evidence-based approach that prioritizes long-term stability over quick fixes.