import { AreaProps } from "./types.public";
import { SizeSpace, spacing } from "../../theme";

function isSpacingSize(value: AreaProps["spacing"]): value is SizeSpace {
    return typeof value === "string";
}
export function buildPadding(value: AreaProps["spacing"]): string | null {
    if (!value) {
        return null;
    }
    if (isSpacingSize(value)) {
        return spacing[value].var;
    }

    const tKey = value.top || value.vertical;
    const bKey = value.bottom || value.vertical;
    const lKey = value.left || value.horizontal;
    const rKey = value.right || value.horizontal;

    const top = tKey ? spacing[tKey].var : 0;
    const bottom = bKey ? spacing[bKey].var : 0;
    const left = lKey ? spacing[lKey].var : 0;
    const right = rKey ? spacing[rKey].var : 0;

    return `${top} ${right} ${bottom} ${left}`;
}
