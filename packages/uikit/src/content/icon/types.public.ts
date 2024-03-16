import { ComponentChild } from "preact";
import { ColorText, SizeSpace } from "../../theme";
import { ColorsSys } from "../../theme/systemColors";

export enum IconView {
    squad = "squad",
    // circle = "circle",
}
export type IconProps = {
    children: ComponentChild;
    size?: SizeSpace;
    color?: ColorText;
    bgColor?: ColorsSys;
    view?: IconView;
};
