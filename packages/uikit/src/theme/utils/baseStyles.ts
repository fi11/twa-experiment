import { css, CSSAttribute } from "goober";
import { backgrounds, ColorBg, ColorText, SizeSpace, SizeText, spacing, textColors, typography } from "../index";
import { Align } from "../../types";
import { strongCss } from "./strongCss";

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
        width: "100%",
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
    strongCss({
        backgroundColor: backgrounds[color].var,
    }),
);

export const inlineAlign = cssMemo((align: Align) =>
    strongCss({
        alignItems: align,
    }),
);

export const blockAlign = cssMemo((align: Align) =>
    strongCss({
        justifyContent: align,
    }),
);

const spacingAll = cssMemo((size: SizeSpace) => {
    return strongCss({
        padding: spacing[size].var,
    });
});

const vSpacingStart = cssMemo((size: SizeSpace) =>
    strongCss({
        paddingTop: spacing[size].var,
    }),
);

const vSpacingEnd = cssMemo((size: SizeSpace) =>
    strongCss({
        paddingBottom: spacing[size].var,
    }),
);

const vSpacing = cssMemo((size: SizeSpace) =>
    strongCss({
        paddingTop: spacing[size].var,
        paddingBottom: spacing[size].var,
    }),
);

const hSpacing = cssMemo((size: SizeSpace) =>
    strongCss({
        paddingLeft: spacing[size].var,
        paddingRight: spacing[size].var,
    }),
);

const hSpacingStart = cssMemo((size: SizeSpace) =>
    strongCss({
        paddingLeft: spacing[size].var,
    }),
);

const hSpacingEnd = cssMemo((size: SizeSpace) =>
    strongCss({
        paddingRight: spacing[size].var,
    }),
);

const vIndentStart = cssMemo((size: SizeSpace) => {
    return strongCss({
        marginTop: spacing[size].var,
    });
});

const vIndentEnd = cssMemo((size: SizeSpace) => {
    return strongCss({
        marginBottom: spacing[size].var,
    });
});

const hIndentStart = cssMemo((size: SizeSpace) => {
    return strongCss({
        marginLeft: spacing[size].var,
    });
});

const hIndentEnd = cssMemo((size: SizeSpace) => {
    return strongCss({
        marginRight: spacing[size].var,
    });
});

const hIndent = cssMemo((size: SizeSpace) => {
    return strongCss({
        marginLeft: spacing[size].var,
        marginRight: spacing[size].var,
    });
});

const vIndent = cssMemo((size: SizeSpace) => {
    return strongCss({
        marginTop: spacing[size].var,
        marginLeft: spacing[size].var,
    });
});

const radius = cssMemo((value: SizeSpace) =>
    strongCss({
        borderRadius: spacing[value].var,
    }),
);

const vAlign = cssMemo((value: Align) =>
    strongCss({
        justifyContent: value,
    }),
);

const hAlign = cssMemo((value: Align) =>
    strongCss({
        alignItems: value,
    }),
);

const scroll = cssMemo((direction: "v" | "h") => {
    return strongCss({
        [direction === "v" ? "overflowY" : "overflowX"]: "auto",
    });
});

const outline = cssMemo((color: ColorBg) => {
    return strongCss({
        border: `1px solid ${backgrounds[color].var}`,
    });
});

const gap = cssMemo((space: SizeSpace) =>
    strongCss({
        gap: spacing[space].var,
    }),
);

const text = cssMemo((size: SizeText) => {
    const isCaption = size === SizeText.caption1 || size === SizeText.caption2;
    return strongCss({
        font: typography[size].var,
        color: textColors.body.var,
        textTransform: isCaption ? "uppercase" : "none",
    });
});

const colorText = cssMemo((color: ColorText) => {
    return strongCss({
        color: textColors[color].var,
    });
});

export const st = {
    // flex,
    box,
    colorBg,
    colorText,
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
    text,
};
