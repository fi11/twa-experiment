import { cssMemo } from "../../../theme";
import { css } from "goober";

export const spacing = cssMemo((padding: string) =>
    css({
        padding: padding,
    }),
);
