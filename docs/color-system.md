# Matterforma Color System

## Overview

The Matterforma Design System uses a **Dark Spectral Color System v1.0** - a comprehensive, production-ready color specification for a dark, high-contrast (but non-harsh) UI that uses white/gray for text by default and reserves hue for emphasis, interactivity, and signals.

## Core Principles

1. **Dark-first**: Interface sits on a violet-inflected graphite base, not pure black
2. **Text-first legibility**: Body and headings use white → light-gray only
3. **Muted saturation**: Buttons are never neon; all accents are spectral and controlled
4. **Semantic tokens > raw hex**: Design with semantic tokens for safe propagation
5. **WCAG-aware**: Minimum 4.5:1 contrast for body text; 3:1 for large headings

## Color Palette

### Base Palette (Primitives)

#### Graphite Violet (dark scale)
- `graphite-1000`: `#0E0B12`
- `graphite-950`: `#140F1B`
- `graphite-900`: `#1A1523` ← **default page background**
- `graphite-850`: `#1F182A`
- `graphite-800`: `#221B2E` ← **surface-1**
- `graphite-750`: `#261E33`
- `graphite-700`: `#2B2239` ← **surface-2**
- `graphite-600`: `#342A45` ← **subtle borders / dividers**
- `graphite-500`: `#413455` ← **medium borders**
- `graphite-400`: `#4E4064` ← **strong borders**

#### Grays - Text & UI chrome
- `white-1000`: `#F5F5F7` ← **primary text**
- `gray-200`: `#E7E7EA`
- `gray-300`: `#C8C8CC` ← **secondary text**
- `gray-400`: `#A9A9B0`
- `gray-500`: `#7A7A82` ← **disabled text**
- `gray-600`: `#5A5A62`

### Spectral Accents (muted)

#### Violet (brand)
- `violet-700`: `#6E3CBC` ← brand base
- `violet-600`: `#7E52CF`
- `violet-500`: `#9D6CFF` ← hover/active highlight
- `violet-400`: `#B99CFF`

#### Teal (diagnostics/success)
- `teal-700`: `#0B7A5A`
- `teal-600`: `#00A676` ← success base
- `teal-500`: `#2FC89A`
- `teal-400`: `#4FE0B0`

#### Indigo (info/storage)
- `indigo-700`: `#1D4FBF`
- `indigo-600`: `#2C6FFF` ← info base
- `indigo-500`: `#5C8DFF`
- `indigo-400`: `#7DA9FF`

#### Amber (warning)
- `amber-700`: `#996A2E`
- `amber-600`: `#D7943A`
- `amber-500`: `#FFB347` ← warning base (muted)
- `amber-400`: `#FFD580`

#### Rose (error), muted
- `rose-700`: `#8F3944`
- `rose-600`: `#C65B6A` ← error base (muted)
- `rose-500`: `#E59AA6`
- `rose-400`: `#F2C1C8`

## Semantic Color Tokens

### Backgrounds & Surfaces
- `--mf-bg-page`: `graphite-900`
- `--mf-bg-surface-1`: `graphite-800` (panels, cards, drawers)
- `--mf-bg-surface-2`: `graphite-700` (nested panels, editor gutters)
- `--mf-bg-elevated`: `graphite-700` + `alpha-white-08` overlay
- `--mf-bg-hover`: `alpha-white-08` on current surface
- `--mf-bg-selected`: `alpha-white-12` on current surface
- `--mf-bg-scrim`: `alpha-black-20`

### Text
- `--mf-text-primary`: `white-1000`
- `--mf-text-secondary`: `gray-300`
- `--mf-text-tertiary`: `gray-400`
- `--mf-text-disabled`: `gray-500`
- `--mf-text-on-accent`: `#0E0B12` (dark text for light accent chips)

### Brand & Accents
- `--mf-accent-brand`: `violet-700`
- `--mf-accent-brand-hover`: `violet-500`
- `--mf-accent-success`: `teal-600`
- `--mf-accent-success-weak`: `teal-400`
- `--mf-accent-info`: `indigo-600`
- `--mf-accent-info-weak`: `indigo-400`
- `--mf-accent-warning`: `amber-500`
- `--mf-accent-warning-weak`: `amber-400`
- `--mf-accent-danger`: `rose-600`
- `--mf-accent-danger-weak`: `rose-500`

## Usage Guidelines

### Do's
- Keep copy and headings in white/gray; use hue only for emphasis or state
- Prefer subtle tints for surfaces and badges over solid bright fills
- Use borders + slight luminance steps for separation instead of high-contrast blocks

### Don'ts
- Don't use neon or 100% saturated colors for buttons or alerts
- Don't rely on color alone to convey state
- Don't place colored text on tinted surfaces unless contrast is verified

## Accessibility

- Body text on any surface must meet **4.5:1**
- If tinted surfaces drop contrast, switch text to `white-1000` and increase border to `--mf-border-strong`
- Avoid color-only communication: pair icons/shapes with color for alerts and status
- Hover states must also include non-color cues (underline, weight, or subtle elevation)
