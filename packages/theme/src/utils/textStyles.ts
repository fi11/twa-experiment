import { cssMemo } from "./cssMemo";
import { normalCss } from "./normalCss";
import { ColorText, SizeText } from "../types";
import { textColors } from "../textColors";
import { typography } from "../typography";

const colorText = cssMemo((color: ColorText) => {
    return normalCss({
        color: textColors[color].var,
    });
});

const font = cssMemo((size: SizeText) => {
    const isCaption = size === SizeText.caption1 || size === SizeText.caption2;
    return normalCss({
        font: typography[size].var,
        color: textColors.body.var,
        textTransform: isCaption ? "uppercase" : "none",
    });
});

export const textStyles = {
    color: colorText,
    font,
};
