// Matterforma Design System - Color Tokens
// Matterforma Dark Spectral Color System v2.0

export const colors = {
  // Base Palette (Primitives)
  graphite: {
    1000: '#0E0B12', // Deepest black
    950: '#140F1B',  // Very dark
    900: '#1A1523',  // Main page background
    850: '#1F182A',  // Secondary surface
    800: '#221B2E',  // Primary surface (panels)
    750: '#261E33',  // Secondary surface
    700: '#2B2239',  // Elevated surface (nested panels, editor)
    600: '#342A45',  // Subtle borders/dividers
    500: '#413455',  // Medium borders
    400: '#4E4064',  // Strong borders
  },
  
  // Grays - Text & UI chrome
  white: {
    1000: '#F5F5F7', // Primary text
    950: '#F5F5F7',  // Slightly muted white
  },
  gray: {
    200: '#E5E5E5',  // Light gray
    300: '#C8C8CC',  // Secondary text
    400: '#A9A9B0',  // Tertiary text
    500: '#7A7A82',  // Disabled text
    600: '#5A5A62',  // Muted text
    700: '#3e444c',  // Border color
    800: '#1a1d23',  // Surface color
  },
  
  // Spectral Accents
  violet: {
    900: '#4C1D95',  // Darkest purple
    800: '#5B21B6',  // Dark purple
    700: '#6E3CBC',  // Brand base (primary CTA, active states)
    600: '#7E52CF',  // Brand secondary
    500: '#9D6CFF',  // Hover/focus
    400: '#B99CFF',  // Brand tertiary
    300: '#C4B5FD',  // Light purple
    200: '#DDD6FE',  // Very light purple
  },
  
  teal: {
    900: '#064E3B',  // Darkest teal
    800: '#065F46',  // Dark teal
    700: '#0B7A5A',  // Success base
    600: '#00A676',  // Success base
    500: '#2FC89A',  // Success secondary
    400: '#4FE0B0',  // Success tertiary
    300: '#6EE7B7',  // Light teal
  },
  
  indigo: {
    900: '#1E1B4B',  // Darkest indigo
    800: '#1E3A8A',  // Dark indigo
    700: '#1D4FBF',  // Info base
    600: '#2C6FFF',  // Info base
    500: '#5C8DFF',  // Info secondary
    400: '#7DA9FF',  // Info tertiary
    300: '#93C5FD',  // Light indigo
  },
  
  amber: {
    900: '#451A03',  // Darkest amber
    800: '#78350F',  // Dark amber
    700: '#996A2E',  // Warning base
    600: '#D7943A',  // Warning secondary
    500: '#FFB347',  // Warning base (muted)
    400: '#FFD580',  // Warning tertiary
    300: '#FCD34D',  // Light amber
  },
  
  rose: {
    900: '#4C0519',  // Darkest rose
    800: '#7F1D1D',  // Dark rose
    700: '#8F3944',  // Error base
    600: '#C65B6A',  // Error base (muted)
    500: '#E59AA6',  // Error secondary
    400: '#F2C1C8',  // Error tertiary
    300: '#FCA5A5',  // Light rose
  },
  
  // Alpha Utilities (for overlays & tints)
  alpha: {
    white05: 'rgba(255,255,255,.05)',  // Hover state
    white08: 'rgba(255,255,255,.08)',  // Selected state
    white12: 'rgba(255,255,255,.12)',  // Active state
    white16: 'rgba(255,255,255,.16)',  // Focus state
    black20: 'rgba(0,0,0,.20)',        // Overlay
    black40: 'rgba(0,0,0,.40)',        // Strong overlay
    violet24: 'rgba(157,108,255,.24)', // Violet accent
    teal24: 'rgba(47,200,154,.24)',    // Teal accent
    violet20: 'rgba(139,92,246,.20)',  // Violet accent
    violet30: 'rgba(139,92,246,.30)',  // Violet focus
    teal20: 'rgba(16,185,129,.20)',    // Teal accent
    amber20: 'rgba(245,158,11,.20)',   // Amber accent
    rose20: 'rgba(239,68,68,.20)',     // Rose accent
  },
} as const;

