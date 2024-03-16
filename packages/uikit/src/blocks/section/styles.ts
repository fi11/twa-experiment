import { css } from "goober";
import { backgrounds, ColorBg } from "../../theme";

export const base = css({
    // height: "max-content",
});

export const outline = css({
    border: `1px solid ${backgrounds[ColorBg.sectionSeparator].var}`,
});
