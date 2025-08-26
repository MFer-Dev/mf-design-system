// Matterforma Design System - Main Export
// Railway-Style Dark Spectral Color System v2.0

export * from './tokens/colors';

// Re-export commonly used values
export const designTokens = {
  colors: {
    bg: {
      page: '#0e1116',
      surface1: '#0e0e0e',
      surface2: '#1a1d23',
      surface3: '#2a2a2a',
      elevated: '#2a2a2a',
      hover: 'rgba(255,255,255,.05)',
      selected: 'rgba(255,255,255,.08)',
      active: 'rgba(255,255,255,.12)',
      focus: 'rgba(255,255,255,.16)',
      scrim: 'rgba(0,0,0,.20)',
      strongScrim: 'rgba(0,0,0,.40)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      tertiary: '#999999',
      quaternary: '#666666',
      disabled: '#666666',
      onAccent: '#0A0A0A',
      inverse: '#0A0A0A',
    },
    border: {
      subtle: '#3e444c',
      default: '#555555',
      strong: '#666666',
      accent: 'rgba(139,92,246,.20)',
      focus: 'rgba(139,92,246,.30)',
      success: 'rgba(16,185,129,.20)',
      warning: 'rgba(245,158,11,.20)',
      error: 'rgba(239,68,68,.20)',
    },
    accent: {
      brand: '#8B5CF6',
      brandHover: '#7E52CF',
      brandActive: '#6E3CBC',
      brandLight: '#A78BFA',
      brandDark: '#5B21B6',
      success: '#10B981',
      successHover: '#2FC89A',
      successWeak: '#4FE0B0',
      info: '#3B82F6',
      infoHover: '#5C8DFF',
      infoWeak: '#7DA9FF',
      warning: '#F59E0B',
      warningHover: '#FFB347',
      warningWeak: '#FFD580',
      danger: '#EF4444',
      dangerHover: '#E59AA6',
      dangerWeak: '#F2C1C8',
    },
    focus: {
      ring: 'rgba(139,92,246,.30)',
      inner: 'rgba(255,255,255,.12)',
      selection: 'rgba(139,92,246,.20)',
    },
    interactive: {
      hover: 'rgba(255,255,255,.05)',
      active: 'rgba(255,255,255,.08)',
      selected: 'rgba(139,92,246,.20)',
      focus: 'rgba(139,92,246,.30)',
    },
    chart: {
      1: '#8B5CF6',
      2: '#2FC89A',
      3: '#5C8DFF',
      4: '#FFB347',
      5: '#E59AA6',
      6: '#A78BFA',
      7: '#4FE0B0',
      8: '#7DA9FF',
    },
  },
  
  // Railway-style spacing scale
  spacing: {
    'railway-xs': '0.125rem',
    'railway-sm': '0.25rem',
    'railway-md': '0.5rem',
    'railway-lg': '1rem',
    'railway-xl': '1.5rem',
    'railway-2xl': '2rem',
    'railway-3xl': '3rem',
    // Legacy spacing (8px base)
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
  
  // Railway-style border radius
  borderRadius: {
    'railway-sm': '0.25rem',
    'railway-md': '0.375rem',
    'railway-lg': '0.5rem',
    'railway-xl': '0.75rem',
    'railway-2xl': '1rem',
    'railway-full': '9999px',
    // Legacy border radius
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
  
  // Railway-style shadows
  shadows: {
    'railway-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    'railway-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    'railway-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    'railway-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    'railway-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    'railway-elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    // Legacy shadows
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  
  // Railway-style transitions
  transitions: {
    'railway-fast': '150ms ease-in-out',
    'railway-normal': '250ms ease-in-out',
    'railway-slow': '350ms ease-in-out',
    // Legacy transitions
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
    slower: '500ms ease-in-out',
  },
} as const;

export default designTokens;
