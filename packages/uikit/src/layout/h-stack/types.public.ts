import { ComponentChildren } from "preact";
import { SizeSpace } from "theme";

export type HStackProps = {
    gap?: SizeSpace;
    children: ComponentChildren;
};