// Semantic Color Tokens - Matterforma Dark Spectral
export const semanticColors = {
  // Backgrounds & Surfaces
  bg: {
    page: colors.graphite[900],           // Main page background (#1A1523)
    surface1: colors.graphite[800],       // Primary surface (panels) (#221B2E)
    surface2: colors.graphite[700],       // Secondary surface (nested panels, editor) (#2B2239)
    surface3: colors.graphite[700],       // Tertiary surface
    elevated: colors.graphite[700],       // Elevated surface
    hover: colors.alpha.white08,          // Hover state (rgba(255,255,255,.08))
    selected: colors.alpha.white12,       // Selected state (rgba(255,255,255,.12))
    active: colors.alpha.white12,         // Active state
    focus: colors.alpha.white16,          // Focus state (rgba(255,255,255,.16))
    scrim: colors.alpha.black20,          // Overlay (rgba(0,0,0,.20))
    strongScrim: colors.alpha.black40,    // Strong overlay
    // Railway-style strategic backgrounds
    background: colors.graphite[900],     // Main background (Railway: bg-background)
    secondaryBg: colors.graphite[800],    // Secondary background (Railway: bg-secondaryBg)
    tertiaryBg: colors.graphite[700],     // Tertiary background
  },
  
  // Text
  text: {
    primary: colors.white[1000],          // Primary text (#F5F5F7)
    secondary: colors.gray[300],          // Secondary text (#C8C8CC)
    tertiary: colors.gray[400],           // Tertiary text (#A9A9B0)
    quaternary: colors.gray[500],         // Quaternary text
    disabled: colors.gray[500],           // Disabled text (#7A7A82)
    onAccent: '#0E0B12',                 // Text on accent backgrounds
    inverse: colors.graphite[1000],       // Inverse text
    // Railway-style text variations
    success: colors.teal[600],            // Success text (Railway: text-success)
    muted: colors.gray[400],              // Muted text (Railway: text-gray-600)
  },
  
  // Borders & Dividers
  border: {
    subtle: colors.graphite[600],         // Subtle borders (#342A45)
    default: colors.graphite[500],        // Default borders (#413455)
    strong: colors.graphite[400],         // Strong borders (#4E4064)
    accent: colors.alpha.violet24,        // Accent borders (rgba(157,108,255,.24))
    focus: colors.alpha.violet30,         // Focus borders
    success: colors.alpha.teal24,         // Success borders (rgba(47,200,154,.24))
    warning: colors.alpha.amber20,        // Warning borders
    error: colors.alpha.rose20,           // Error borders
    // Railway-style strategic borders
    gray100: colors.graphite[600],        // Light gray borders (Railway: border-gray-100)
    pink400: colors.violet[500],          // Pink accent borders (Railway: border-pink-400)
  },
  
  // Brand & Accents
  accent: {
    brand: colors.violet[700],            // Brand primary (#6E3CBC)
    brandHover: colors.violet[500],       // Brand hover (#9D6CFF)
    brandActive: colors.violet[700],      // Brand active
    brandLight: colors.violet[400],       // Brand light
    brandDark: colors.violet[800],        // Brand dark
    success: colors.teal[600],            // Success primary (#00A676)
    successHover: colors.teal[500],       // Success hover (#2FC89A)
    successWeak: colors.teal[400],        // Success weak (#4FE0B0)
    info: colors.indigo[600],             // Info primary (#2C6FFF)
    infoHover: colors.indigo[500],        // Info hover (#5C8DFF)
    infoWeak: colors.indigo[400],         // Info weak (#7DA9FF)
    warning: colors.amber[500],           // Warning primary (#FFB347)
    warningHover: colors.amber[500],      // Warning hover
    warningWeak: colors.amber[400],       // Warning weak (#FFD580)
    danger: colors.rose[600],             // Danger primary (#C65B6A)
    dangerHover: colors.rose[500],        // Danger hover (#E59AA6)
    dangerWeak: colors.rose[400],         // Danger weak (#F2C1C8)
    // Railway-style strategic accents
    pink700: colors.violet[600],          // Pink focus ring (Railway: ring-pink-700)
  },
  
  // Focus & Selection
  focus: {
    ring: 'rgba(157,108,255,.25)',       // Focus ring
    inner: colors.alpha.white12,          // Inner focus
    selection: colors.alpha.violet24,     // Selection highlight
    // Railway-style focus
    visible: colors.violet[600],          // Visible focus ring (Railway: focus-visible:ring)
  },
  
  // Interactive States
  interactive: {
    hover: colors.alpha.white08,          // Hover background
    active: colors.alpha.white12,         // Active background
    selected: colors.alpha.violet24,      // Selected background
    focus: colors.alpha.violet30,         // Focus background
    // Railway-style hover states
    hoverBg: colors.graphite[800],        // Hover background (Railway: hover:bg-secondaryBg)
    hoverDark: colors.graphite[700],      // Dark hover background (Railway: hover:dark:bg-gray-100)
  },
  
  // Data Visualization
  chart: {
    1: colors.violet[500],                // Primary chart color (#9D6CFF)
    2: colors.teal[500],                  // Secondary chart color (#2FC89A)
    3: colors.indigo[500],                // Tertiary chart color (#5C8DFF)
    4: colors.amber[500],                 // Warning chart color (#FFB347)
    5: colors.rose[500],                  // Error chart color (#E59AA6)
    6: colors.violet[400],                // Light violet (#B99CFF)
    7: colors.teal[400],                  // Light teal (#4FE0B0)
    8: colors.indigo[400],                // Light indigo (#7DA9FF)
  },
} as const;

export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
