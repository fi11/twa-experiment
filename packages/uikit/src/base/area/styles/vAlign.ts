import { cssMemo } from "../../../theme";
import { css } from "goober";

export const vAlign = cssMemo((align: string) =>
    css({
        alignItems: align,
    }),
);
