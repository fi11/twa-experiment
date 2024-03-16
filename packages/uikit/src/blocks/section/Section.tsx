import { SectionProps } from "./types.public";
import { Area } from "../../base";
import { cn, ColorBg, SizeSpace } from "../../theme";
import { base, outline } from "./styles";

export function Section(props: SectionProps) {
    const color = props.outline ? undefined : undefined; //ColorBg.section;

    return (
        <Area compact radius={SizeSpace.x200} color={color} className={cn(base, props.outline && outline)}>
            {props.children}
        </Area>
    );
}
