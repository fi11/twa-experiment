import { ComponentChild } from "preact";

export type VCellProps = {
    start?: ComponentChild;
    body: ComponentChild;
    end?: ComponentChild;
};
