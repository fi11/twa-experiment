import { TextProps } from "./types.public";
import { baseTextStyle, colors, inline, indentStart, styleView, indentEnd } from "./styles";
import { cn } from "../../theme";
import { SizeText } from "../../theme";

export function Text(props: TextProps) {
    const view = props.size || SizeText.body;
    return (
        <div
            data-name={"Text"}
            className={cn(
                baseTextStyle,
                props.className,
                styleView(view),
                props.inline && inline,
                colors(props.color),
                indentStart(props.indentStart),
                indentEnd(props.indentEnd),
            )}
        >
            {props.children}
        </div>
    );
}
