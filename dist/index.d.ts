export * from './tokens/colors';
export declare const designTokens: {
    readonly colors: {
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
    readonly spacing: {
        readonly 'railway-xs': "0.125rem";
        readonly 'railway-sm': "0.25rem";
        readonly 'railway-md': "0.5rem";
        readonly 'railway-lg': "1rem";
        readonly 'railway-xl': "1.5rem";
        readonly 'railway-2xl': "2rem";
        readonly 'railway-3xl': "3rem";
        readonly 0: "0px";
        readonly 1: "4px";
        readonly 2: "8px";
        readonly 3: "12px";
        readonly 4: "16px";
        readonly 5: "20px";
        readonly 6: "24px";
        readonly 7: "28px";
        readonly 8: "32px";
        readonly 9: "36px";
        readonly 10: "40px";
        readonly 12: "48px";
        readonly 14: "56px";
        readonly 16: "64px";
        readonly 20: "80px";
        readonly 24: "96px";
        readonly 28: "112px";
        readonly 32: "128px";
    };
    readonly typography: {
        readonly fontFamily: {
            readonly sans: readonly ["Inter", "system-ui", "sans-serif"];
            readonly mono: readonly ["JetBrains Mono", "Fira Code", "monospace"];
        };
        readonly fontSize: {
            readonly xs: readonly ["12px", {
                readonly lineHeight: "16px";
            }];
            readonly sm: readonly ["14px", {
                readonly lineHeight: "20px";
            }];
            readonly base: readonly ["16px", {
                readonly lineHeight: "24px";
            }];
            readonly lg: readonly ["18px", {
                readonly lineHeight: "28px";
            }];
            readonly xl: readonly ["20px", {
                readonly lineHeight: "28px";
            }];
            readonly '2xl': readonly ["24px", {
                readonly lineHeight: "32px";
            }];
            readonly '3xl': readonly ["30px", {
                readonly lineHeight: "36px";
            }];
            readonly '4xl': readonly ["36px", {
                readonly lineHeight: "40px";
            }];
            readonly '5xl': readonly ["48px", {
                readonly lineHeight: "48px";
            }];
            readonly '6xl': readonly ["60px", {
                readonly lineHeight: "60px";
            }];
            readonly '7xl': readonly ["72px", {
                readonly lineHeight: "72px";
            }];
            readonly '8xl': readonly ["96px", {
                readonly lineHeight: "96px";
            }];
        };
        readonly fontWeight: {
            readonly normal: "400";
            readonly medium: "500";
            readonly semibold: "600";
            readonly bold: "700";
            readonly extrabold: "800";
        };
    };
    readonly borderRadius: {
        readonly 'railway-sm': "0.25rem";
        readonly 'railway-md': "0.375rem";
        readonly 'railway-lg': "0.5rem";
        readonly 'railway-xl': "0.75rem";
        readonly 'railway-2xl': "1rem";
        readonly 'railway-full': "9999px";
        readonly none: "0px";
        readonly sm: "2px";
        readonly base: "4px";
        readonly md: "6px";
        readonly lg: "8px";
        readonly xl: "12px";
        readonly '2xl': "16px";
        readonly '3xl': "24px";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly 'railway-sm': "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
        readonly 'railway-md': "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        readonly 'railway-lg': "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
        readonly 'railway-xl': "0 20px 25px -5px rgba(0, 0, 0, 0.1)";
        readonly 'railway-inner': "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)";
        readonly 'railway-elevated': "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        readonly sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
        readonly base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
        readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
        readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
        readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
        readonly '2xl': "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
        readonly inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)";
        readonly none: "none";
    };
    readonly transitions: {
        readonly 'railway-fast': "150ms ease-in-out";
        readonly 'railway-normal': "250ms ease-in-out";
        readonly 'railway-slow': "350ms ease-in-out";
        readonly fast: "150ms ease-in-out";
        readonly base: "200ms ease-in-out";
        readonly slow: "300ms ease-in-out";
        readonly slower: "500ms ease-in-out";
    };
};
export default designTokens;
//# sourceMappingURL=index.d.ts.map