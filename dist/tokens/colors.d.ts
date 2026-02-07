export declare const colors: {
    readonly graphite: {
        readonly 1000: "#0D1117";
        readonly 950: "#0D1117";
        readonly 900: "#0D1117";
        readonly 850: "#161B22";
        readonly 800: "#161B22";
        readonly 750: "#21262D";
        readonly 700: "#21262D";
        readonly 600: "#30363D";
        readonly 500: "#484F58";
        readonly 400: "#6E7681";
    };
    readonly white: {
        readonly 1000: "#F0F6FC";
        readonly 950: "#E6EDF3";
    };
    readonly gray: {
        readonly 200: "#C9D1D9";
        readonly 300: "#B1BAC4";
        readonly 400: "#8B949E";
        readonly 500: "#6E7681";
        readonly 600: "#484F58";
        readonly 700: "#30363D";
        readonly 800: "#21262D";
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
        readonly page: "#0D1117";
        readonly surface1: "#161B22";
        readonly surface2: "#21262D";
        readonly surface3: "#21262D";
        readonly elevated: "#21262D";
        readonly hover: "rgba(255,255,255,.08)";
        readonly selected: "rgba(255,255,255,.12)";
        readonly active: "rgba(255,255,255,.12)";
        readonly focus: "rgba(255,255,255,.16)";
        readonly scrim: "rgba(0,0,0,.20)";
        readonly strongScrim: "rgba(0,0,0,.40)";
        readonly background: "#0D1117";
        readonly secondaryBg: "#161B22";
        readonly tertiaryBg: "#21262D";
    };
    readonly text: {
        readonly primary: "#F0F6FC";
        readonly secondary: "#C9D1D9";
        readonly tertiary: "#8B949E";
        readonly quaternary: "#6E7681";
        readonly disabled: "#6E7681";
        readonly onAccent: "#0D1117";
        readonly inverse: "#0D1117";
        readonly success: "#B1BAC4";
        readonly muted: "#8B949E";
    };
    readonly border: {
        readonly subtle: "#30363D";
        readonly default: "#484F58";
        readonly strong: "#6E7681";
        readonly accent: "rgba(240,246,252,.24)";
        readonly focus: "rgba(240,246,252,.30)";
        readonly success: "rgba(201,209,217,.24)";
        readonly warning: "rgba(139,148,158,.20)";
        readonly error: "rgba(110,118,129,.20)";
        readonly gray100: "#30363D";
        readonly pink400: "#8B949E";
    };
    readonly accent: {
        readonly brand: "#C9D1D9";
        readonly brandHover: "#F0F6FC";
        readonly brandActive: "#B1BAC4";
        readonly brandLight: "#E6EDF3";
        readonly brandDark: "#8B949E";
        readonly success: "#B1BAC4";
        readonly successHover: "#C9D1D9";
        readonly successWeak: "#8B949E";
        readonly info: "#8B949E";
        readonly infoHover: "#B1BAC4";
        readonly infoWeak: "#6E7681";
        readonly warning: "#6E7681";
        readonly warningHover: "#8B949E";
        readonly warningWeak: "#484F58";
        readonly danger: "#484F58";
        readonly dangerHover: "#6E7681";
        readonly dangerWeak: "#30363D";
        readonly pink700: "#484F58";
    };
    readonly focus: {
        readonly ring: "rgba(240,246,252,.25)";
        readonly inner: "rgba(255,255,255,.12)";
        readonly selection: "rgba(240,246,252,.24)";
        readonly visible: "#C9D1D9";
    };
    readonly interactive: {
        readonly hover: "rgba(255,255,255,.08)";
        readonly active: "rgba(255,255,255,.12)";
        readonly selected: "rgba(240,246,252,.24)";
        readonly focus: "rgba(240,246,252,.30)";
        readonly hoverBg: "#161B22";
        readonly hoverDark: "#21262D";
    };
    readonly chart: {
        readonly 1: "#C9D1D9";
        readonly 2: "#B1BAC4";
        readonly 3: "#8B949E";
        readonly 4: "#6E7681";
        readonly 5: "#484F58";
        readonly 6: "#B1BAC4";
        readonly 7: "#8B949E";
        readonly 8: "#6E7681";
    };
};
export type ColorToken = keyof typeof semanticColors;
export type ColorValue = typeof semanticColors[ColorToken];
//# sourceMappingURL=colors.d.ts.map