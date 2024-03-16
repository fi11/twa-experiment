import { css } from "goober";
import { StackDistribution, StackProps } from "./types.public";
import { hAlign, gap, hStack, stackGridBase } from "./styles";
import { cn, cssMemo } from "../../theme";
import { hDistribution } from "./styles/distribution";

const countStyle = cssMemo((count: number) =>
    css({
        gridTemplateColumns: `repeat(${count}, auto)`,
    }),
);

const countStyleLastGrow = cssMemo((count: number) =>
    css({
        gridTemplateColumns: `repeat(${count - 1}, auto) 1fr`,
    }),
);

const countStyleFirstGrow = cssMemo((count: number) =>
    css({
        gridTemplateColumns: `1fr repeat(${count - 1}, auto)`,
    }),
);

export function HStack(props: StackProps) {
    const count = Array.isArray(props.children) ? props.children.length : 1;
    let style = countStyle;
    if (props.distribution === StackDistribution.endGrow) {
        style = countStyleLastGrow;
    }
    if (props.distribution === StackDistribution.startGrow) {
        style = countStyleFirstGrow;
    }
    return (
        <div
            data-name={"HStack"}
            className={cn(
                stackGridBase,
                hStack,
                props.className,
                style(count),
                gap(props.gap),
                hAlign(props.align),
                hDistribution(props.distribution),
            )}
        >
            {props.children}
        </div>
    );
}
