import { css } from "goober";
import { backgrounds, ColorBg, cssMemo, SizeSpace, spacing } from "../../theme";

// export const base = css({});

export const base = css`
    touch-action: none;

    &:last-child {
        padding-bottom: ${spacing[SizeSpace.x100].var};
    }
    &:nth-child(1) {
        padding-top: ${spacing[SizeSpace.x100].var};
        & > * > *:first-child {
            box-shadow: none;
        }
        & > * > *:nth-child(2) {
            box-shadow: none;
        }
        & > * > *:last-child {
            box-shadow: none;
        }
    }
`;

export const pressed = css`
    opacity: 0.5;
`;

export const color = cssMemo((color: ColorBg) => {
    return css({
        background: backgrounds[color].var,
    });
});
export const separator = css({
    boxShadow: `inset 0px 1px 0px 0px ${backgrounds[ColorBg.sectionSeparator].var}`,
});
