export declare const colors: {
    readonly graphite: {
        readonly 1000: "#0F0B12";
        readonly 950: "#140F17";
        readonly 900: "#16111C";
        readonly 850: "#1B1523";
        readonly 800: "#20192A";
        readonly 750: "#261E33";
        readonly 700: "#2C223A";
        readonly 600: "#382C4A";
        readonly 500: "#46365C";
        readonly 400: "#5A4972";
    };
    readonly white: {
        readonly 1000: "#F6F2F8";
        readonly 950: "#EDE7F1";
    };
    readonly gray: {
        readonly 200: "#D6CBD8";
        readonly 300: "#BDB2C3";
        readonly 400: "#9A8DA3";
        readonly 500: "#7B6F86";
        readonly 600: "#5F556D";
        readonly 700: "#453C52";
        readonly 800: "#251F2D";
    };
    readonly violet: {
        readonly 900: "#30363D";
        readonly 800: "#484F58";
        readonly 700: "#6E7681";
        readonly 600: "#8B949E";
        readonly 500: "#C9D1D9";
        readonly 400: "#E6EDF3";
        readonly 300: "#F0F6FC";
        readonly 200: "#FFFFFF";
    };
    readonly teal: {
        readonly 900: "#30363D";
        readonly 800: "#484F58";
        readonly 700: "#6E7681";
        readonly 600: "#8B949E";
        readonly 500: "#C9D1D9";
        readonly 400: "#E6EDF3";
        readonly 300: "#F0F6FC";
    };
    readonly indigo: {
        readonly 900: "#30363D";
        readonly 800: "#484F58";
        readonly 700: "#6E7681";
        readonly 600: "#8B949E";
        readonly 500: "#C9D1D9";
        readonly 400: "#E6EDF3";
        readonly 300: "#F0F6FC";
    };
    readonly amber: {
        readonly 900: "#30363D";
        readonly 800: "#484F58";
        readonly 700: "#6E7681";
        readonly 600: "#8B949E";
        readonly 500: "#C9D1D9";
        readonly 400: "#E6EDF3";
        readonly 300: "#F0F6FC";
    };
    readonly rose: {
        readonly 900: "#30363D";
        readonly 800: "#484F58";
        readonly 700: "#6E7681";
        readonly 600: "#8B949E";
        readonly 500: "#C9D1D9";
        readonly 400: "#E6EDF3";
        readonly 300: "#F0F6FC";
    };
    readonly alpha: {
        readonly white05: "rgba(255,255,255,.05)";
        readonly white08: "rgba(255,255,255,.08)";
        readonly white12: "rgba(255,255,255,.12)";
        readonly white16: "rgba(255,255,255,.16)";
        readonly black20: "rgba(0,0,0,.20)";
        readonly black40: "rgba(0,0,0,.40)";
        readonly violet24: "rgba(240,246,252,.24)";
        readonly teal24: "rgba(201,209,217,.24)";
        readonly violet20: "rgba(240,246,252,.20)";
        readonly violet30: "rgba(240,246,252,.30)";
        readonly teal20: "rgba(201,209,217,.20)";
        readonly amber20: "rgba(139,148,158,.20)";
        readonly rose20: "rgba(110,118,129,.20)";
    };
};
export declare const semanticColors: {
    readonly bg: {
        readonly page: "#16111C";
        readonly surface1: "#20192A";
        readonly surface2: "#2C223A";
        readonly surface3: "#2C223A";
        readonly elevated: "#2C223A";
        readonly hover: "rgba(255,255,255,.08)";
        readonly selected: "rgba(255,255,255,.12)";
        readonly active: "rgba(255,255,255,.12)";
        readonly focus: "rgba(255,255,255,.16)";
        readonly scrim: "rgba(0,0,0,.20)";
        readonly strongScrim: "rgba(0,0,0,.40)";
        readonly background: "#16111C";
        readonly secondaryBg: "#20192A";
        readonly tertiaryBg: "#2C223A";
    };
    readonly text: {
        readonly primary: "#F6F2F8";
        readonly secondary: "#D6CBD8";
        readonly tertiary: "#9A8DA3";
        readonly quaternary: "#7B6F86";
        readonly disabled: "#7B6F86";
        readonly onAccent: "#0F0B12";
        readonly inverse: "#0F0B12";
        readonly success: "#BDB2C3";
        readonly muted: "#9A8DA3";
    };
    readonly border: {
        readonly subtle: "#382C4A";
        readonly default: "#46365C";
        readonly strong: "#5A4972";
        readonly accent: "rgba(240,246,252,.24)";
        readonly focus: "rgba(240,246,252,.30)";
        readonly success: "rgba(201,209,217,.24)";
        readonly warning: "rgba(139,148,158,.20)";
        readonly error: "rgba(110,118,129,.20)";
        readonly gray100: "#382C4A";
        readonly pink400: "#9A8DA3";
    };
    readonly accent: {
        readonly brand: "#D6CBD8";
        readonly brandHover: "#F6F2F8";
        readonly brandActive: "#BDB2C3";
        readonly brandLight: "#EDE7F1";
        readonly brandDark: "#9A8DA3";
        readonly success: "#BDB2C3";
        readonly successHover: "#D6CBD8";
        readonly successWeak: "#9A8DA3";
        readonly info: "#9A8DA3";
        readonly infoHover: "#BDB2C3";
        readonly infoWeak: "#7B6F86";
        readonly warning: "#7B6F86";
        readonly warningHover: "#9A8DA3";
        readonly warningWeak: "#5F556D";
        readonly danger: "#5F556D";
        readonly dangerHover: "#7B6F86";
        readonly dangerWeak: "#453C52";
        readonly pink700: "#5F556D";
    };
    readonly focus: {
        readonly ring: "rgba(240,246,252,.25)";
        readonly inner: "rgba(255,255,255,.12)";
        readonly selection: "rgba(240,246,252,.24)";
        readonly visible: "#D6CBD8";
    };
    readonly interactive: {
        readonly hover: "rgba(255,255,255,.08)";
        readonly active: "rgba(255,255,255,.12)";
        readonly selected: "rgba(240,246,252,.24)";
        readonly focus: "rgba(240,246,252,.30)";
        readonly hoverBg: "#20192A";
        readonly hoverDark: "#2C223A";
    };
    readonly chart: {
        readonly 1: "#D6CBD8";
        readonly 2: "#BDB2C3";
        readonly 3: "#9A8DA3";
        readonly 4: "#7B6F86";
        readonly 5: "#5F556D";
        readonly 6: "#BDB2C3";
        readonly 7: "#9A8DA3";
        readonly 8: "#7B6F86";
    };
};
export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
//# sourceMappingURL=colors.d.ts.map