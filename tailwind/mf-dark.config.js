// Matterforma Design System - Tailwind Configuration
// Enhanced Dark Spectral Color System v2.0 with Railway-style State Strategy

const { semanticColors } = require('../dist/tokens/colors');

const grayscaleScale = (base, hover, weak) => ({
  50: semanticColors.bg.hover,
  100: semanticColors.bg.selected,
  200: semanticColors.border.subtle,
  300: weak,
  400: weak,
  500: base,
  600: base,
  700: hover,
  800: hover,
  900: hover,
});

module.exports = {
  darkMode: ['class', '[data-theme="mf-dark"]'],
  theme: {
    extend: {
      colors: {
        // Railway-style semantic backgrounds (container strategy)
        background: semanticColors.bg.background,           // Main page background
        secondaryBg: semanticColors.bg.secondaryBg,         // Primary containers
        tertiaryBg: semanticColors.bg.tertiaryBg,           // Nested panels
        gray: {
          50: semanticColors.bg.hover,                      // Hover states
          100: semanticColors.bg.hover,                     // Hover backgrounds
          200: semanticColors.border.gray100,               // Hover borders
          600: semanticColors.text.muted,                   // Muted text
        },
        
        // Railway-style semantic text
        foreground: semanticColors.text.primary,            // Main text
        muted: semanticColors.text.muted,                   // Secondary text
        
        // Railway-style semantic borders
        pink: {
          400: semanticColors.border.pink400,               // Focus borders
          700: semanticColors.accent.pink700,               // Focus rings
        },
        
        // Backgrounds & Surfaces (existing)
        bg: {
          page: semanticColors.bg.page,
          surface1: semanticColors.bg.surface1,
          surface2: semanticColors.bg.surface2,
          surface3: semanticColors.bg.surface3,
          elevated: semanticColors.bg.elevated,
          hover: semanticColors.bg.hover,
          selected: semanticColors.bg.selected,
          active: semanticColors.bg.active,
          focus: semanticColors.bg.focus,
          scrim: semanticColors.bg.scrim,
          strongScrim: semanticColors.bg.strongScrim,
        },
        
        // Text (existing)
        text: {
          primary: semanticColors.text.primary,
          secondary: semanticColors.text.secondary,
          tertiary: semanticColors.text.tertiary,
          quaternary: semanticColors.text.quaternary,
          disabled: semanticColors.text.disabled,
          onAccent: semanticColors.text.onAccent,
          inverse: semanticColors.text.inverse,
          success: semanticColors.text.success,
          muted: semanticColors.text.muted,
        },
        
        // Borders & Dividers (existing)
        border: {
          subtle: semanticColors.border.subtle,
          DEFAULT: semanticColors.border.default,
          strong: semanticColors.border.strong,
          accent: semanticColors.border.accent,
          focus: semanticColors.border.focus,
          success: semanticColors.border.success,
          warning: semanticColors.border.warning,
          error: semanticColors.border.error,
          gray100: semanticColors.border.gray100,
          pink400: semanticColors.border.pink400,
        },
        
        // Brand & Accents (existing)
        accent: {
          brand: semanticColors.accent.brand,
          brandHover: semanticColors.accent.brandHover,
          brandActive: semanticColors.accent.brandActive,
          brandLight: semanticColors.accent.brandLight,
          brandDark: semanticColors.accent.brandDark,
          success: semanticColors.accent.success,
          successHover: semanticColors.accent.successHover,
          successWeak: semanticColors.accent.successWeak,
          info: semanticColors.accent.info,
          infoHover: semanticColors.accent.infoHover,
          infoWeak: semanticColors.accent.infoWeak,
          warning: semanticColors.accent.warning,
          warningHover: semanticColors.accent.warningHover,
          warningWeak: semanticColors.accent.warningWeak,
          danger: semanticColors.accent.danger,
          dangerHover: semanticColors.accent.dangerHover,
          dangerWeak: semanticColors.accent.dangerWeak,
          pink700: semanticColors.accent.pink700,
        },

        // Neutralized Tailwind palette overrides (GitHub-style grayscale)
        blue: grayscaleScale(
          semanticColors.accent.info,
          semanticColors.accent.infoHover,
          semanticColors.accent.infoWeak
        ),
        green: grayscaleScale(
          semanticColors.accent.success,
          semanticColors.accent.successHover,
          semanticColors.accent.successWeak
        ),
        red: grayscaleScale(
          semanticColors.accent.danger,
          semanticColors.accent.dangerHover,
          semanticColors.accent.dangerWeak
        ),
        yellow: grayscaleScale(
          semanticColors.accent.warning,
          semanticColors.accent.warningHover,
          semanticColors.accent.warningWeak
        ),
        orange: grayscaleScale(
          semanticColors.accent.warning,
          semanticColors.accent.warningHover,
          semanticColors.accent.warningWeak
        ),
        purple: grayscaleScale(
          semanticColors.accent.brand,
          semanticColors.accent.brandHover,
          semanticColors.accent.brandLight
        ),
        
        // Focus & Selection (existing)
        focus: {
          ring: semanticColors.focus.ring,
          inner: semanticColors.focus.inner,
          selection: semanticColors.focus.selection,
          visible: semanticColors.focus.visible,
        },
        
        // Interactive States (existing)
        interactive: {
          hover: semanticColors.interactive.hover,
          active: semanticColors.interactive.active,
          selected: semanticColors.interactive.selected,
          focus: semanticColors.interactive.focus,
          hoverBg: semanticColors.interactive.hoverBg,
          hoverDark: semanticColors.interactive.hoverDark,
        },
        
        // Data Visualization (existing)
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
          900: semanticColors.accent.brandDark,
          800: semanticColors.accent.brandDark,
          700: semanticColors.accent.brandActive,
          600: semanticColors.accent.brandHover,
          500: semanticColors.accent.brand,
          400: semanticColors.accent.brandLight,
          300: semanticColors.accent.brandLight,
          200: semanticColors.accent.brandLight,
        },
        teal: {
          900: semanticColors.accent.successWeak,
          800: semanticColors.accent.successWeak,
          700: semanticColors.accent.successWeak,
          600: semanticColors.accent.success,
          500: semanticColors.accent.successHover,
          400: semanticColors.accent.successWeak,
          300: semanticColors.accent.successWeak,
        },
        indigo: {
          900: semanticColors.accent.infoWeak,
          800: semanticColors.accent.infoWeak,
          700: semanticColors.accent.infoWeak,
          600: semanticColors.accent.info,
          500: semanticColors.accent.infoHover,
          400: semanticColors.accent.infoWeak,
          300: semanticColors.accent.infoWeak,
        },
        amber: {
          900: semanticColors.accent.warningWeak,
          800: semanticColors.accent.warningWeak,
          700: semanticColors.accent.warningWeak,
          600: semanticColors.accent.warning,
          500: semanticColors.accent.warningHover,
          400: semanticColors.accent.warningWeak,
          300: semanticColors.accent.warningWeak,
        },
        rose: {
          900: semanticColors.accent.dangerWeak,
          800: semanticColors.accent.dangerWeak,
          700: semanticColors.accent.dangerWeak,
          600: semanticColors.accent.danger,
          500: semanticColors.accent.dangerHover,
          400: semanticColors.accent.dangerWeak,
          300: semanticColors.accent.dangerWeak,
        },
      },
      
      // Ring colors for focus states (Railway-style)
      ringColor: {
        DEFAULT: semanticColors.focus.ring,
        success: semanticColors.border.success,
        warning: semanticColors.border.warning,
        error: semanticColors.border.error,
        pink: semanticColors.accent.pink700,                 // Railway focus ring
        gray: semanticColors.border.gray100,                 // Railway gray focus
      },
      
      // Outline colors for focus states
      outlineColor: {
        DEFAULT: semanticColors.focus.ring,
        success: semanticColors.border.success,
        warning: semanticColors.border.warning,
        error: semanticColors.border.error,
      },
      
      // Background opacity utilities
      backgroundColor: {
        'alpha-white-05': 'rgba(255,255,255,.05)',
        'alpha-white-08': 'rgba(255,255,255,.08)',
        'alpha-white-12': 'rgba(255,255,255,.12)',
        'alpha-white-16': 'rgba(255,255,255,.16)',
        'alpha-black-20': 'rgba(0,0,0,.20)',
        'alpha-black-40': 'rgba(0,0,0,.40)',
        'alpha-violet-20': 'rgba(139,92,246,.20)',
        'alpha-violet-30': 'rgba(139,92,246,.30)',
        'alpha-teal-20': 'rgba(16,185,129,.20)',
        'alpha-amber-20': 'rgba(245,158,11,.20)',
        'alpha-rose-20': 'rgba(239,68,68,.20)',
      },
      
      // Border opacity utilities
      borderColor: {
        'alpha-white-05': 'rgba(255,255,255,.05)',
        'alpha-white-08': 'rgba(255,255,255,.08)',
        'alpha-white-12': 'rgba(255,255,255,.12)',
        'alpha-white-16': 'rgba(255,255,255,.16)',
      },
      
      // Text opacity utilities
      textColor: {
        'alpha-white-05': 'rgba(255,255,255,.05)',
        'alpha-white-08': 'rgba(255,255,255,.08)',
        'alpha-white-12': 'rgba(255,255,255,.12)',
        'alpha-white-16': 'rgba(255,255,255,.16)',
      },
      
      // Enhanced spacing and sizing
      spacing: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      
      // Enhanced shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      // Enhanced transitions
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
        '50': '50ms',                                        // Railway-style fast transitions
      },
      
      // Enhanced border radius
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      
      // Railway-style transform scales
      scale: {
        '95': '0.95',                                        // active:scale-95
        '98': '0.98',                                        // subtle scale
      },
    },
  },
  plugins: [
    // Custom plugin for Railway-style semantic utilities and state strategies
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Railway-style semantic backgrounds (container strategy)
        '.bg-background': {
          backgroundColor: theme('colors.background'),
        },
        '.bg-secondaryBg': {
          backgroundColor: theme('colors.secondaryBg'),
        },
        '.bg-tertiaryBg': {
          backgroundColor: theme('colors.tertiaryBg'),
        },
        
        // Railway-style semantic text
        '.text-foreground': {
          color: theme('colors.foreground'),
        },
        '.text-muted': {
          color: theme('colors.muted'),
        },
        
        // Railway-style semantic borders
        '.border-gray-100': {
          borderColor: theme('colors.gray.100'),
        },
        '.border-gray-200': {
          borderColor: theme('colors.gray.200'),
        },
        '.border-pink-400': {
          borderColor: theme('colors.pink.400'),
        },
        
        // Background utilities (existing)
        '.bg-surface-1': {
          backgroundColor: theme('colors.bg.surface1'),
        },
        '.bg-surface-2': {
          backgroundColor: theme('colors.bg.surface2'),
        },
        '.bg-surface-3': {
          backgroundColor: theme('colors.bg.surface3'),
        },
        '.bg-elevated': {
          backgroundColor: theme('colors.bg.elevated'),
        },
        '.bg-hover': {
          backgroundColor: theme('colors.bg.hover'),
        },
        '.bg-selected': {
          backgroundColor: theme('colors.bg.selected'),
        },
        '.bg-active': {
          backgroundColor: theme('colors.bg.active'),
        },
        '.bg-focus': {
          backgroundColor: theme('colors.bg.focus'),
        },
        
        // Border utilities (existing)
        '.border-subtle': {
          borderColor: theme('colors.border.subtle'),
        },
        '.border-strong': {
          borderColor: theme('colors.border.strong'),
        },
        '.border-accent': {
          borderColor: theme('colors.border.accent'),
        },
        '.border-focus': {
          borderColor: theme('colors.border.focus'),
        },
        '.border-success': {
          borderColor: theme('colors.border.success'),
        },
        '.border-warning': {
          borderColor: theme('colors.border.warning'),
        },
        '.border-error': {
          borderColor: theme('colors.border.error'),
        },
        
        // Railway-style interactive utilities with state strategy
        '.hover\\:bg-gray-100:hover': {
          backgroundColor: theme('colors.gray.100'),
        },
        '.hover\\:bg-secondaryBg:hover': {
          backgroundColor: theme('colors.secondaryBg'),
        },
        '.hover\\:bg-tertiaryBg:hover': {
          backgroundColor: theme('colors.tertiaryBg'),
        },
        '.hover\\:border-gray-200:hover': {
          borderColor: theme('colors.gray.200'),
        },
        '.hover\\:border-pink-400:hover': {
          borderColor: theme('colors.pink.400'),
        },
        
        '.active\\:scale-95:active': {
          transform: 'scale(0.95)',
        },
        '.active\\:bg-active:active': {
          backgroundColor: theme('colors.interactive.active'),
        },
        
        '.focus\\:outline-none:focus': {
          outline: 'none',
        },
        '.focus\\:bg-focus:focus': {
          backgroundColor: theme('colors.interactive.focus'),
        },
        
        '.focus-visible\\:ring-2:focus-visible': {
          '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
          '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
          boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
        },
        '.focus-visible\\:ring-pink-700:focus-visible': {
          '--tw-ring-color': theme('colors.pink.700'),
        },
        '.focus-visible\\:ring-gray-600:focus-visible': {
          '--tw-ring-color': theme('colors.gray.600'),
        },
        '.focus-visible\\:bg-gray-100:focus-visible': {
          backgroundColor: theme('colors.gray.100'),
        },
        
        '.selected\\:bg-selected:selected': {
          backgroundColor: theme('colors.interactive.selected'),
        },
        
        // Enhanced component utilities with Railway-style states
        '.card': {
          backgroundColor: theme('colors.bg.surface1'),
          border: `1px solid ${theme('colors.border.subtle')}`,
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.sm'),
          transition: `all ${theme('transitionDuration.normal')} ease-in-out`,
        },
        '.card-hover': {
          '&:hover': {
            borderColor: theme('colors.border.accent'),
            boxShadow: theme('boxShadow.elevated'),
            transform: 'translateY(-1px)',
          },
        },
        
        // Railway-style button utilities
        '.btn-base': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid transparent',
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.medium'),
          lineHeight: theme('lineHeight.5'),
          padding: `${theme('spacing.1.5')} ${theme('spacing.3')}`,
          transition: `all ${theme('transitionDuration.50')} ease-in-out`,
          cursor: 'pointer',
          '&:focus': {
            outline: 'none',
          },
          '&:focus-visible': {
            '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
            '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
            boxShadow: 'var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
        '.btn-primary': {
          backgroundColor: theme('colors.accent.brand'),
          borderColor: theme('colors.accent.brand'),
          color: theme('colors.text.onAccent'),
          '&:hover': {
            backgroundColor: theme('colors.accent.brandHover'),
            borderColor: theme('colors.accent.brandHover'),
          },
          '&:focus-visible': {
            '--tw-ring-color': theme('colors.accent.pink700'),
          },
        },
        '.btn-secondary': {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: theme('colors.text.primary'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100'),
            borderColor: theme('colors.gray.100'),
          },
          '&:focus-visible': {
            '--tw-ring-color': theme('colors.gray.600'),
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
