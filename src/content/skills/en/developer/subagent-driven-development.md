---
title: "subagent-driven-development"
description: "Use when executing implementation plans with independent tasks in the current session"
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-purple"
featured: false
---

## Introduction
The `subagent-driven-development` skill offers a framework for executing complex implementation plans by delegating individual tasks to specialized, context-isolated AI subagents. It addresses the common issue of AI "context pollution," where long, single-session chats cause the model to lose focus, forget constraints, or become confused by previous mistakes.

## Core Concept
"Fresh subagent per task + two-stage review." By creating a clean, isolated environment for each specific step and mandating rigorous reviews (spec compliance, then code quality), it ensures high-quality code and faster iteration.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)

- **Evaluate task independence**: Uses a decision tree to verify if the plan's tasks are sufficiently independent to be split among subagents. Tightly coupled tasks are diverted to manual execution.
- **Dispatch implementer**: A fresh subagent is given only the specific context required for one task. It implements, tests, commits, and self-reviews.
- **Two-stage review**: The skill forces a "Spec reviewer" to verify if the code matches the requirements. Only if it passes does a "Code quality reviewer" check the architecture and style.
- **Model selection**: Explicitly instructs the user to match the AI model size to the task's complexity (e.g., using cheaper, faster models for mechanical tasks and advanced models for architecture reviews).

## Skill Design Evaluation
- **Strengths of SOP Integration**: Introduces a robust two-stage review process (spec compliance followed by code quality) for every task. Uses DOT graphs to visually and logically map out the exact decision tree for when and how to dispatch subagents.
- **Potential Limitations**: Managing multiple subagents and a strict two-stage review for every task can be overly complex and slow down the development of tightly coupled features.
- **What Makes a Good Skill**: It incorporates cost and speed optimizations by explicitly directing the user to select the least powerful AI model capable of handling specific mechanical tasks, reserving advanced models only for architecture and review.