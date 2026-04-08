---
title: "writing-skills"
description: "Use when creating new skills, editing existing skills, or verifying skills work before deployment"
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-purple"
featured: false
---

## Introduction
The `writing-skills` skill provides a meta-framework for creating and evaluating other AI skills. It solves the issue of developers writing ineffective, bloated, or overly specific AI prompts by treating prompt engineering as a disciplined, test-driven engineering task.

## Core Concept
"Writing skills IS Test-Driven Development applied to process documentation." If you haven't observed an AI agent fail at a task without a specific instruction, you shouldn't codify that instruction into a skill.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md)

- **TDD Mapping**: The skill directly maps TDD concepts to prompt engineering (e.g., Test Case = Pressure scenario with subagent, Production Code = `SKILL.md`).
- **Watch it fail (Baseline)**: Before writing any documentation, the author must run a baseline scenario to document the exact rationalizations the AI uses to bypass best practices.
- **When to create**: Instructs the user to only create skills for broadly applicable techniques that aren't intuitively obvious, explicitly advising against writing skills for one-off solutions or project-specific conventions.
- **SKILL.md Structure**: Mandates strict formatting for new skills, such as restricting the description to third-person and starting it with "Use when..." to ensure clear triggering conditions.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Brilliantly adapts the principles of Test-Driven Development (TDD) to the process of writing documentation and prompt engineering. Defines clear criteria for when to create a skill versus when to rely on standard practices.
- **Potential Limitations**: Treating documentation writing exactly like software testing (requiring failing baseline scenarios first) may be overly heavy for documenting simple, straightforward utility patterns.
- **What Makes a Good Skill**: It forces the author to empirically prove the value of a skill by verifying that an AI agent actually fails without it, ensuring that only genuinely necessary and effective constraints are codified into skills.