import { css } from "goober";
import { backgrounds, ColorBg, ColorText, cssMemo, SizeSpace, spacing, textColors } from "../../theme";
import { IconView } from "./types.public";
import { ColorsSys, systemColors } from "../../theme/systemColors";

export const base = css({
    display: "inline-flex",
    boxSizing: "border-box",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    ["svg"]: {
        width: "100%",
        height: "100%",
        display: "flex",
        color: "currentColor",
    },
});

export const size = cssMemo((size: SizeSpace) => {
    return css({
        width: spacing[size].var,
        height: spacing[size].var,
    });
});

export const color = cssMemo((color: ColorText) => {
    return css({
        color: textColors[color].var,
    });
});

export const view = cssMemo((view: IconView) => {
    switch (view) {
        case IconView.squad:
            return css({
                borderRadius: "20%",
                background: backgrounds[ColorBg.button].var,
                color: "#fff",
                ["svg"]: {
                    width: "85%",
                    height: "85%",
                },
            });
        default:
            return "";
    }
});

export const squad = cssMemo((color: ColorsSys) => {
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
