import { StackDistribution, StackProps } from "./types.public";
import { vAlign, gap, stackGridBase, vStack } from "./styles";
import { cn, cssMemo } from "../../theme";
import { vDistribution } from "./styles/distribution";
import { css } from "goober";

const countStyle = cssMemo((count: number) =>
    css({
        gridTemplateRows: `repeat(${count}, auto)`,
    }),
);

const countStyleLastGrow = cssMemo((count: number) =>
    css({
        gridTemplateRows: `repeat(${count - 1}, auto) 1fr`,
    }),
);

const countStyleFirstGrow = cssMemo((count: number) =>
    css({
        gridTemplateRows: `1fr repeat(${count - 1}, auto)`,
    }),
);

export function VStack(props: StackProps) {
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
            data-name={"VStack"}
            className={cn(
                stackGridBase,
                vStack,
                props.className,
                style(count),
                gap(props.gap),
                vAlign(props.align),
                vDistribution(props.distribution),
            )}
        >
            {props.children}
        </div>
    );
}
