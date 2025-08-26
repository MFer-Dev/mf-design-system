// Matterforma Design System - Color Tokens
// Railway-Style Dark Spectral Color System v2.0

export const colors = {
  // Base Palette (Primitives) - Railway-style dark graphite
  graphite: {
    1000: '#0A0A0A', // Deepest black
    950: '#0E0E0E',  // Very dark
    900: '#0e1116',  // Main page background (Railway-style)
    850: '#1a1d23',  // Secondary surface
    800: '#0e0e0e',  // Primary surface
    750: '#1a1d23',  // Secondary surface
    700: '#2a2a2a',  // Elevated surface
    600: '#3e444c',  // Subtle borders / dividers
    500: '#555555',  // Medium borders
    400: '#666666',  // Strong borders
  },
  
  // Grays - Text & UI chrome (Railway-style)
  white: {
    1000: '#FFFFFF', // Primary text
    950: '#F5F5F7',  // Slightly muted white
  },
  gray: {
    200: '#E5E5E5',  // Light gray
    300: '#CCCCCC',  // Secondary text
    400: '#999999',  // Tertiary text
    500: '#666666',  // Disabled text
    600: '#5A5A62',  // Muted text
    700: '#3e444c',  // Border color
    800: '#1a1d23',  // Surface color
  },
  
  // Spectral Accents (Railway-style subtle variations)
  violet: {
    900: '#4C1D95',  // Darkest purple
    800: '#5B21B6',  // Dark purple
    700: '#6E3CBC',  // Brand base
    600: '#7E52CF',  // Brand secondary
    500: '#8B5CF6',  // Brand primary (Railway-style)
    400: '#A78BFA',  // Brand tertiary
    300: '#C4B5FD',  // Light purple
    200: '#DDD6FE',  // Very light purple
  },
  
  teal: {
    900: '#064E3B',  // Darkest teal
    800: '#065F46',  // Dark teal
    700: '#0B7A5A',  // Success base
    600: '#10B981',  // Success primary
    500: '#2FC89A',  // Success secondary
    400: '#4FE0B0',  // Success tertiary
    300: '#6EE7B7',  // Light teal
  },
  
  indigo: {
    900: '#1E1B4B',  // Darkest indigo
    800: '#1E3A8A',  // Dark indigo
    700: '#1D4FBF',  // Info base
    600: '#3B82F6',  // Info primary
    500: '#5C8DFF',  // Info secondary
    400: '#7DA9FF',  // Info tertiary
    300: '#93C5FD',  // Light indigo
  },
  
  amber: {
    900: '#451A03',  // Darkest amber
    800: '#78350F',  // Dark amber
    700: '#996A2E',  // Warning base
    600: '#F59E0B',  // Warning primary
    500: '#FFB347',  // Warning secondary
    400: '#FFD580',  // Warning tertiary
    300: '#FCD34D',  // Light amber
  },
  
  rose: {
    900: '#4C0519',  // Darkest rose
    800: '#7F1D1D',  // Dark rose
    700: '#8F3944',  // Error base
    600: '#EF4444',  // Error primary
    500: '#E59AA6',  // Error secondary
    400: '#F2C1C8',  // Error tertiary
    300: '#FCA5A5',  // Light rose
  },
  
  // Alpha Utilities (for overlays & tints) - Railway-style
  alpha: {
    white05: 'rgba(255,255,255,.05)',  // Hover state
    white08: 'rgba(255,255,255,.08)',  // Selected state
    white12: 'rgba(255,255,255,.12)',  // Active state
    white16: 'rgba(255,255,255,.16)',  // Focus state
    black20: 'rgba(0,0,0,.20)',        // Overlay
    black40: 'rgba(0,0,0,.40)',        // Strong overlay
    violet20: 'rgba(139,92,246,.20)',  // Violet accent
    violet30: 'rgba(139,92,246,.30)',  // Violet focus
    teal20: 'rgba(16,185,129,.20)',    // Teal accent
    amber20: 'rgba(245,158,11,.20)',   // Amber accent
    rose20: 'rgba(239,68,68,.20)',     // Rose accent
  },
} as const;

