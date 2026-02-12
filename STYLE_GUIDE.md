# Matterforma Design System v2 Style Guide

## Brand Voice Through Type
- Calm, deterministic, infrastructure-grade.
- Typography communicates semantic meaning, not decoration.

## Font Families
- `Inter`: interface, body, product communication.
- `Source Serif 4`: conceptual MATTER narrative and category framing.
- `Inconsolata`: technical notation, identifiers, code-like labels.

## Semantic Rules
- `mfds-type-sans`: default for UI and long-form readability.
- `mfds-type-matter`: use for conceptual headings and substrate context.
- `mfds-type-mono`: use for DSL terms, tags, IDs, policy keys, metrics labels.

Never:
- use mono for paragraph body.
- use serif for utility chrome or dense technical UI.
- mix all three families in one small component.

## Hierarchy
- `mfds-display`: hero/category-defining title.
- `mfds-h1`: top-level page heading.
- `mfds-h2`: major section heading.
- `mfds-h3`: subsection heading.
- `mfds-h4`: card/module title.
- `mfds-lead`: intro paragraph.
- `mfds-body`: default paragraph.
- `mfds-meta`: technical labels and micro metadata.

## Modes
- `mfds-mode-public`: light narrative mode for brand/marketing.
- `mfds-mode-console`: dark operational mode for product/console.

Both modes share the same spacing, radii, and typography scales.

## Core Primitives
- Layout: `mfds-container`, `mfds-section`, `mfds-section-hero`, `mfds-divider`.
- Surfaces: `mfds-surface`, `mfds-surface-muted`.
- Controls: `mfds-btn`, `mfds-btn-primary`, `mfds-btn-secondary`, `mfds-btn-accent`.
- Forms: `mfds-input`, `mfds-select`, `mfds-textarea`.
- Data display: `mfds-kpi`, `mfds-kpi-label`, `mfds-kpi-value`.

## Visual System Primitives
- Technical diagrams:
  - `mfds-diagram`
  - `mfds-diagram-grid`
  - `mfds-diagram-node`
  - `mfds-diagram-caption`
- Material hero atmosphere:
  - `mfds-material-hero`
  - `mfds-material-grain`
- Product proof cards:
  - `mfds-proof-grid`
  - `mfds-proof-card`
  - `mfds-proof-card-dark`
  - `mfds-proof-label`
  - `mfds-proof-value`
  - `mfds-proof-highlight`
- Editorial feature pattern:
  - `mfds-editorial-feature`
  - `mfds-editorial-layout`
  - `mfds-editorial-media`

## Visual Usage Rules
- Use one signature visual pattern per section; do not stack all visual systems at once.
- Diagrams are monochrome or near-monochrome and always use mono labels.
- Material atmosphere is subtle and should never overpower body text contrast.
- Proof cards must represent real platform states (run, signal, policy, diff).
- Editorial blocks use one documentary image maximum; avoid collages.
- Keep imagery functional: explain, prove, or orient. Never decorative-only.

## Accessibility
- Maintain WCAG AA contrast minimum for all body/UI text.
- Ensure all interactive controls retain visible focus states.
- Do not encode meaning by color alone.

## Adoption Strategy
1. Normalize homepage to `mfds-*` classes first.
2. Expand to public platform pages.
3. Apply console mode with shared primitives.
4. Promote stable page patterns into DS components.
