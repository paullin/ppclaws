---
title: "analytics-tracking"
description: "When the user wants to set up, improve, or audit analytics tracking and measurement."
author: "coreyhaines31"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-blue"
featured: false
---

## Introduction and Core Concept
The `analytics-tracking` skill transforms the AI into an expert analytics implementation consultant. It addresses the common issue of teams drowning in meaningless data ("vanity metrics") by enforcing a strategic, decision-first approach to event tracking and measurement before any tags or analytics scripts are implemented.

## Core Concept
Track for decisions, not just for data. By working backward from business questions and enforcing strict naming conventions, this skill ensures that every tracked event provides actionable insights.

## Installation and Usage Guide
https://github.com/coreyhaines31/marketingskills

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/coreyhaines31/marketingskills/blob/main/skills/analytics-tracking/SKILL.md)

- **Initial Context Assessment**: The AI checks for existing marketing context to avoid redundant questions, then evaluates the business context (what decisions need informing), current state of tracking, and technical/privacy constraints.
- **Decision-Driven Tracking**: Enforces the principle of "Start with the Questions." The AI works backwards from what actions the user will take based on the data, filtering out useless metrics.
- **Tracking Plan Framework Generation**: The AI must output a structured tracking plan table (Event Name | Category | Properties | Trigger | Notes) before writing implementation code.
- **Naming Convention Enforcement**: Mandates a strict `Object-Action` naming format (e.g., `signup_completed` instead of `Clicked Sign Up`) in lowercase with underscores, ensuring database cleanliness.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Focuses on decision-driven tracking by working backward from business questions. Enforces strict event naming conventions (Object-Action format) to maintain data consistency.
- **Potential Limitations**: The rigid adherence to the Object-Action naming format might conflict with existing data schemas in organizations that use different conventions.
- **What Makes a Good Skill**: Prioritizes data quality over quantity by explicitly directing the AI to include context in event properties rather than creating overly specific event names.
