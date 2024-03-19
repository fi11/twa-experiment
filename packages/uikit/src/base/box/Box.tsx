import { BoxProps } from "./types.public";
import { cn, optCss, st } from "../../theme";

const styles = {
    inline: optCss({
        display: "inline-flex",
        width: "auto",
    }),
};
export function Box(props: BoxProps) {
    return (
        <div ref={props.ref} data-name={"Box"} className={cn(props.cn, st.box("block"), styles.inline(!!props.inline))}>
            {props.children}
        </div>
    );
}
