import { css } from "goober";

export const hStack = css({
    gridTemplateRows: "minmax(max-content, 1fr)",
    justifyContent: "start",
    alignContent: "start",
    minWidth: "max-content",
});
