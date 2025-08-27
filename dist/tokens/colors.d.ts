export declare const colors: {
    readonly graphite: {
        readonly 1000: "#0E0B12";
        readonly 950: "#140F1B";
        readonly 900: "#1A1523";
        readonly 850: "#1F182A";
        readonly 800: "#221B2E";
        readonly 750: "#261E33";
        readonly 700: "#2B2239";
        readonly 600: "#342A45";
        readonly 500: "#413455";
        readonly 400: "#4E4064";
    };
    readonly white: {
        readonly 1000: "#F5F5F7";
        readonly 950: "#F5F5F7";
    };
    readonly gray: {
        readonly 200: "#E5E5E5";
        readonly 300: "#C8C8CC";
        readonly 400: "#A9A9B0";
        readonly 500: "#7A7A82";
        readonly 600: "#5A5A62";
        readonly 700: "#3e444c";
        readonly 800: "#1a1d23";
    };
    readonly violet: {
        readonly 900: "#4C1D95";
        readonly 800: "#5B21B6";
        readonly 700: "#6E3CBC";
        readonly 600: "#7E52CF";
        readonly 500: "#9D6CFF";
        readonly 400: "#B99CFF";
        readonly 300: "#C4B5FD";
        readonly 200: "#DDD6FE";
    };
    readonly teal: {
        readonly 900: "#064E3B";
        readonly 800: "#065F46";
        readonly 700: "#0B7A5A";
        readonly 600: "#00A676";
        readonly 500: "#2FC89A";
        readonly 400: "#4FE0B0";
        readonly 300: "#6EE7B7";
    };
    readonly indigo: {
        readonly 900: "#1E1B4B";
        readonly 800: "#1E3A8A";
        readonly 700: "#1D4FBF";
        readonly 600: "#2C6FFF";
        readonly 500: "#5C8DFF";
        readonly 400: "#7DA9FF";
        readonly 300: "#93C5FD";
    };
    readonly amber: {
        readonly 900: "#451A03";
        readonly 800: "#78350F";
        readonly 700: "#996A2E";
        readonly 600: "#D7943A";
        readonly 500: "#FFB347";
        readonly 400: "#FFD580";
        readonly 300: "#FCD34D";
    };
    readonly rose: {
        readonly 900: "#4C0519";
        readonly 800: "#7F1D1D";
        readonly 700: "#8F3944";
        readonly 600: "#C65B6A";
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
        readonly violet24: "rgba(157,108,255,.24)";
        readonly teal24: "rgba(47,200,154,.24)";
        readonly violet20: "rgba(139,92,246,.20)";
        readonly violet30: "rgba(139,92,246,.30)";
        readonly teal20: "rgba(16,185,129,.20)";
        readonly amber20: "rgba(245,158,11,.20)";
        readonly rose20: "rgba(239,68,68,.20)";
    };
};
export declare const semanticColors: {
    readonly bg: {
        readonly page: "#1A1523";
        readonly surface1: "#221B2E";
        readonly surface2: "#2B2239";
        readonly surface3: "#2B2239";
        readonly elevated: "#2B2239";
        readonly hover: "rgba(255,255,255,.08)";
        readonly selected: "rgba(255,255,255,.12)";
        readonly active: "rgba(255,255,255,.12)";
        readonly focus: "rgba(255,255,255,.16)";
        readonly scrim: "rgba(0,0,0,.20)";
        readonly strongScrim: "rgba(0,0,0,.40)";
        readonly background: "#1A1523";
        readonly secondaryBg: "#221B2E";
        readonly tertiaryBg: "#2B2239";
    };
    readonly text: {
        readonly primary: "#F5F5F7";
        readonly secondary: "#C8C8CC";
        readonly tertiary: "#A9A9B0";
        readonly quaternary: "#7A7A82";
        readonly disabled: "#7A7A82";
        readonly onAccent: "#0E0B12";
        readonly inverse: "#0E0B12";
        readonly success: "#00A676";
        readonly muted: "#A9A9B0";
    };
    readonly border: {
        readonly subtle: "#342A45";
        readonly default: "#413455";
        readonly strong: "#4E4064";
        readonly accent: "rgba(157,108,255,.24)";
        readonly focus: "rgba(139,92,246,.30)";
        readonly success: "rgba(47,200,154,.24)";
        readonly warning: "rgba(245,158,11,.20)";
        readonly error: "rgba(239,68,68,.20)";
        readonly gray100: "#342A45";
        readonly pink400: "#9D6CFF";
    };
    readonly accent: {
        readonly brand: "#6E3CBC";
        readonly brandHover: "#9D6CFF";
        readonly brandActive: "#6E3CBC";
        readonly brandLight: "#B99CFF";
        readonly brandDark: "#5B21B6";
        readonly success: "#00A676";
        readonly successHover: "#2FC89A";
        readonly successWeak: "#4FE0B0";
        readonly info: "#2C6FFF";
        readonly infoHover: "#5C8DFF";
        readonly infoWeak: "#7DA9FF";
        readonly warning: "#FFB347";
        readonly warningHover: "#FFB347";
        readonly warningWeak: "#FFD580";
        readonly danger: "#C65B6A";
        readonly dangerHover: "#E59AA6";
        readonly dangerWeak: "#F2C1C8";
        readonly pink700: "#7E52CF";
    };
    readonly focus: {
        readonly ring: "rgba(157,108,255,.25)";
        readonly inner: "rgba(255,255,255,.12)";
        readonly selection: "rgba(157,108,255,.24)";
        readonly visible: "#7E52CF";
    };
    readonly interactive: {
        readonly hover: "rgba(255,255,255,.08)";
        readonly active: "rgba(255,255,255,.12)";
        readonly selected: "rgba(157,108,255,.24)";
        readonly focus: "rgba(139,92,246,.30)";
        readonly hoverBg: "#221B2E";
        readonly hoverDark: "#2B2239";
    };
    readonly chart: {
        readonly 1: "#9D6CFF";
        readonly 2: "#2FC89A";
        readonly 3: "#5C8DFF";
        readonly 4: "#FFB347";
        readonly 5: "#E59AA6";
        readonly 6: "#B99CFF";
        readonly 7: "#4FE0B0";
        readonly 8: "#7DA9FF";
    };
};
export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
//# sourceMappingURL=colors.d.ts.map