// Matterforma Design System - Main Export
// Dark Spectral Color System v1.0

export * from './tokens/colors';
export { default as semanticColors } from './tokens/colors';

// Re-export commonly used values
export const designTokens = {
  colors: {
    bg: {
      page: '#1A1523',
      surface1: '#221B2E',
      surface2: '#2B2239',
      elevated: '#2B2239',
      hover: 'rgba(255,255,255,.08)',
      selected: 'rgba(255,255,255,.12)',
      scrim: 'rgba(0,0,0,.20)',
    },
    text: {
      primary: '#F5F5F7',
      secondary: '#C8C8CC',
      tertiary: '#A9A9B0',
      disabled: '#7A7A82',
      onAccent: '#0E0B12',
    },
    border: {
      subtle: '#342A45',
      default: '#413455',
      strong: '#4E4064',
      accent: 'rgba(157,108,255,.24)',
    },
    accent: {
      brand: '#6E3CBC',
      brandHover: '#9D6CFF',
      success: '#00A676',
      successWeak: '#4FE0B0',
      info: '#2C6FFF',
      infoWeak: '#7DA9FF',
      warning: '#FFB347',
      warningWeak: '#FFD580',
      danger: '#C65B6A',
      dangerWeak: '#E59AA6',
    },
    focus: {
      ring: 'rgba(157,108,255,.25)',
      inner: 'rgba(255,255,255,.12)',
      selection: 'rgba(157,108,255,.24)',
    },
    chart: {
      1: '#9D6CFF',
      2: '#2FC89A',
      3: '#5C8DFF',
      4: '#FFB347',
      5: '#E59AA6',
      6: '#B99CFF',
      7: '#4FE0B0',
      8: '#7DA9FF',
    },
  },
  
  // Spacing scale (8px base)
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    12: '48px',
    14: '56px',
    16: '64px',
    20: '80px',
    24: '96px',
    28: '112px',
    32: '128px',
  },
  
  // Typography scale
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '40px' }],
      '5xl': ['48px', { lineHeight: '48px' }],
      '6xl': ['60px', { lineHeight: '60px' }],
      '7xl': ['72px', { lineHeight: '72px' }],
      '8xl': ['96px', { lineHeight: '96px' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },
  
  // Border radius
  borderRadius: {
    none: '0px',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
    slower: '500ms ease-in-out',
  },
} as const;

export default designTokens;
