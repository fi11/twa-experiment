import { cssMemo } from "../../../theme";
import { css } from "goober";

export const hAlign = cssMemo((align: string) =>
    css({
        justifyContent: align,
    }),
);
