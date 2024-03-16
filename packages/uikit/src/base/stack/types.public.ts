import { ComponentChildren } from "preact";
import { SizeSpace } from "../../theme";

export type StackProps = {
    gap?: SizeSpace;
    align?: StackAlign;
    distribution?: StackDistribution;
    className?: string;
    children: ComponentChildren;
};

export enum StackAlign {
    start = "start",
    center = "center",
    end = "end",
    stretch = "stretch",
}

export enum StackDistribution {
    start = "start",
    center = "center",
    end = "end",
    stretch = "stretch",
    startGrow = "startGrow",
    endGrow = "endGrow",
}
