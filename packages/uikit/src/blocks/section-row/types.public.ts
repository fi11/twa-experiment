import { ComponentChild } from "preact";

export type SectionRowProps = {
    title?: string;
    description?: string;
    start?: ComponentChild;
    end?: ComponentChild;
    onPress?: () => void;
    transparent?: boolean;
};
