import { VCellProps } from "./types.public";
import { baseCss, cn, optCss, st } from "../../theme";

const styles = {
    main: baseCss({
        display: "flex",
        boxSizing: "border-box",
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",
        flexShrink: 0,
        width: "100%",
        height: "100%",
        ["> *:nth-child(1)"]: {
            width: "auto",
        },
        ["> *:nth-child(2)"]: {
            flexGrow: 1,
            flexShrink: 1,
        },
        ["> *:nth-child(3)"]: {
            width: "auto",
        },
    }),
    withoutHeader: optCss({
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
export function VCell(props: VCellProps) {
    return (
        <div data-name={"VCell"} className={cn(styles.main(), styles.withoutHeader(!props.start))}>
            {props.start}
            {props.body}
            {props.end}
        </div>
    );
}
