import { CSSAttribute } from "goober";
import { normalCss } from "./normalCss";

export const optCss = (styles: CSSAttribute) => {
    return function optCss(condition: boolean) {
        if (!condition) {
            return "";
        }

        return normalCss(styles);
    };
};
