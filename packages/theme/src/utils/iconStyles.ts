import { ColorsSys, systemColors } from "../systemColors";
import { cssMemo } from "./cssMemo";
import { normalCss } from "./normalCss";
import { SizeSpace } from "../types";
import { spacing } from "../spacing";

export const square = cssMemo((color: ColorsSys) => {
    return normalCss({
        borderRadius: "20%",
        background: systemColors[color].var,
        color: "#fff",
        ["svg"]: {
            width: "90%",
            height: "90%",
        },
    });
});

export const size = cssMemo((size: SizeSpace) => {
    return normalCss({
        width: spacing[size].var,
        height: spacing[size].var,
    });
});
export const iconStyles = {
    square,
    size,
};
