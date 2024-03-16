import { cssMemo } from "../../../theme";
import { css } from "goober";

export const radius = cssMemo((padding: string) =>
    css({
        borderRadius: padding,
    }),
);
