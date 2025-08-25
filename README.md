# Matterforma Design System

A comprehensive, production-ready design system for the Matterforma platform suite. This system provides consistent design tokens, components, and guidelines across all Matterforma products.

## 🚀 **Railway Deployment Trigger - Design System Complete**

The **Matterforma Design System** is now fully implemented across all repositories:
- **mf-web**: Marketing website with new violet theme
- **mf-platform**: All apps using unified design system  
- **mf-manager**: Admin tools with consistent design
- **Design System**: Centralized design tokens and components

## 🎨 **Color System**

**Dark Spectral Color System v1.0** - A comprehensive, production-ready color specification for a dark, high-contrast (but non-harsh) UI that uses white/gray for text by default and reserves hue for emphasis, interactivity, and signals.

### Core Principles

1. **Dark-first**: Interface sits on a violet-inflected graphite base, not pure black
2. **Text-first legibility**: Body and headings use white → light-gray only
3. **Muted saturation**: Buttons are never neon; all accents are spectral and controlled
4. **Semantic tokens > raw hex**: Design with semantic tokens for safe propagation
5. **WCAG-aware**: Minimum 4.5:1 contrast for body text; 3:1 for large headings

## 🚀 **Quick Start**

```bash
npm install @matterforma/design-system
```

## 📚 **Documentation**

- [Color System](./docs/color-system.md)
- [Component Library](./docs/components.md)
- [Design Tokens](./docs/tokens.md)
- [Implementation Guide](./docs/implementation.md)

## 🏗️ **Repository Structure**

```
mf-design-system/
├── packages/
│   ├── tokens/              # Design tokens (colors, spacing, typography)
│   ├── components/          # Reusable UI components
│   └── tailwind/           # Tailwind configurations
├── docs/                    # Documentation
├── examples/                # Implementation examples
└── dist/                    # Built packages
```

## 🔗 **Products Using This System**

- **mf-web**: Marketing website
- **mf-platform**: Main platform (Formatr, Vault, Pulse, Immunity)
- **mf-manager**: Admin tools

## 📝 **License**

MIT License - see [LICENSE](./LICENSE) for details

---

**The Matterforma platform now has a world-class, professional design system that will scale with your growth and provide a consistent, sophisticated user experience across all products!** 🎨✨
