import { css, CSSAttribute } from "goober";
import { backgrounds, ColorBg, SizeSpace, spacing } from "../index";
import { Align } from "../types";
import { normalCss } from "./normalCss";
import { ColorsSys, systemColors } from "../systemColors";

function cssMemo<T extends string | number>(fn: (value: T) => string) {
    const memory: Record<string | number, string> = {};
    return function momomize(value: T | undefined | null, condition?: boolean) {
        if (value === undefined || value === null || condition === false) {
            return "";
        }
        const prev = memory[value];
        if (prev) {
            return prev;
        }
        const result = fn(value);
        memory[value] = result;
        return result;
    };
}

const box = cssMemo((type: "block" | "inline") => {
    const value: CSSAttribute = {
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "start",
        alignItems: "start",
        flexShrink: 0,
        minHeight: 0,
        flexDirection: "column",
        position: "relative",
        overflowX: "hidden",
        overflowY: "hidden",
        height: "auto",
        width: "auto",
        alignSelf: "stretch",
    };

    if (type === "inline") {
        Object.assign(value, {
            display: "inline-flex",
            width: "auto",
        });
    }

    return css(value);
});

const colorBg = cssMemo((color: ColorBg) =>
    normalCss({
        backgroundColor: backgrounds[color].var,
    }),
);

export const inlineAlign = cssMemo((align: Align) =>
    normalCss({
        alignItems: align,
    }),
);

export const blockAlign = cssMemo((align: Align) =>
    normalCss({
        justifyContent: align,
    }),
);

const spacingAll = cssMemo((size: SizeSpace) => {
    return normalCss({
        padding: spacing[size].var,
    });
});

const vSpacingStart = cssMemo((size: SizeSpace) =>
    normalCss({
        paddingTop: spacing[size].var,
    }),
);

const vSpacingEnd = cssMemo((size: SizeSpace) =>
    normalCss({
        paddingBottom: spacing[size].var,
    }),
);

const vSpacing = cssMemo((size: SizeSpace) =>
    normalCss({
        paddingTop: spacing[size].var,
        paddingBottom: spacing[size].var,
    }),
);

const hSpacing = cssMemo((size: SizeSpace) =>
    normalCss({
        paddingLeft: spacing[size].var,
        paddingRight: spacing[size].var,
    }),
);

const hSpacingStart = cssMemo((size: SizeSpace) =>
    normalCss({
        paddingLeft: spacing[size].var,
    }),
);

const hSpacingEnd = cssMemo((size: SizeSpace) =>
    normalCss({
        paddingRight: spacing[size].var,
    }),
);

const vIndentStart = cssMemo((size: SizeSpace) => {
    return normalCss({
        marginTop: spacing[size].var,
    });
});

const vIndentEnd = cssMemo((size: SizeSpace) => {
    return normalCss({
        marginBottom: spacing[size].var,
    });
});

const hIndentStart = cssMemo((size: SizeSpace) => {
    return normalCss({
        marginLeft: spacing[size].var,
    });
});

const hIndentEnd = cssMemo((size: SizeSpace) => {
    return normalCss({
        marginRight: spacing[size].var,
    });
});

const hIndent = cssMemo((size: SizeSpace) => {
    return normalCss({
        marginLeft: spacing[size].var,
        marginRight: spacing[size].var,
    });
});

const vIndent = cssMemo((size: SizeSpace) => {
    return normalCss({
        marginTop: spacing[size].var,
        marginLeft: spacing[size].var,
    });
});

const radius = cssMemo((value: SizeSpace) =>
    normalCss({
        borderRadius: spacing[value].var,
    }),
);

const vAlign = cssMemo((value: Align) =>
    normalCss({
        justifyContent: value,
    }),
);

const hAlign = cssMemo((value: Align) =>
    normalCss({
        alignItems: value,
    }),
);

const scroll = cssMemo((direction: "v" | "h") => {
    return normalCss({
        [direction === "v" ? "overflowY" : "overflowX"]: "auto",
        pointerEvents: "auto",
        scrollbarWidth: "none",
        scrollbarColor: "rgba(0, 0, 0, 0) rgba(0, 0, 0, 0)",
        ["--webkit-overflow-scrolling"]: "smooth",
        ["&::-webkit-scrollbar"]: {
            display: "none",
        },
    });
});

const outline = cssMemo((color: ColorBg) => {
    return normalCss({
        border: `1px solid ${backgrounds[color].var}`,
    });
});

const gap = cssMemo((space: SizeSpace) =>
    normalCss({
        gap: spacing[space].var,
    }),
);

const overlay = cssMemo((opacity: number) => {
    return normalCss({
        position: "absolute",
        inset: 0,
        background: `rgba(0, 0, 0, ${opacity})`,
    });
});

export const iconSquare = cssMemo((color: ColorsSys) => {
    return css({
        borderRadius: "20%",
        background: systemColors[color].var,
        color: "#fff",
        ["svg"]: {
            width: "90%",
            height: "90%",
        },
    });
});

export const st = {
    // flex,
    box,
    colorBg,
    spacing: spacingAll,
    radius,
    scroll,
    inlineAlign,
    blockAlign,
    vSpacing,
    vSpacingEnd,
    vSpacingStart,
    hSpacing,
    hSpacingEnd,
    hSpacingStart,
    vIndent,
    vIndentStart,
    vIndentEnd,
    hIndent,
    hIndentStart,
    hIndentEnd,
    vAlign,
    hAlign,
    outline,
    gap,
    overlay,
    iconSquare,
};
