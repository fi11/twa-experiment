import { ComponentChild } from "preact";
import { Styleable } from "../../types";

export type IconProps = Styleable & {
    children: ComponentChild;
};
