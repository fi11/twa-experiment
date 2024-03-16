import { ComponentChild } from "preact";

export type LayoutProps = {
    className?: string;
    header?: ComponentChild;
    body: ComponentChild;
    footer?: ComponentChild;
};
