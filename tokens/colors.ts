// Matterforma Design System - Color Tokens
// Dark Spectral Color System v1.0

export const colors = {
  // Base Palette (Primitives)
  graphite: {
    1000: '#0E0B12',
    950: '#140F1B',
    900: '#1A1523', // default page background
    850: '#1F182A',
    800: '#221B2E', // surface-1
    750: '#261E33',
    700: '#2B2239', // surface-2
    600: '#342A45', // subtle borders / dividers
    500: '#413455', // medium borders
    400: '#4E4064', // strong borders
  },
  
  // Grays - Text & UI chrome
  white: {
    1000: '#F5F5F7', // primary text
  },
  gray: {
    200: '#E7E7EA',
    300: '#C8C8CC', // secondary text
    400: '#A9A9B0',
    500: '#7A7A82', // disabled text
    600: '#5A5A62',
  },
  
  // Spectral Accents (muted)
  violet: {
    700: '#6E3CBC', // brand base
    600: '#7E52CF',
    500: '#9D6CFF', // hover/active highlight
    400: '#B99CFF',
  },
  
  teal: {
    700: '#0B7A5A',
    600: '#00A676', // success base
    500: '#2FC89A',
    400: '#4FE0B0',
  },
  
  indigo: {
    700: '#1D4FBF',
    600: '#2C6FFF', // info base
    500: '#5C8DFF',
    400: '#7DA9FF',
  },
  
  amber: {
    700: '#996A2E',
    600: '#D7943A',
    500: '#FFB347', // warning base (muted)
    400: '#FFD580',
  },
  
  rose: {
    700: '#8F3944',
    600: '#C65B6A', // error base (muted)
    500: '#E59AA6',
    400: '#F2C1C8',
  },
  
  // Alpha Utilities (for overlays & tints)
  alpha: {
    white08: 'rgba(255,255,255,.08)',
    white12: 'rgba(255,255,255,.12)',
    white16: 'rgba(255,255,255,.16)',
    black20: 'rgba(0,0,0,.20)',
    violet24: 'rgba(157,108,255,.24)',
    teal24: 'rgba(47,200,154,.24)',
  },
} as const;

// Semantic Color Tokens
export const semanticColors = {
  // Backgrounds & Surfaces
  bg: {
    page: colors.graphite[900],
    surface1: colors.graphite[800],
    surface2: colors.graphite[700],
    elevated: colors.graphite[700], // + alpha overlay in code
    hover: colors.alpha.white08,
    selected: colors.alpha.white12,
    scrim: colors.alpha.black20,
  },
  
  // Text
  text: {
    primary: colors.white[1000],
    secondary: colors.gray[300],
    tertiary: colors.gray[400],
    disabled: colors.gray[500],
    onAccent: colors.graphite[1000],
  },
  
  // Borders & Dividers
  border: {
    subtle: colors.graphite[600],
    default: colors.graphite[500],
    strong: colors.graphite[400],
    accent: colors.alpha.violet24,
  },
  
  // Brand & Accents (semantic)
  accent: {
    brand: colors.violet[700],
    brandHover: colors.violet[500],
    success: colors.teal[600],
    successWeak: colors.teal[400],
    info: colors.indigo[600],
    infoWeak: colors.indigo[400],
    warning: colors.amber[500],
    warningWeak: colors.amber[400],
    danger: colors.rose[600],
    dangerWeak: colors.rose[500],
  },
  
  // Focus & Selection
  focus: {
    ring: colors.alpha.violet24,
    inner: colors.alpha.white12,
    selection: colors.alpha.violet24,
  },
  
  // Data Visualization
  chart: {
    1: colors.violet[500],
    2: colors.teal[500],
    3: colors.indigo[500],
    4: colors.amber[500],
    5: colors.rose[500],
    6: colors.violet[400],
    7: colors.teal[400],
    8: colors.indigo[400],
  },
} as const;

export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
