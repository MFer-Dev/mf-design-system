export declare const colors: {
    readonly graphite: {
        readonly 1000: "#0A0A0A";
        readonly 950: "#0E0E0E";
        readonly 900: "#0e1116";
        readonly 850: "#1a1d23";
        readonly 800: "#0e0e0e";
        readonly 750: "#1a1d23";
        readonly 700: "#2a2a2a";
        readonly 600: "#3e444c";
        readonly 500: "#555555";
        readonly 400: "#666666";
    };
    readonly white: {
        readonly 1000: "#FFFFFF";
        readonly 950: "#F5F5F7";
    };
    readonly gray: {
        readonly 200: "#E5E5E5";
        readonly 300: "#CCCCCC";
        readonly 400: "#999999";
        readonly 500: "#666666";
        readonly 600: "#5A5A62";
        readonly 700: "#3e444c";
        readonly 800: "#1a1d23";
    };
    readonly violet: {
        readonly 900: "#4C1D95";
        readonly 800: "#5B21B6";
        readonly 700: "#6E3CBC";
        readonly 600: "#7E52CF";
        readonly 500: "#8B5CF6";
        readonly 400: "#A78BFA";
        readonly 300: "#C4B5FD";
        readonly 200: "#DDD6FE";
    };
    readonly teal: {
        readonly 900: "#064E3B";
        readonly 800: "#065F46";
        readonly 700: "#0B7A5A";
        readonly 600: "#10B981";
        readonly 500: "#2FC89A";
        readonly 400: "#4FE0B0";
        readonly 300: "#6EE7B7";
    };
    readonly indigo: {
        readonly 900: "#1E1B4B";
        readonly 800: "#1E3A8A";
        readonly 700: "#1D4FBF";
        readonly 600: "#3B82F6";
        readonly 500: "#5C8DFF";
        readonly 400: "#7DA9FF";
        readonly 300: "#93C5FD";
    };
    readonly amber: {
        readonly 900: "#451A03";
        readonly 800: "#78350F";
        readonly 700: "#996A2E";
        readonly 600: "#F59E0B";
        readonly 500: "#FFB347";
        readonly 400: "#FFD580";
        readonly 300: "#FCD34D";
    };
    readonly rose: {
        readonly 900: "#4C0519";
        readonly 800: "#7F1D1D";
        readonly 700: "#8F3944";
        readonly 600: "#EF4444";
        readonly 500: "#E59AA6";
        readonly 400: "#F2C1C8";
        readonly 300: "#FCA5A5";
    };
    readonly alpha: {
        readonly white05: "rgba(255,255,255,.05)";
        readonly white08: "rgba(255,255,255,.08)";
        readonly white12: "rgba(255,255,255,.12)";
        readonly white16: "rgba(255,255,255,.16)";
        readonly black20: "rgba(0,0,0,.20)";
        readonly black40: "rgba(0,0,0,.40)";
        readonly violet20: "rgba(139,92,246,.20)";
        readonly violet30: "rgba(139,92,246,.30)";
        readonly teal20: "rgba(16,185,129,.20)";
        readonly amber20: "rgba(245,158,11,.20)";
        readonly rose20: "rgba(239,68,68,.20)";
    };
};
export declare const semanticColors: {
    readonly bg: {
        readonly page: "#0e1116";
        readonly surface1: "#0e0e0e";
        readonly surface2: "#1a1d23";
        readonly surface3: "#2a2a2a";
        readonly elevated: "#2a2a2a";
        readonly hover: "rgba(255,255,255,.05)";
        readonly selected: "rgba(255,255,255,.08)";
        readonly active: "rgba(255,255,255,.12)";
        readonly focus: "rgba(255,255,255,.16)";
        readonly scrim: "rgba(0,0,0,.20)";
        readonly strongScrim: "rgba(0,0,0,.40)";
    };
    readonly text: {
        readonly primary: "#FFFFFF";
        readonly secondary: "#CCCCCC";
        readonly tertiary: "#999999";
        readonly quaternary: "#666666";
        readonly disabled: "#666666";
        readonly onAccent: "#0A0A0A";
        readonly inverse: "#0A0A0A";
    };
    readonly border: {
        readonly subtle: "#3e444c";
        readonly default: "#555555";
        readonly strong: "#666666";
        readonly accent: "rgba(139,92,246,.20)";
        readonly focus: "rgba(139,92,246,.30)";
        readonly success: "rgba(16,185,129,.20)";
        readonly warning: "rgba(245,158,11,.20)";
        readonly error: "rgba(239,68,68,.20)";
    };
    readonly accent: {
        readonly brand: "#8B5CF6";
        readonly brandHover: "#7E52CF";
        readonly brandActive: "#6E3CBC";
        readonly brandLight: "#A78BFA";
        readonly brandDark: "#5B21B6";
        readonly success: "#10B981";
        readonly successHover: "#2FC89A";
        readonly successWeak: "#4FE0B0";
        readonly info: "#3B82F6";
        readonly infoHover: "#5C8DFF";
        readonly infoWeak: "#7DA9FF";
        readonly warning: "#F59E0B";
        readonly warningHover: "#FFB347";
        readonly warningWeak: "#FFD580";
        readonly danger: "#EF4444";
        readonly dangerHover: "#E59AA6";
        readonly dangerWeak: "#F2C1C8";
    };
    readonly focus: {
        readonly ring: "rgba(139,92,246,.30)";
        readonly inner: "rgba(255,255,255,.12)";
        readonly selection: "rgba(139,92,246,.20)";
    };
    readonly interactive: {
        readonly hover: "rgba(255,255,255,.05)";
        readonly active: "rgba(255,255,255,.08)";
        readonly selected: "rgba(139,92,246,.20)";
        readonly focus: "rgba(139,92,246,.30)";
    };
    readonly chart: {
        readonly 1: "#8B5CF6";
        readonly 2: "#2FC89A";
        readonly 3: "#5C8DFF";
        readonly 4: "#FFB347";
        readonly 5: "#E59AA6";
        readonly 6: "#A78BFA";
        readonly 7: "#4FE0B0";
        readonly 8: "#7DA9FF";
    };
};
export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
//# sourceMappingURL=colors.d.ts.map