import { css, CSSAttribute } from "goober";

export const normalCss = (styles: CSSAttribute) => {
    return css({
        ["&&"]: styles,
    });
};
