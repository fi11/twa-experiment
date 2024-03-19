import { CSSAttribute } from "goober";
import { strongCss } from "./strongCss";

export const optCss = (styles: CSSAttribute) => {
    return function optCss(condition: boolean) {
        if (!condition) {
            return "";
        }

        return strongCss(styles);
    };
};
