// Matterforma Design System - Tailwind Configuration
// Dark Spectral Color System v1.0

const { semanticColors } = require('../tokens/colors');

module.exports = {
  darkMode: ['class', '[data-theme="mf-dark"]'],
  theme: {
    extend: {
      colors: {
        // Backgrounds & Surfaces
        bg: {
          page: semanticColors.bg.page,
          surface1: semanticColors.bg.surface1,
          surface2: semanticColors.bg.surface2,
          elevated: semanticColors.bg.elevated,
          hover: semanticColors.bg.hover,
          selected: semanticColors.bg.selected,
          scrim: semanticColors.bg.scrim,
        },
        
        // Text
        text: {
          primary: semanticColors.text.primary,
          secondary: semanticColors.text.secondary,
          tertiary: semanticColors.text.tertiary,
          disabled: semanticColors.text.disabled,
          onAccent: semanticColors.text.onAccent,
        },
        
        // Borders & Dividers
        border: {
          subtle: semanticColors.border.subtle,
          DEFAULT: semanticColors.border.default,
          strong: semanticColors.border.strong,
          accent: semanticColors.border.accent,
        },
        
        // Brand & Accents
        accent: {
          brand: semanticColors.accent.brand,
          brandHover: semanticColors.accent.brandHover,
          success: semanticColors.accent.success,
          successWeak: semanticColors.accent.successWeak,
          info: semanticColors.accent.info,
          infoWeak: semanticColors.accent.infoWeak,
          warning: semanticColors.accent.warning,
          warningWeak: semanticColors.accent.warningWeak,
          danger: semanticColors.accent.danger,
          dangerWeak: semanticColors.accent.dangerWeak,
        },
        
        // Focus & Selection
        focus: {
          ring: semanticColors.focus.ring,
          inner: semanticColors.focus.inner,
          selection: semanticColors.focus.selection,
        },
        
        // Data Visualization
        chart: {
          1: semanticColors.chart[1],
          2: semanticColors.chart[2],
          3: semanticColors.chart[3],
          4: semanticColors.chart[4],
          5: semanticColors.chart[5],
          6: semanticColors.chart[6],
          7: semanticColors.chart[7],
          8: semanticColors.chart[8],
        },
        
        // Legacy color mappings for backward compatibility
        violet: {
          700: semanticColors.accent.brand,
          500: semanticColors.accent.brandHover,
        },
        teal: {
          600: semanticColors.accent.success,
          400: semanticColors.accent.successWeak,
        },
        indigo: {
          600: semanticColors.accent.info,
          400: semanticColors.accent.infoWeak,
        },
        amber: {
          500: semanticColors.accent.warning,
          400: semanticColors.accent.warningWeak,
        },
        rose: {
          600: semanticColors.accent.danger,
          500: semanticColors.accent.dangerWeak,
        },
      },
      
      // Ring colors for focus states
      ringColor: {
        DEFAULT: semanticColors.focus.ring,
      },
      
      // Outline colors for focus states
      outlineColor: {
        DEFAULT: semanticColors.focus.ring,
      },
      
      // Background opacity utilities
      backgroundColor: {
        'alpha-white-08': 'rgba(255,255,255,.08)',
        'alpha-white-12': 'rgba(255,255,255,.12)',
        'alpha-white-16': 'rgba(255,255,255,.16)',
        'alpha-black-20': 'rgba(0,0,0,.20)',
        'alpha-violet-24': 'rgba(157,108,255,.24)',
        'alpha-teal-24': 'rgba(47,200,154,.24)',
      },
      
      // Border opacity utilities
      borderColor: {
        'alpha-white-08': 'rgba(255,255,255,.08)',
        'alpha-white-12': 'rgba(255,255,255,.12)',
        'alpha-white-16': 'rgba(255,255,255,.16)',
      },
      
      // Text opacity utilities
      textColor: {
        'alpha-white-08': 'rgba(255,255,255,.08)',
        'alpha-white-12': 'rgba(255,255,255,.12)',
        'alpha-white-16': 'rgba(255,255,255,.16)',
      },
    },
  },
  plugins: [
    // Custom plugin for semantic color utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.bg-surface-1': {
          backgroundColor: theme('colors.bg.surface1'),
        },
        '.bg-surface-2': {
          backgroundColor: theme('colors.bg.surface2'),
        },
        '.bg-elevated': {
          backgroundColor: theme('colors.bg.elevated'),
        },
        '.text-primary': {
          color: theme('colors.text.primary'),
        },
        '.text-secondary': {
          color: theme('colors.text.secondary'),
        },
        '.text-tertiary': {
          color: theme('colors.text.tertiary'),
        },
        '.border-subtle': {
          borderColor: theme('colors.border.subtle'),
        },
        '.border-strong': {
          borderColor: theme('colors.border.strong'),
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
