"use strict";
// Matterforma Design System - Color Tokens
// Matterforma Dark Spectral Color System v2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.semanticColors = exports.colors = void 0;
exports.colors = {
    // Base Palette (Primitives)
    graphite: {
        1000: '#0D1117', // Deepest black
        950: '#0D1117', // Very dark
        900: '#0D1117', // Main page background
        850: '#161B22', // Secondary surface
        800: '#161B22', // Primary surface (panels)
        750: '#21262D', // Secondary surface
        700: '#21262D', // Elevated surface (nested panels, editor)
        600: '#30363D', // Subtle borders/dividers
        500: '#484F58', // Medium borders
        400: '#6E7681', // Strong borders
    },
    // Grays - Text & UI chrome
    white: {
        1000: '#F0F6FC', // Primary text
        950: '#E6EDF3', // Slightly muted white
    },
    gray: {
        200: '#C9D1D9', // Light gray
        300: '#B1BAC4', // Secondary text
        400: '#8B949E', // Tertiary text
        500: '#6E7681', // Disabled text
        600: '#484F58', // Muted text
        700: '#30363D', // Border color
        800: '#21262D', // Surface color
    },
    // Spectral Accents
    violet: {
        900: '#30363D', // Darkest gray
        800: '#484F58', // Dark gray
        700: '#6E7681', // Brand base (primary CTA, active states)
        600: '#8B949E', // Brand secondary
        500: '#C9D1D9', // Hover/focus
        400: '#E6EDF3', // Brand tertiary
        300: '#F0F6FC', // Light gray
        200: '#FFFFFF', // Very light gray
    },
    teal: {
        900: '#30363D', // Darkest gray
        800: '#484F58', // Dark gray
        700: '#6E7681', // Success base
        600: '#8B949E', // Success base
        500: '#C9D1D9', // Success secondary
        400: '#E6EDF3', // Success tertiary
        300: '#F0F6FC', // Light gray
    },
    indigo: {
        900: '#30363D', // Darkest gray
        800: '#484F58', // Dark gray
        700: '#6E7681', // Info base
        600: '#8B949E', // Info base
        500: '#C9D1D9', // Info secondary
        400: '#E6EDF3', // Info tertiary
        300: '#F0F6FC', // Light gray
    },
    amber: {
        900: '#30363D', // Darkest gray
        800: '#484F58', // Dark gray
        700: '#6E7681', // Warning base
        600: '#8B949E', // Warning secondary
        500: '#C9D1D9', // Warning base (muted)
        400: '#E6EDF3', // Warning tertiary
        300: '#F0F6FC', // Light gray
    },
    rose: {
        900: '#30363D', // Darkest gray
        800: '#484F58', // Dark gray
        700: '#6E7681', // Error base
        600: '#8B949E', // Error base (muted)
        500: '#C9D1D9', // Error secondary
        400: '#E6EDF3', // Error tertiary
        300: '#F0F6FC', // Light gray
    },
    // Alpha Utilities (for overlays & tints)
    alpha: {
        white05: 'rgba(255,255,255,.05)', // Hover state
        white08: 'rgba(255,255,255,.08)', // Selected state
        white12: 'rgba(255,255,255,.12)', // Active state
        white16: 'rgba(255,255,255,.16)', // Focus state
        black20: 'rgba(0,0,0,.20)', // Overlay
        black40: 'rgba(0,0,0,.40)', // Strong overlay
        violet24: 'rgba(240,246,252,.24)', // Accent
        teal24: 'rgba(201,209,217,.24)', // Accent
        violet20: 'rgba(240,246,252,.20)', // Accent
        violet30: 'rgba(240,246,252,.30)', // Focus
        teal20: 'rgba(201,209,217,.20)', // Accent
        amber20: 'rgba(139,148,158,.20)', // Accent
        rose20: 'rgba(110,118,129,.20)', // Accent
    },
};
// Semantic Color Tokens - Matterforma Dark Spectral
exports.semanticColors = {
    // Backgrounds & Surfaces
    bg: {
        page: exports.colors.graphite[900], // Main page background (#1A1523)
        surface1: exports.colors.graphite[800], // Primary surface (panels) (#221B2E)
        surface2: exports.colors.graphite[700], // Secondary surface (nested panels, editor) (#2B2239)
        surface3: exports.colors.graphite[700], // Tertiary surface
        elevated: exports.colors.graphite[700], // Elevated surface
        hover: exports.colors.alpha.white08, // Hover state (rgba(255,255,255,.08))
        selected: exports.colors.alpha.white12, // Selected state (rgba(255,255,255,.12))
        active: exports.colors.alpha.white12, // Active state
        focus: exports.colors.alpha.white16, // Focus state (rgba(255,255,255,.16))
        scrim: exports.colors.alpha.black20, // Overlay (rgba(0,0,0,.20))
        strongScrim: exports.colors.alpha.black40, // Strong overlay
        // Railway-style strategic backgrounds
        background: exports.colors.graphite[900], // Main background (Railway: bg-background)
        secondaryBg: exports.colors.graphite[800], // Secondary background (Railway: bg-secondaryBg)
        tertiaryBg: exports.colors.graphite[700], // Tertiary background
    },
    // Text
    text: {
        primary: exports.colors.white[1000], // Primary text (#F0F6FC)
        secondary: exports.colors.gray[200], // Secondary text (#C9D1D9)
        tertiary: exports.colors.gray[400], // Tertiary text (#8B949E)
        quaternary: exports.colors.gray[500], // Quaternary text
        disabled: exports.colors.gray[500], // Disabled text (#7A7A82)
        onAccent: exports.colors.graphite[1000], // Text on accent backgrounds
        inverse: exports.colors.graphite[1000], // Inverse text
        // Railway-style text variations
        success: exports.colors.gray[300], // Success text (Railway: text-success)
        muted: exports.colors.gray[400], // Muted text (Railway: text-gray-600)
    },
    // Borders & Dividers
    border: {
        subtle: exports.colors.graphite[600], // Subtle borders (#342A45)
        default: exports.colors.graphite[500], // Default borders (#413455)
        strong: exports.colors.graphite[400], // Strong borders (#4E4064)
        accent: exports.colors.alpha.violet24, // Accent borders (rgba(157,108,255,.24))
        focus: exports.colors.alpha.violet30, // Focus borders
        success: exports.colors.alpha.teal24, // Success borders (rgba(47,200,154,.24))
        warning: exports.colors.alpha.amber20, // Warning borders
        error: exports.colors.alpha.rose20, // Error borders
        // Railway-style strategic borders
        gray100: exports.colors.graphite[600], // Light gray borders (Railway: border-gray-100)
        pink400: exports.colors.gray[400], // Pink accent borders (Railway: border-pink-400)
    },
    // Brand & Accents
    accent: {
        brand: exports.colors.gray[200], // Brand primary
        brandHover: exports.colors.white[1000], // Brand hover
        brandActive: exports.colors.gray[300], // Brand active
        brandLight: exports.colors.white[950], // Brand light
        brandDark: exports.colors.gray[400], // Brand dark
        success: exports.colors.gray[300], // Success primary
        successHover: exports.colors.gray[200], // Success hover
        successWeak: exports.colors.gray[400], // Success weak
        info: exports.colors.gray[400], // Info primary
        infoHover: exports.colors.gray[300], // Info hover
        infoWeak: exports.colors.gray[500], // Info weak
        warning: exports.colors.gray[500], // Warning primary
        warningHover: exports.colors.gray[400], // Warning hover
        warningWeak: exports.colors.gray[600], // Warning weak
        danger: exports.colors.gray[600], // Danger primary
        dangerHover: exports.colors.gray[500], // Danger hover
        dangerWeak: exports.colors.gray[700], // Danger weak
        // Railway-style strategic accents
        pink700: exports.colors.gray[600], // Pink focus ring (Railway: ring-pink-700)
    },
    // Focus & Selection
    focus: {
        ring: 'rgba(240,246,252,.25)', // Focus ring
        inner: exports.colors.alpha.white12, // Inner focus
        selection: exports.colors.alpha.violet24, // Selection highlight
        // Railway-style focus
        visible: exports.colors.gray[200], // Visible focus ring (Railway: focus-visible:ring)
    },
    // Interactive States
    interactive: {
        hover: exports.colors.alpha.white08, // Hover background
        active: exports.colors.alpha.white12, // Active background
        selected: exports.colors.alpha.violet24, // Selected background
        focus: exports.colors.alpha.violet30, // Focus background
        // Railway-style hover states
        hoverBg: exports.colors.graphite[800], // Hover background (Railway: hover:bg-secondaryBg)
        hoverDark: exports.colors.graphite[700], // Dark hover background (Railway: hover:dark:bg-gray-100)
    },
    // Data Visualization
    chart: {
        1: exports.colors.gray[200], // Primary chart color
        2: exports.colors.gray[300], // Secondary chart color
        3: exports.colors.gray[400], // Tertiary chart color
        4: exports.colors.gray[500], // Warning chart color
        5: exports.colors.gray[600], // Error chart color
        6: exports.colors.gray[300], // Light gray
        7: exports.colors.gray[400], // Light gray
        8: exports.colors.gray[500], // Light gray
    },
};
//# sourceMappingURL=colors.js.map