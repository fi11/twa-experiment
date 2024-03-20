import { CellProps } from "./types.public";
import { baseCss, cn, optCss } from "theme";

const style = {
    main: baseCss({
        display: "flex",
        boxSizing: "border-box",
        flexShrink: 0,
        minHeight: 0,
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "stretch",
        alignItems: "stretch",
        ["> *:nth-child(1)"]: {
            width: "max-content",
        },
        ["> *:nth-child(2)"]: {
            flexGrow: 1,
            flexShrink: 1,
        },
        ["> *:nth-child(3)"]: {
            width: "max-content",
        },
    }),
    withoutStart: optCss({
        ["> *:nth-child(1)"]: {
            flexGrow: 1,
            flexShrink: 1,
        },
        ["> *:nth-child(2)"]: {
            width: "max-content",
            flexGrow: 0,
            flexShrink: 0,
        },
    }),
};

export function HCell(props: CellProps) {
    return (
        <div data-name={"HCell"} className={cn(style.main(), style.withoutStart(!props.start))}>
            {props.start}
            {props.body}
            {props.end}
        </div>
    );
}
