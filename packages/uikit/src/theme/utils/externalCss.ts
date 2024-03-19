import { css, CSSAttribute } from "goober";

export const externalCss = (styles: CSSAttribute) => {
    return css({
        ["&&&"]: styles,
    });
};
