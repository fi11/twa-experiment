import { ComponentChildren } from "preact";
import { Styleable } from "../../types";

export type TextProps = Styleable & {
    children: ComponentChildren;
    inline?: boolean;
    multiline?: number;
};
