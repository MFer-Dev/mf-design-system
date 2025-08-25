# Matterforma Design System - Implementation Guide

## Quick Start

### 1. Install the Design System

```bash
npm install @matterforma/design-system
```

### 2. Import CSS Variables

```css
@import '@matterforma/design-system/tokens/css-variables.css';
```

### 3. Set Theme Attribute

```html
<html data-theme="mf-dark">
  <!-- Your content -->
</html>
```

## Tailwind CSS Integration

### 1. Extend Your Tailwind Config

```js
// tailwind.config.js
const mfDesignSystem = require('@matterforma/design-system/tailwind/mf-dark.config');

module.exports = {
  ...mfDesignSystem,
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // Your other config...
};
```

### 2. Use Semantic Classes

```jsx
// Backgrounds
<div className="bg-page">Page background</div>
<div className="bg-surface-1">Surface 1</div>
<div className="bg-surface-2">Surface 2</div>

// Text
<h1 className="text-primary">Primary text</h1>
<p className="text-secondary">Secondary text</p>
<span className="text-tertiary">Tertiary text</span>

// Borders
<div className="border border-subtle">Subtle border</div>
<div className="border border-strong">Strong border</div>

// Accents
<button className="bg-accent-brand text-onAccent">Brand button</button>
<button className="bg-accent-success text-onAccent">Success button</button>
```

## CSS Variables Usage

### 1. Direct CSS Variable Usage

```css
.my-component {
  background-color: var(--mf-bg-surface-1);
  color: var(--mf-text-primary);
  border: 1px solid var(--mf-border);
}

.my-button {
  background-color: var(--mf-accent-brand);
  color: var(--mf-text-on-accent);
}

.my-button:hover {
  background-color: var(--mf-accent-brand-hover);
}
```

### 2. CSS Custom Properties with Fallbacks

```css
.my-component {
  background-color: var(--mf-bg-surface-1, #221B2E);
  color: var(--mf-text-primary, #F5F5F7);
}
```

## React Component Usage

### 1. Import Design Tokens

```jsx
import { semanticColors } from '@matterforma/design-system';

function MyButton({ variant = 'brand', children }) {
  const buttonStyles = {
    backgroundColor: semanticColors.accent[variant],
    color: semanticColors.text.onAccent,
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyles}>
      {children}
    </button>
  );
}
```

### 2. Styled Components

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--mf-accent-brand);
  color: var(--mf-text-on-accent);
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: var(--mf-accent-brand-hover);
  }
`;
```

## Component Examples

### Button Components

```jsx
// Primary Button
<button className="bg-accent-brand text-onAccent px-6 py-3 rounded-lg hover:bg-accent-brandHover transition-colors">
  Primary Action
</button>

// Secondary Button
<button className="bg-surface-1 text-primary border border-default px-6 py-3 rounded-lg hover:bg-hover transition-colors">
  Secondary Action
</button>

// Ghost Button
<button className="bg-transparent text-primary border border-subtle px-6 py-3 rounded-lg hover:bg-hover transition-colors">
  Ghost Action
</button>
```

### Card Components

```jsx
<div className="bg-surface-1 border border-default rounded-xl p-6">
  <h3 className="text-primary text-xl font-semibold mb-4">Card Title</h3>
  <p className="text-secondary mb-4">Card content goes here...</p>
  <button className="bg-accent-brand text-onAccent px-4 py-2 rounded-lg">
    Action
  </button>
</div>
```

### Form Components

```jsx
<div className="space-y-4">
  <div>
    <label className="block text-primary text-sm font-medium mb-2">
      Email Address
    </label>
    <input
      type="email"
      className="w-full bg-surface-2 text-primary border border-default rounded-lg px-4 py-3 focus:ring-2 focus:ring-focus-ring focus:border-accent"
      placeholder="Enter your email"
    />
  </div>
  
  <button className="w-full bg-accent-brand text-onAccent py-3 rounded-lg font-medium hover:bg-accent-brandHover transition-colors">
    Submit
  </button>
</div>
```

## Migration from Old Colors

### Color Mapping

| Old Color | New Semantic Token |
|-----------|-------------------|
| `#10b981` | `accent-success` |
| `#059669` | `accent-success` (hover) |
| `#000000` | `bg-page` |
| `#ffffff` | `text-primary` |

### Example Migration

```jsx
// Before
<button className="bg-[#10b981] text-black">
  Get Started
</button>

// After
<button className="bg-accent-success text-onAccent">
  Get Started
</button>
```

## Best Practices

### 1. Use Semantic Tokens
- ✅ Use `bg-surface-1` instead of `bg-[#221B2E]`
- ❌ Don't use raw hex values

### 2. Maintain Contrast
- Always ensure text meets 4.5:1 contrast ratio
- Use `text-onAccent` for text on colored backgrounds

### 3. Consistent Spacing
- Use the 8px base spacing scale
- Prefer semantic spacing classes

### 4. State Management
- Use hover states consistently
- Include non-color cues for accessibility

## Troubleshooting

### Common Issues

1. **Colors not applying**: Ensure `data-theme="mf-dark"` is set on `<html>`
2. **Tailwind classes not working**: Check that the design system config is properly extended
3. **CSS variables undefined**: Verify the CSS variables file is imported

### Debug Mode

Add this to your CSS to see all available variables:

```css
.debug-variables::before {
  content: "Available variables: " attr(data-variables);
  position: fixed;
  top: 0;
  left: 0;
  background: var(--mf-bg-surface-1);
  color: var(--mf-text-primary);
  padding: 8px;
  z-index: 9999;
}
```
