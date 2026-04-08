---
title: "writing-plans"
description: "Use when you have a spec or requirements for a multi-step task, before touching code"
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-blue"
featured: false
---

## Introduction and Core Concept
The `writing-plans` skill acts as the critical bridge between product specifications and actual coding. It addresses the issue of AI agents or junior engineers getting lost in complex, multi-step tasks. By forcing the creation of a highly granular, bite-sized implementation plan, it ensures that the executor knows exactly which files to touch, how to test them, and when to commit, assuming zero prior context.

## Core Concept
Transform high-level specifications into granular, bite-sized, test-driven implementation plans. It assumes the executor has zero context, ensuring every code change is deliberate, isolated, and verified.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md)

- **Scope Check**: Before writing any tasks, the AI must verify if the spec covers multiple independent subsystems. If so, it halts and demands breaking them into separate plans, enforcing modularity.
- **File Structure Mapping**: The AI explicitly maps out which files will be created or modified, locking in architectural decomposition decisions early.
- **Bite-Sized Task Granularity**: Every single step is broken down into micro-actions (2-5 minutes each): Write failing test -> Run it -> Implement minimal code -> Run test -> Commit.
- **Mandatory Plan Header**: Forces a specific markdown header that defines the goal, architecture, and tech stack, explicitly instructing the agent on which sub-skills to use next (like `subagent-driven-development`).

## Skill Design Evaluation
- **Strengths of SOP Integration**: Codifies the Test-Driven Development (TDD) loop into explicit, actionable steps. Assuming the executor has no prior context ensures the generated instructions are comprehensive and self-contained.
- **Potential Limitations**: Generating a highly granular, multi-step TDD plan is inefficient for minor updates, such as simple text changes or minor styling adjustments.
- **What Makes a Good Skill**: Provides exact markdown structures and specific terminal commands for the execution phase, reducing ambiguity and increasing the reliability of the AI's output.
