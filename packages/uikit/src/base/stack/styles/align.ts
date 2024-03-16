import { css } from "goober";
import { cssMemo } from "../../../theme";
import { StackAlign } from "../types.public";

export const vAlign = cssMemo((align: StackAlign) =>
    css({
        justifyItems: align,
    }),
);

export const hAlign = cssMemo((align: StackAlign) =>
    css({
        alignItems: align,
    }),
);
