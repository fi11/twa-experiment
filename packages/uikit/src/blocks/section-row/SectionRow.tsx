import { useRef } from "preact/hooks";
import { SectionRowProps } from "./types.public";
import { Box, HCell, VStack } from "../../layout";
import { Text } from "../../content";
import { Align, backgrounds, ColorBg, ColorText, optCss, SizeSpace, SizeText, st, textStyles } from "theme";
import { usePress } from "../../utils/hooks/usePress";

const styles = {
    main: optCss({
        ["&:last-child"]: {},
        ["&:nth-child(1)"]: {
            ["& > * > *:first-child"]: {
                boxShadow: "none",
            },
            ["& > * > *:nth-child(2)"]: {
                boxShadow: "none",
            },
            ["& > * > *:last-child"]: {
                boxShadow: "none",
            },
        },
    }),
    pressed: optCss({
        opacity: 0.5,
    }),
    hasBg: optCss({
        background: `${backgrounds[ColorBg.section].var}`,
    }),
    separator: optCss({
        boxShadow: `inset 0px 1px 0px 0px ${backgrounds[ColorBg.sectionSeparator].var}`,
    }),
};

export function SectionRow(props: SectionRowProps) {
    const ref = useRef<HTMLDivElement>(null);

    const press = usePress({
        ref,
        activated: !!props.onPress,
        onPress: props.onPress,
    });

    return (
        <Box ref={ref} cn={[styles.main(true), styles.hasBg(!props.transparent), styles.pressed(press.pressed)]}>
            <HCell
                start={
                    props.start && (
                        <Box cn={[st.vAlign(Align.center), st.hIndentStart(SizeSpace.x250)]}>{props.start}</Box>
                    )
                }
                end={
                    <Box cn={[st.vAlign(Align.center), st.hIndentEnd(SizeSpace.x250), styles.separator(true)]}>
                        {props.end}
                    </Box>
                }
                body={
                    <Box
                        cn={[
                            st.vAlign(Align.center),
                            st.hIndentStart(SizeSpace.x250),
                            st.vSpacing(SizeSpace.x200),
                            styles.separator(true),
                        ]}
                    >
                        <VStack>
                            {!!props.title && (
                                <Text inline cn={[textStyles.font(SizeText.body)]}>
                                    {props.title}
                                </Text>
                            )}
                            {props.description && (
                                <Text
                                    cn={[
                                        textStyles.font(SizeText.footnote),
                                        textStyles.color(ColorText.hint),
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
