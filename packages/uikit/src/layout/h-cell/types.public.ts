import { ComponentChild } from "preact";

export type CellProps = {
    body: ComponentChild;
    start?: ComponentChild;
    end?: ComponentChild;
};
