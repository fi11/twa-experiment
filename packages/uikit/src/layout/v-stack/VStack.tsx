import { VStackProps } from "./types.public";
import { baseCss, cn, st } from "theme";

const style = {
    main: baseCss({
        display: "flex",
        boxSizing: "border-box",
        flexShrink: 0,
        minHeight: 0,
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "stretch",
        height: "max-content",
        width: "auto",
        alignSelf: "stretch",
        ["> div"]: {
            maxWidth: "100%",
            height: "max-content",
        },
    }),
};

export function VStack(props: VStackProps) {
    return (
        <div data-name={"VStack"} className={cn(style.main(), st.gap(props.gap))}>
            {props.children}
        </div>
    );
}
