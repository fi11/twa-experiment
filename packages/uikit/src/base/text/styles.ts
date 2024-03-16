import { css } from "goober";
import { ColorText, cssMemo, SizeSpace, SizeText, spacing, textColors, typography } from "../../theme";

export const styleView = cssMemo((size: SizeText) => {
    const isCaption = size === SizeText.caption1 || size === SizeText.caption2;
    return css({
        font: typography[size].var,
        color: textColors.body.var,
        textTransform: isCaption ? "uppercase" : "none",
    });
});

export const baseTextStyle = css`
    display: inline-flex;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    font-smooth: always;
    user-select: none;
    -webkit-user-select: none;
`;

export const inline = css({
    display: "inline",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    whiteSpace: "nowrap",
});

export const colors = cssMemo((color: ColorText) => {
    return css({
        color: textColors[color].var,
    });
});

export const indentStart = cssMemo((size: SizeSpace) => {
    return css({
        marginTop: spacing[size].var,
    });
});

export const indentEnd = cssMemo((size: SizeSpace) => {
    return css({
        marginBottom: spacing[size].var,
    });
});
