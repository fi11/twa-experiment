import { IconProps } from "./types.public";
import { baseCss, cn, ColorText, SizeSpace, spacing, textColors } from "theme";

const styles = {
    main: baseCss({
        display: "inline-flex",
        boxSizing: "border-box",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        width: spacing[SizeSpace.x250].var,
        height: spacing[SizeSpace.x250].var,
        color: textColors[ColorText.body].var,
        ["svg"]: {
            width: "100%",
            height: "100%",
            display: "flex",
            color: "currentColor",
        },
    }),
};

export function Icon(props: IconProps) {
    return (
        <div data-name="Icon" className={cn(styles.main(), props.cn)}>
            {props.children}
        </div>
    );
}
