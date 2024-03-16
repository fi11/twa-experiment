import { ComponentChild, Ref } from "preact";

export type CellProps = {
    className?: string;
    ref?: Ref<HTMLDivElement>;
    body: ComponentChild;
    start?: ComponentChild;
    end?: ComponentChild;
};
