import { LabelProps } from "./types.public";
import { Text } from "../../base";
import { cn, SizeText, st } from "../../theme";
import { base, color, text } from "./styles";

export function Label(props: LabelProps) {
    return (
        <div data-name={"Label"} className={cn(base, props.className, props.color && color(props.color))}>
            <Text cn={[text, st.text(SizeText.caption1)]}>{props.title}</Text>
        </div>
    );
}
