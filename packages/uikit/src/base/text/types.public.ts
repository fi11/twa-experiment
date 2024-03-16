import { ComponentChildren } from "preact";
import { SizeSpace, ColorText, SizeText } from "../../theme";

export type TextProps = {
    className?: string;
    children: ComponentChildren;
    size?: SizeText;
    color?: ColorText;
    inline?: boolean;
    indentStart?: SizeSpace;
    indentEnd?: SizeSpace;
};
