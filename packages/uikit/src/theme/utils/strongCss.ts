import { css, CSSAttribute } from "goober";

export const strongCss = (styles: CSSAttribute) => {
    return css({
        ["&&"]: styles,
    });
};
