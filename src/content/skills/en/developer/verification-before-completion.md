---
title: "verification-before-completion"
description: "Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always"
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-purple"
featured: false
---

## Introduction
The `verification-before-completion` skill combats the tendency of AI agents (and human developers) to declare victory prematurely. It prevents situations where an agent says "The bug is fixed!" based solely on code changes, only for the user to find that the application no longer compiles.

## Core Concept
Evidence before claims, always. By enforcing a strict verification gate, this skill ensures that no task is ever marked as complete without fresh, empirical proof (such as test output or build logs) generated within the current context.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md)

- **The Gate Function**: Before expressing satisfaction, the AI must explicitly identify the verification command, run it fresh, read the full output, and only then make a claim.
- **Identify common failures**: The skill maps out common false equivalents, such as assuming a clean linter means a successful build, or assuming a visual code change means a bug is fixed without testing the original symptom.
- **Red Flags**: Instructs the AI to stop immediately if it catches itself using words like "should work," "probably," or expressing satisfaction before verification ("Done!").
- **Rationalization Prevention**: Directly counters common excuses like "I'm confident" with "Confidence ≠ evidence," forcing the AI to prioritize the spirit of the rule over lazy workarounds.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Establishes a rigorous "Gate Function" requiring fresh, independent execution of verification commands before allowing the AI to claim success. Maps out common failure patterns and explicit red flags to prevent false confidence.
- **Potential Limitations**: For extremely minor changes, the strict requirement to rerun full test suites or builds before acknowledging completion could slow down the conversational flow.
- **What Makes a Good Skill**: It acts as a strict safeguard against AI hallucination and premature satisfaction by demanding empirical evidence (exit codes, exact logs) rather than relying on the AI's internal assumptions or extrapolations.