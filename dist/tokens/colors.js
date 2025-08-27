"use strict";
// Matterforma Design System - Color Tokens
// Matterforma Dark Spectral Color System v2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.semanticColors = exports.colors = void 0;
exports.colors = {
    // Base Palette (Primitives)
    graphite: {
        1000: '#0E0B12', // Deepest black
        950: '#140F1B', // Very dark
        900: '#1A1523', // Main page background
        850: '#1F182A', // Secondary surface
        800: '#221B2E', // Primary surface (panels)
        750: '#261E33', // Secondary surface
        700: '#2B2239', // Elevated surface (nested panels, editor)
        600: '#342A45', // Subtle borders/dividers
        500: '#413455', // Medium borders
        400: '#4E4064', // Strong borders
    },
    // Grays - Text & UI chrome
    white: {
        1000: '#F5F5F7', // Primary text
        950: '#F5F5F7', // Slightly muted white
    },
    gray: {
        200: '#E5E5E5', // Light gray
        300: '#C8C8CC', // Secondary text
        400: '#A9A9B0', // Tertiary text
        500: '#7A7A82', // Disabled text
        600: '#5A5A62', // Muted text
        700: '#3e444c', // Border color
        800: '#1a1d23', // Surface color
    },
    // Spectral Accents
    violet: {
        900: '#4C1D95', // Darkest purple
        800: '#5B21B6', // Dark purple
        700: '#6E3CBC', // Brand base (primary CTA, active states)
        600: '#7E52CF', // Brand secondary
        500: '#9D6CFF', // Hover/focus
        400: '#B99CFF', // Brand tertiary
        300: '#C4B5FD', // Light purple
        200: '#DDD6FE', // Very light purple
    },
    teal: {
        900: '#064E3B', // Darkest teal
        800: '#065F46', // Dark teal
        700: '#0B7A5A', // Success base
        600: '#00A676', // Success base
        500: '#2FC89A', // Success secondary
        400: '#4FE0B0', // Success tertiary
        300: '#6EE7B7', // Light teal
    },
    indigo: {
        900: '#1E1B4B', // Darkest indigo
        800: '#1E3A8A', // Dark indigo
        700: '#1D4FBF', // Info base
        600: '#2C6FFF', // Info base
        500: '#5C8DFF', // Info secondary
        400: '#7DA9FF', // Info tertiary
        300: '#93C5FD', // Light indigo
    },
    amber: {
        900: '#451A03', // Darkest amber
        800: '#78350F', // Dark amber
        700: '#996A2E', // Warning base
        600: '#D7943A', // Warning secondary
        500: '#FFB347', // Warning base (muted)
        400: '#FFD580', // Warning tertiary
        300: '#FCD34D', // Light amber
    },
    rose: {
        900: '#4C0519', // Darkest rose
        800: '#7F1D1D', // Dark rose
        700: '#8F3944', // Error base
        600: '#C65B6A', // Error base (muted)
        500: '#E59AA6', // Error secondary
        400: '#F2C1C8', // Error tertiary
        300: '#FCA5A5', // Light rose
    },
    // Alpha Utilities (for overlays & tints)
    alpha: {
        white05: 'rgba(255,255,255,.05)', // Hover state
        white08: 'rgba(255,255,255,.08)', // Selected state
        white12: 'rgba(255,255,255,.12)', // Active state
        white16: 'rgba(255,255,255,.16)', // Focus state
        black20: 'rgba(0,0,0,.20)', // Overlay
        black40: 'rgba(0,0,0,.40)', // Strong overlay
        violet24: 'rgba(157,108,255,.24)', // Violet accent
        teal24: 'rgba(47,200,154,.24)', // Teal accent
        violet20: 'rgba(139,92,246,.20)', // Violet accent
        violet30: 'rgba(139,92,246,.30)', // Violet focus
        teal20: 'rgba(16,185,129,.20)', // Teal accent
        amber20: 'rgba(245,158,11,.20)', // Amber accent
        rose20: 'rgba(239,68,68,.20)', // Rose accent
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
    },
    // Text
    text: {
        primary: exports.colors.white[1000], // Primary text (#F5F5F7)
        secondary: exports.colors.gray[300], // Secondary text (#C8C8CC)
        tertiary: exports.colors.gray[400], // Tertiary text (#A9A9B0)
        quaternary: exports.colors.gray[500], // Quaternary text
        disabled: exports.colors.gray[500], // Disabled text (#7A7A82)
        onAccent: '#0E0B12', // Text on accent backgrounds
        inverse: exports.colors.graphite[1000], // Inverse text
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
    },
    // Brand & Accents
    accent: {
        brand: exports.colors.violet[700], // Brand primary (#6E3CBC)
        brandHover: exports.colors.violet[500], // Brand hover (#9D6CFF)
        brandActive: exports.colors.violet[700], // Brand active
        brandLight: exports.colors.violet[400], // Brand light
        brandDark: exports.colors.violet[800], // Brand dark
        success: exports.colors.teal[600], // Success primary (#00A676)
        successHover: exports.colors.teal[500], // Success hover (#2FC89A)
        successWeak: exports.colors.teal[400], // Success weak (#4FE0B0)
        info: exports.colors.indigo[600], // Info primary (#2C6FFF)
        infoHover: exports.colors.indigo[500], // Info hover (#5C8DFF)
        infoWeak: exports.colors.indigo[400], // Info weak (#7DA9FF)
        warning: exports.colors.amber[500], // Warning primary (#FFB347)
        warningHover: exports.colors.amber[500], // Warning hover
        warningWeak: exports.colors.amber[400], // Warning weak (#FFD580)
        danger: exports.colors.rose[600], // Danger primary (#C65B6A)
        dangerHover: exports.colors.rose[500], // Danger hover (#E59AA6)
        dangerWeak: exports.colors.rose[400], // Danger weak (#F2C1C8)
    },
    // Focus & Selection
    focus: {
        ring: 'rgba(157,108,255,.25)', // Focus ring
        inner: exports.colors.alpha.white12, // Inner focus
        selection: exports.colors.alpha.violet24, // Selection highlight
    },
    // Interactive States
    interactive: {
        hover: exports.colors.alpha.white08, // Hover background
        active: exports.colors.alpha.white12, // Active background
        selected: exports.colors.alpha.violet24, // Selected background
        focus: exports.colors.alpha.violet30, // Focus background
    },
    // Data Visualization
    chart: {
        1: exports.colors.violet[500], // Primary chart color (#9D6CFF)
        2: exports.colors.teal[500], // Secondary chart color (#2FC89A)
        3: exports.colors.indigo[500], // Tertiary chart color (#5C8DFF)
        4: exports.colors.amber[500], // Warning chart color (#FFB347)
        5: exports.colors.rose[500], // Error chart color (#E59AA6)
        6: exports.colors.violet[400], // Light violet (#B99CFF)
        7: exports.colors.teal[400], // Light teal (#4FE0B0)
        8: exports.colors.indigo[400], // Light indigo (#7DA9FF)
    },
};
//# sourceMappingURL=colors.js.map