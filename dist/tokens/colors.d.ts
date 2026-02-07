export declare const colors: {
    readonly graphite: {
        readonly 1000: "#100E10";
        readonly 950: "#151214";
        readonly 900: "#181416";
        readonly 850: "#1D181B";
        readonly 800: "#221C1F";
        readonly 750: "#282226";
        readonly 700: "#2F282C";
        readonly 600: "#3A3136";
        readonly 500: "#4A3E45";
        readonly 400: "#5F5059";
    };
    readonly white: {
        readonly 1000: "#F5F2F1";
        readonly 950: "#ECE7E5";
    };
    readonly gray: {
        readonly 200: "#D7CFCC";
        readonly 300: "#BEB4B0";
        readonly 400: "#9F918C";
        readonly 500: "#7F736F";
        readonly 600: "#615854";
        readonly 700: "#463F3C";
        readonly 800: "#2B2624";
    };
    readonly violet: {
        readonly 900: "#463F3C";
        readonly 800: "#615854";
        readonly 700: "#7F736F";
        readonly 600: "#9F918C";
        readonly 500: "#D7CFCC";
        readonly 400: "#ECE7E5";
        readonly 300: "#F5F2F1";
        readonly 200: "#FFFFFF";
    };
    readonly teal: {
        readonly 900: "#463F3C";
        readonly 800: "#615854";
        readonly 700: "#7F736F";
        readonly 600: "#9F918C";
        readonly 500: "#D7CFCC";
        readonly 400: "#ECE7E5";
        readonly 300: "#F5F2F1";
    };
    readonly indigo: {
        readonly 900: "#463F3C";
        readonly 800: "#615854";
        readonly 700: "#7F736F";
        readonly 600: "#9F918C";
        readonly 500: "#D7CFCC";
        readonly 400: "#ECE7E5";
        readonly 300: "#F5F2F1";
    };
    readonly amber: {
        readonly 900: "#463F3C";
        readonly 800: "#615854";
        readonly 700: "#7F736F";
        readonly 600: "#9F918C";
        readonly 500: "#D7CFCC";
        readonly 400: "#ECE7E5";
        readonly 300: "#F5F2F1";
    };
    readonly rose: {
        readonly 900: "#463F3C";
        readonly 800: "#615854";
        readonly 700: "#7F736F";
        readonly 600: "#9F918C";
        readonly 500: "#D7CFCC";
        readonly 400: "#ECE7E5";
        readonly 300: "#F5F2F1";
    };
    readonly alpha: {
        readonly white05: "rgba(255,255,255,.05)";
        readonly white08: "rgba(255,255,255,.08)";
        readonly white12: "rgba(255,255,255,.12)";
        readonly white16: "rgba(255,255,255,.16)";
        readonly black20: "rgba(0,0,0,.20)";
        readonly black40: "rgba(0,0,0,.40)";
        readonly violet24: "rgba(245,242,241,.24)";
        readonly teal24: "rgba(215,207,204,.24)";
        readonly violet20: "rgba(245,242,241,.20)";
        readonly violet30: "rgba(245,242,241,.30)";
        readonly teal20: "rgba(215,207,204,.20)";
        readonly amber20: "rgba(159,145,140,.20)";
        readonly rose20: "rgba(127,115,111,.20)";
    };
};
export declare const semanticColors: {
    readonly bg: {
        readonly page: "#181416";
        readonly surface1: "#221C1F";
        readonly surface2: "#2F282C";
        readonly surface3: "#2F282C";
        readonly elevated: "#2F282C";
        readonly hover: "rgba(255,255,255,.08)";
        readonly selected: "rgba(255,255,255,.12)";
        readonly active: "rgba(255,255,255,.12)";
        readonly focus: "rgba(255,255,255,.16)";
        readonly scrim: "rgba(0,0,0,.20)";
        readonly strongScrim: "rgba(0,0,0,.40)";
        readonly background: "#181416";
        readonly secondaryBg: "#221C1F";
        readonly tertiaryBg: "#2F282C";
    };
    readonly text: {
        readonly primary: "#F5F2F1";
        readonly secondary: "#D7CFCC";
        readonly tertiary: "#9F918C";
        readonly quaternary: "#7F736F";
        readonly disabled: "#7F736F";
        readonly onAccent: "#100E10";
        readonly inverse: "#100E10";
        readonly success: "#BEB4B0";
        readonly muted: "#9F918C";
    };
    readonly border: {
        readonly subtle: "#3A3136";
        readonly default: "#4A3E45";
        readonly strong: "#5F5059";
        readonly accent: "rgba(245,242,241,.24)";
        readonly focus: "rgba(245,242,241,.30)";
        readonly success: "rgba(215,207,204,.24)";
        readonly warning: "rgba(159,145,140,.20)";
        readonly error: "rgba(127,115,111,.20)";
        readonly gray100: "#3A3136";
        readonly pink400: "#9F918C";
    };
    readonly accent: {
        readonly brand: "#D7CFCC";
        readonly brandHover: "#F5F2F1";
        readonly brandActive: "#BEB4B0";
        readonly brandLight: "#ECE7E5";
        readonly brandDark: "#9F918C";
        readonly success: "#BEB4B0";
        readonly successHover: "#D7CFCC";
        readonly successWeak: "#9F918C";
        readonly info: "#9F918C";
        readonly infoHover: "#BEB4B0";
        readonly infoWeak: "#7F736F";
        readonly warning: "#7F736F";
        readonly warningHover: "#9F918C";
        readonly warningWeak: "#615854";
        readonly danger: "#615854";
        readonly dangerHover: "#7F736F";
        readonly dangerWeak: "#463F3C";
        readonly pink700: "#615854";
    };
    readonly focus: {
        readonly ring: "rgba(240,246,252,.25)";
        readonly inner: "rgba(255,255,255,.12)";
        readonly selection: "rgba(245,242,241,.24)";
        readonly visible: "#D7CFCC";
    };
    readonly interactive: {
        readonly hover: "rgba(255,255,255,.08)";
        readonly active: "rgba(255,255,255,.12)";
        readonly selected: "rgba(245,242,241,.24)";
        readonly focus: "rgba(245,242,241,.30)";
        readonly hoverBg: "#221C1F";
        readonly hoverDark: "#2F282C";
    };
    readonly chart: {
        readonly 1: "#D7CFCC";
        readonly 2: "#BEB4B0";
        readonly 3: "#9F918C";
        readonly 4: "#7F736F";
        readonly 5: "#615854";
        readonly 6: "#BEB4B0";
        readonly 7: "#9F918C";
        readonly 8: "#7F736F";
    };
};
export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
//# sourceMappingURL=colors.d.ts.map