import { css } from "goober";
import { backgrounds, ColorBg, cssMemo, SizeSpace, spacing } from "../../theme";

export const text = css({
    textTransform: "none",
});

export const base = css({
    display: "grid",
    boxSizing: "border-box",
    overflow: "hidden",
    height: "max-content",
    width: "max-content",
    background: backgrounds[ColorBg.secondary].var,
    padding: `${spacing[SizeSpace.x075].var} ${spacing[SizeSpace.x100].var}`,
    borderRadius: spacing[SizeSpace.x200].var,
    [`.${text}`]: {
        textTransform: "none",
    },
});

export const color = cssMemo((value: ColorBg) => {
    return css({
        background: backgrounds[value].var,
    });
});
