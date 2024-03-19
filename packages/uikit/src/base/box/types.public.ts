import { ComponentChild, Ref } from "preact";
import { Styleable } from "../../types";

export type BoxProps = Styleable & {
    children: ComponentChild;
    ref?: Ref<HTMLDivElement>;
    inline?: boolean;
};
