import { css } from "goober";

export const base = css({
    display: "grid",
    boxSizing: "border-box",
    position: "relative",
    overflowX: "visible",
    overflowY: "visible",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    height: "max-content",
    touchAction: "none",
});
export const image = css({
    border: 0,
    outline: 0,
    margin: 0,
    padding: 0,
    userSelect: "none",
    width: "100%",
    objectFit: "cover",
});

export const overlay = css({
    position: "absolute",
    inset: 0,
    background: "#000",
    opacity: 0.3,
});

export const label = css({
    position: "absolute",
    top: "3vw",
    right: "3vw",
});
