---
title: "ab-test-setup"
description: "When the user wants to plan, design, or implement an A/B test or experiment, or build a growth experimentation program."
author: "coreyhaines31"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-blue"
featured: false
---

## Introduction and Core Concept
The `ab-test-setup` skill transforms the AI into an expert growth and experimentation consultant. It prevents the common pitfall of "let's just see what happens" testing by enforcing strict statistical rigor, clear hypothesis structures, and proper sample size calculations before any A/B test is launched.

## Core Concept
Ensure statistical validity and actionable results by enforcing structured hypotheses, single-variable testing, and pre-determined sample sizes before launching any A/B experiment.

## Installation and Usage Guide
https://github.com/coreyhaines31/marketingskills

## Workflow Analysis (SOP)
[Read original SKILL.md](https://github.com/coreyhaines31/marketingskills/blob/main/skills/ab-test-setup/SKILL.md)

- **Context Assessment**: The AI first checks for existing product marketing context (e.g., `.agents/product-marketing-context.md`) to avoid asking redundant questions, then evaluates the test context, current baseline, and technical constraints.
- **Hypothesis Framing**: Enforces a strict MAD-libs style framework: "Because [data], we believe [change] will cause [outcome] for [audience]." This prevents weak, non-falsifiable ideas.
- **Statistical Rigor Check**: Forces the user to pre-determine sample sizes based on expected lift (providing a quick-reference chart) to prevent the "peeking and stopping early" anti-pattern.
- **Metrics Selection**: Categorizes metrics into Primary (business value), Secondary (context), and Guardrail (prevent harm) to ensure holistic measurement.

## Skill Design Evaluation
- **Strengths of SOP Integration**: Incorporates specific statistical reference charts and a structured hypothesis template. Categorizes metrics into primary, secondary, and guardrail metrics to ensure balanced measurement.
- **Potential Limitations**: The strict sample size requirements based on standard statistical significance may not be practical for early-stage products with low traffic volumes.
- **What Makes a Good Skill**: Embeds domain-specific methodologies (like single-variable testing and pre-determined sample sizes) directly into the prompt, preventing fundamentally flawed test designs.
