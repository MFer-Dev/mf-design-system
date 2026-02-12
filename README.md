# Matterforma Design System

Single source of truth for Matterforma UI across public web, product surfaces, and back-office/admin tools.

## What this repository is
This repository now contains the V2 design system package and replaces the previous V1 implementation.

It is a CSS-first package with:
- design tokens
- semantic typography
- layout primitives
- component primitives
- mode theming

## Package
- npm package: `@matterforma/design-system`
- current major: `2.x`

## Core contract for all surfaces
Every consuming app should:
1. Install the package from npm/GitHub package registry.
2. Import `@matterforma/design-system` once in app-global styles.
3. Apply `mfds-root` plus the correct mode class at app shell/root.

Example:

```css
@import "@matterforma/design-system";
```

```html
<body class="mfds-root mfds-mode-public">
```

or

```html
<div class="mfds-root mfds-mode-console">
```

## Modes
- `mfds-mode-public`: public-facing, narrative surfaces
- `mfds-mode-console`: private/product/operational surfaces

## Exports
- `@matterforma/design-system` -> `src/index.css`
- `@matterforma/design-system/tokens`
- `@matterforma/design-system/typography`
- `@matterforma/design-system/primitives`
- `@matterforma/design-system/components`
- `@matterforma/design-system/modes`

## Propagation model
Design-system updates propagate to all surfaces when consumers upgrade the package version.

Recommended release workflow:
1. Merge DS changes in this repo.
2. Publish new semver version.
3. Bump package version in each surface repo.
4. Validate visual regression and deploy.

## Local validation
```bash
npm run check
npm run pack:check
```

## Files
- `src/tokens.css`
- `src/modes.css`
- `src/typography.css`
- `src/primitives.css`
- `src/components.css`
- `src/index.css`
- `STYLE_GUIDE.md`
