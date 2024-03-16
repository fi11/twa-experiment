import { ComponentChild } from "preact";
import { ColorBg, SizeSpace } from "../../theme";

export type AreaSpacing = {
    top?: SizeSpace;
    bottom?: SizeSpace;
    left?: SizeSpace;
    right?: SizeSpace;
    vertical?: SizeSpace;
    horizontal?: SizeSpace;
};

export enum AreaAlign {
    start = "start",
    center = "center",
    end = "end",
}

export type AreaProps = {
    children: ComponentChild;
    className?: string;
    compact?: boolean;
    color?: ColorBg;
    spacing?: SizeSpace | AreaSpacing;
    radius?: SizeSpace | AreaSpacing;
    vAlign?: AreaAlign;
    hAlign?: AreaAlign;
    indentTop?: SizeSpace;
    indentBottom?: SizeSpace;
    indentLeft?: SizeSpace;
    indentRight?: SizeSpace;
    vScroll?: boolean;
    hScroll?: boolean;
};
