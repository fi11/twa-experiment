import { useRef } from "preact/hooks";
import { SectionRowProps } from "./types.public";
import { Area, AreaAlign, Cell, Text, VStack } from "../../base";
import { cn, ColorBg, ColorText, SizeSpace, SizeText } from "../../theme";
import { base, color, pressed, separator } from "./styles";
import { usePress } from "../../utils/hooks/usePress";

export function SectionRow(props: SectionRowProps) {
    const ref = useRef<HTMLDivElement>(null);

    const press = usePress({
        ref,
        activated: !!props.onPress,
        onPress: props.onPress,
    });

    return (
        <Cell
            ref={ref}
            className={cn(base, color(props.color || ColorBg.section), press.pressed && pressed)}
            start={
                props.start && (
                    <Area indentLeft={SizeSpace.x250} vAlign={AreaAlign.center}>
                        {props.start}
                    </Area>
                )
            }
            end={
                <Area indentRight={SizeSpace.x250} className={cn(separator)} vAlign={AreaAlign.center}>
                    {props.end}
                </Area>
            }
            body={
                <Area
                    className={cn(separator)}
                    vAlign={AreaAlign.center}
                    spacing={{ vertical: SizeSpace.x200 }}
                    indentLeft={SizeSpace.x250}
                    compact
                >
                    <VStack>
                        <Text inline size={SizeText.body}>
                            {props.title}
                        </Text>
                        {props.description && (
                            <Text size={SizeText.footnote} color={ColorText.hint} indentStart={SizeSpace.x025}>
                                {props.description}
                            </Text>
                        )}
                    </VStack>
                </Area>
            }
        />
    );
}
