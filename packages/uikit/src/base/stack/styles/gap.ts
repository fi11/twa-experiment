import { css } from "goober";
import { cssMemo } from "../../../theme";
import { spacing, SizeSpace } from "../../../theme";

export const gap = cssMemo((space: SizeSpace) =>
    css({
        gap: spacing[space].var,
    }),
);
