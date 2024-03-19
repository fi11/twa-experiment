import { useRef } from "preact/hooks";
import { SectionRowProps } from "./types.public";
import { Box, HCell, Text, VStack } from "../../base";
import { ColorBg, ColorText, SizeSpace, SizeText, st } from "../../theme";
import { base, color, pressed, separator } from "./styles";
import { usePress } from "../../utils/hooks/usePress";
import { Align } from "../../types";

export function SectionRow(props: SectionRowProps) {
    const ref = useRef<HTMLDivElement>(null);

    const press = usePress({
        ref,
        activated: !!props.onPress,
        onPress: props.onPress,
    });

    return (
        <Box ref={ref} cn={[base, color(props.color || ColorBg.section), press.pressed && pressed]}>
            <HCell
                start={
                    props.start && (
                        <Box cn={[st.vAlign(Align.center), st.hIndentStart(SizeSpace.x250)]}>{props.start}</Box>
                    )
                }
                end={<Box cn={[st.vAlign(Align.center), st.hIndentEnd(SizeSpace.x250), separator]}>{props.end}</Box>}
                body={
                    <Box
                        cn={[
                            st.vAlign(Align.center),
                            st.hIndentStart(SizeSpace.x250),
                            st.vSpacing(SizeSpace.x200),
                            separator,
                        ]}
                    >
                        <VStack>
                            <Text inline cn={[st.text(SizeText.body)]}>
                                {props.title}
                            </Text>
                            {props.description && (
                                <Text
                                    cn={[
                                        st.text(SizeText.footnote),
                                        st.colorText(ColorText.hint),
                                        st.vIndentStart(SizeSpace.x025),
                                    ]}
                                >
                                    {props.description}
                                </Text>
                            )}
                        </VStack>
                    </Box>
                }
            />
        </Box>
    );
}
