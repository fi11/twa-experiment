import { ComponentChild } from "preact";
import { ColorBg } from "../../theme";

export type SectionRowProps = {
    title: string;
    description?: string;
    start?: ComponentChild;
    // body: ComponentChild;
    end?: ComponentChild;
    onPress?: () => void;
    color?: ColorBg;
};
