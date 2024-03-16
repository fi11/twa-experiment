import { AreaProps } from "./types.public";
import { cn } from "../../theme";
import {
    base,
    color,
    compact,
    hAlign,
    hScroll,
    indentBottom,
    indentLeft,
    indentRight,
    indentTop,
    radius,
    spacing,
    vAlign,
    vScroll,
} from "./styles";
import { buildPadding } from "./utils";

export function Area(props: AreaProps) {
    return (
        <div
            data-name={"Area"}
            className={cn(
                base,
                props.className,
                color(props.color),
                spacing(buildPadding(props.spacing)),
                radius(buildPadding(props.radius)),
                vAlign(props.vAlign),
                hAlign(props.hAlign),
                indentTop(props.indentTop),
                indentBottom(props.indentBottom),
                indentLeft(props.indentLeft),
                indentRight(props.indentRight),
                props.vScroll && vScroll,
                props.hScroll && hScroll,
                props.compact && compact,
            )}
        >
            {props.children}
        </div>
    );
}
