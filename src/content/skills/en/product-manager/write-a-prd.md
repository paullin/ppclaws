---
title: "write-a-prd"
description: "Create a PRD through user interview, codebase exploration, and module design, then submit as a GitHub issue. Use when user wants to write a PRD, create a product requirements document, or plan a new feature."
author: "mattpocock"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-blue"
featured: false
---

## Introduction and Core Concept
The `write-a-prd` skill is designed to help users systematically create Product Requirements Documents (PRDs) through an interactive, interview-style process. It solves the problem of incomplete or vague feature planning by forcing the AI to relentlessly question the user, explore the existing codebase, and design deep, testable modules before any code is written.

## Core Concept
Transform vague ideas into rigorous PRDs through relentless interviewing, codebase exploration, and deep module design, culminating in a structured GitHub issue.

## Installation and Usage Guide
https://github.com/mattpocock/skills

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/mattpocock/skills/blob/main/write-a-prd/SKILL.md)

- **Initial Interview & Exploration**: The AI starts by asking for a detailed problem description and then immediately explores the codebase to ground the user's ideas in reality.
- **Relentless Questioning**: The AI is instructed to "interview the user relentlessly" about every aspect of the plan. This ensures all decision branches and dependencies are resolved early.
- **Deep Module Design**: Before writing the PRD, the AI sketches out major modules, actively looking for "deep modules" (simple interfaces, complex internals) that are highly testable.
- **Template-Driven Output**: Finally, it outputs the PRD using a strict template (Problem, Solution, User Stories, Implementation Decisions, Testing Decisions, Out of Scope) and submits it as a GitHub issue.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Actively requires codebase exploration and deep module design before drafting requirements. Separates implementation decisions from testing decisions, aligning with standard software engineering practices.
- **Potential Limitations**: The assertive interview approach might be inefficient for users who already have well-defined requirements. Automatically formatting the output for a GitHub issue may not suit teams using other project management tools.
- **What Makes a Good Skill**: It restricts the inclusion of specific file paths or code snippets in the PRD to prevent the documentation from quickly becoming outdated, demonstrating practical engineering awareness.
