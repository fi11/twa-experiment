import { css } from "goober";

export const base = css({
    display: "grid",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "auto",
});

export const withHeader = css({
    gridTemplateRows: "auto 1fr auto",
});
export const withoutHeader = css({
    gridTemplateRows: "1fr auto",
});
