---
title: "frontend-design"
description: "当用户需要将 UI/UX 设计直接转化为前端代码（如 React、Vue 或纯 HTML/CSS）时使用。"
author: "nextlevelbuilder"
date: "2026-04-06 12:00"
tags: []
cover_theme: "dark-green"
featured: false
---

## 简介
此技能充当虚拟的高级产品设计师。它通过在生成任何原型或代码之前建立严格的设计启发式原则和结构指南，系统性地弥合了原始想法与经过打磨的、用户友好的界面之间的差距。

## 核心理念
强制执行视觉层次、一致性和无障碍设计。通过将设计视为结构化的解决问题学科，而非纯粹的艺术，它保证了输出的内容既具有美感又功能强大。

## 安装与调用指南
https://github.com/anthropics/claude-code

## 工作流程解析 (SOP)
[阅读原始 SKILL.md](https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md)

- **需求收集**：始终从确立核心用户目标、目标受众和平台限制开始。
- **结构基础**：要求在渲染单个组件之前，先建立网格系统、排版比例和调色板。
- **迭代细化**：使用渐进式披露来验证布局，从低保真结构过渡到高保真润色。

## 技能设计评价
- **人类经验 SOP 化的亮点**：将视觉设计原则与前端实现约束紧密结合，确保生成的设计在代码中是实际可构建的。
- **潜在的局限性**：它可能会默认使用某些特定的 UI 框架（如 Tailwind CSS），如果用户项目并未使用该框架，则需要进行仔细的覆盖设置。
- **优质技能的评判标准**：严格禁止在实现过程中使用占位符（如“lorem ipsum”）数据，迫使 AI 生成逼真的组件状态和边缘情况。
