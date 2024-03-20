import { css, CSSAttribute } from "goober";

export const externalCss = (styles: CSSAttribute) => {
    let className = "";
    return () => {
        if (!className) {
            className = css({
                ["&&&"]: styles,
            });
        }

        return className;
    };
};
