---
title: "brainstorming"
description: "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. Explores user intent, requirements and design before implementation."
author: "obra"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-blue"
featured: false
---

## Introduction and Core Concept
The `brainstorming` skill is designed to act as a mandatory precursor to any creative implementation work. It solves the common pitfall of "unexamined assumptions causing wasted work," especially in seemingly simple projects. The core goal is to force a structured, collaborative dialogue that transforms vague ideas into fully formed designs and specifications before a single line of code is written.

## Core Concept
Always design before implementing. By exploring context, asking clarifying questions, and writing a formal specification, this skill prevents wasted effort and ensures alignment between user intent and the final architecture.

## Installation and Usage Guide
https://github.com/obra/superpowers

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md)

- **Explore project context**: The AI is forced to check existing files, docs, and commits before doing anything else, ensuring the design fits the current architecture.
- **Offer visual companion**: For UI/UX tasks, it explicitly asks if visual mockups are needed, separating visual and conceptual thinking.
- **Ask clarifying questions**: Limits the AI to asking one question at a time to prevent overwhelming the user and to deeply understand constraints.
- **Propose multiple approaches**: Requires presenting 2-3 different solutions with trade-offs, preventing tunnel vision on the first available idea.
- **Present design and get approval**: Breaks the design into manageable sections and mandates explicit user approval before proceeding.
- **Write and review spec**: Forces the creation of a formal markdown specification document and an internal "self-review" for placeholders or ambiguities.
- **Transition to implementation**: Strictly dictates that the terminal state is invoking a planning skill (`writing-plans`), creating a hard gate against premature coding.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Enforces a strict order of operations before implementation. The inclusion of a formal "Spec self-review" step ensures the AI validates its own output for placeholders and ambiguities before requesting user feedback.
- **Potential Limitations**: The strict "one question at a time" constraint may increase interaction time. Mandating a full markdown specification document can be unnecessary for minor tasks.
- **What Makes a Good Skill**: It clearly defines anti-patterns (what not to do) and establishes a deterministic state machine for the interaction, effectively restricting premature code generation.
