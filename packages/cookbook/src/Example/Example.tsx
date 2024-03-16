import { ComponentChildren } from "preact";

export type ExampleProps = {
    children: ComponentChildren;
};

const style = {
    display: "grid",
    boxSizing: "border-box",
    position: "relative",
    overflowX: "visible",
    overflowY: "visible",
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
};

export function Example({ children }: ExampleProps) {
    return <div style={style}>{children}</div>;
}
