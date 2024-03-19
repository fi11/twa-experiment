import { ComponentChildren } from "preact";
import { SizeSpace } from "../../theme";

export type VStackProps = {
    gap?: SizeSpace;
    children: ComponentChildren;
};
