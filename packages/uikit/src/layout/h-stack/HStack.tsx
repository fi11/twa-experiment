import { HStackProps } from "./types.public";
import { baseCss, cn, st } from "theme";

const style = {
    main: baseCss({
        display: "flex",
        boxSizing: "border-box",
        flexShrink: 0,
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "stretch",
        alignItems: "stretch",
        width: "auto",
        height: "max-content",
        alignSelf: "stretch",
        minWidth: "max-content",
        ["> div"]: {
            maxHeight: "100%",
            width: "max-content",
        },
    }),
};

export function HStack(props: HStackProps) {
    return (
        <div data-name={"HStack"} className={cn(style.main(), st.gap(props.gap))}>
            {props.children}
        </div>
    );
}
