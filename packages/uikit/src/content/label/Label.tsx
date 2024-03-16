import { LabelProps } from "./types.public";
import { Text } from "../../base";
import { cn, SizeText } from "../../theme";
import { base, color, text } from "./styles";

export function Label(props: LabelProps) {
    return (
        <div data-name={"Label"} className={cn(base, props.className, props.color && color(props.color))}>
            <Text className={cn(text)} size={SizeText.caption1}>
                {props.title}
            </Text>
        </div>
    );
}
