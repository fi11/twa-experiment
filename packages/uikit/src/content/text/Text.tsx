import { TextProps } from "./types.public";
import { baseCss, cn, ColorText, cssMemo, normalCss, optCss, SizeText, textColors, typography } from "theme";

const styles = {
    main: baseCss({
        display: "flex",
        boxSizing: "border-box",
        ["-webkit-font-smoothing"]: "antialiased",
        ["-moz-osx-font-smoothing"]: "auto",
        fontSmooth: "always",
        userSelect: "none",
        ["-webkit-user-select"]: "none",
        ["-webkit-touch-callout"]: "none",
        font: typography[SizeText.body].var,
        color: textColors[ColorText.body].var,
    }),
    inline: optCss({
        display: "inline",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
        whiteSpace: "nowrap",
    }),
    multiline: cssMemo((lines: number) => {
        return normalCss({
            display: "-webkit-box",
            ["-webkit-line-clamp"]: lines,
            ["-webkit-box-orient"]: "vertical",
            overflow: "hidden",
        });
    }),
};

export function Text(props: TextProps) {
    return (
        <div
            data-name={"Text"}
            className={cn(styles.main(), props.cn, styles.inline(!!props.inline), styles.multiline(props.multiline))}
        >
            {props.children}
        </div>
    );
}