// Semantic Color Tokens - Railway-style
export const semanticColors = {
  // Backgrounds & Surfaces (Railway-style)
  bg: {
    page: colors.graphite[900],           // Main page background
    surface1: colors.graphite[800],       // Primary surface
    surface2: colors.graphite[850],       // Secondary surface
    surface3: colors.graphite[700],       // Tertiary surface
    elevated: colors.graphite[700],       // Elevated surface
    hover: colors.alpha.white05,          // Hover state (subtle)
    selected: colors.alpha.white08,       // Selected state
    active: colors.alpha.white12,         // Active state
    focus: colors.alpha.white16,          // Focus state
    scrim: colors.alpha.black20,          // Overlay
    strongScrim: colors.alpha.black40,    // Strong overlay
  },
  
  // Text (Railway-style)
  text: {
    primary: colors.white[1000],          // Primary text
    secondary: colors.gray[300],          // Secondary text
    tertiary: colors.gray[400],           // Tertiary text
    quaternary: colors.gray[500],         // Quaternary text
    disabled: colors.gray[500],           // Disabled text
    onAccent: colors.graphite[1000],      // Text on accent backgrounds
    inverse: colors.graphite[1000],       // Inverse text
  },
  
  // Borders & Dividers (Railway-style)
  border: {
    subtle: colors.graphite[600],         // Subtle borders
    default: colors.graphite[500],        // Default borders
    strong: colors.graphite[400],         // Strong borders
    accent: colors.alpha.violet20,        // Accent borders
    focus: colors.alpha.violet30,         // Focus borders
    success: colors.alpha.teal20,         // Success borders
    warning: colors.alpha.amber20,        // Warning borders
    error: colors.alpha.rose20,           // Error borders
  },
  
  // Brand & Accents (Railway-style semantic)
  accent: {
    brand: colors.violet[500],            // Brand primary
    brandHover: colors.violet[600],       // Brand hover
    brandActive: colors.violet[700],      // Brand active
    brandLight: colors.violet[400],       // Brand light
    brandDark: colors.violet[800],        // Brand dark
    success: colors.teal[600],            // Success primary
    successHover: colors.teal[500],       // Success hover
    successWeak: colors.teal[400],        // Success weak
    info: colors.indigo[600],             // Info primary
    infoHover: colors.indigo[500],        // Info hover
    infoWeak: colors.indigo[400],         // Info weak
    warning: colors.amber[600],           // Warning primary
    warningHover: colors.amber[500],      // Warning hover
    warningWeak: colors.amber[400],       // Warning weak
    danger: colors.rose[600],             // Danger primary
    dangerHover: colors.rose[500],        // Danger hover
    dangerWeak: colors.rose[400],         // Danger weak
  },
  
  // Focus & Selection (Railway-style)
  focus: {
    ring: colors.alpha.violet30,          // Focus ring
    inner: colors.alpha.white12,          // Inner focus
    selection: colors.alpha.violet20,     // Selection highlight
  },
  
  // Interactive States (Railway-style)
  interactive: {
    hover: colors.alpha.white05,          // Hover background
    active: colors.alpha.white08,         // Active background
    selected: colors.alpha.violet20,      // Selected background
    focus: colors.alpha.violet30,         // Focus background
  },
  
  // Data Visualization (Railway-style)
  chart: {
    1: colors.violet[500],                // Primary chart color
    2: colors.teal[500],                  // Secondary chart color
    3: colors.indigo[500],                // Tertiary chart color
    4: colors.amber[500],                 // Warning chart color
    5: colors.rose[500],                  // Error chart color
    6: colors.violet[400],                // Light violet
    7: colors.teal[400],                  // Light teal
    8: colors.indigo[400],                // Light indigo
  },
} as const;

export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
