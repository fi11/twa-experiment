import { cssMemo } from "../../../theme";
import { backgrounds, ColorBg, spacing, SizeSpace } from "../../../theme";
import { css } from "goober";

export const color = cssMemo((color: ColorBg) =>
    css({
        backgroundColor: backgrounds[color].var,
    }),
);
