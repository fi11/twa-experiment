import { css } from "goober";
import { cssMemo } from "../../theme";

export const base = css({
    display: "grid",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    gridTemplateRows: "minmax(max-content, 1fr);",
    gridTemplateColumns: "max-content minmax(min-content, 1fr) max-content",
});

export const withoutStart = css({
    gridTemplateColumns: "minmax(max-content, 1fr) max-content",
});
