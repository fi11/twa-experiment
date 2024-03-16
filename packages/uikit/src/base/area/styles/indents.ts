import { cssMemo } from "../../../theme";
import { css } from "goober";
import { AreaSpacing } from "../types.public";
import { spacing, SizeSpace } from "../../../theme";

export const indentTop = cssMemo((size: SizeSpace) => {
    return css({
        marginTop: spacing[size].var,
    });
});
export const indentBottom = cssMemo((size: SizeSpace) => {
    return css({
        marginBottom: spacing[size].var,
    });
});

export const indentLeft = cssMemo((size: SizeSpace) => {
    return css({
        marginLeft: spacing[size].var,
    });
});

export const indentRight = cssMemo((size: SizeSpace) => {
    return css({
        marginRight: spacing[size].var,
    });
});
