import { ContentCardProps } from "./types.public";
import { Area, Text, VStack } from "../../base";
import { ColorBg, ColorText, SizeSpace, SizeText } from "../../theme";
import { base } from "./styles";
import { Image } from "../../content";

export function ContentCard(props: ContentCardProps) {
    const hasDescription = props.description;
    const hasAnyText = !!props.title || !!props.description;
    return (
        <Area className={base} radius={SizeSpace.x200} color={ColorBg.section} compact>
            <VStack>
                {props.coverSrc && <Image overlay={props.overlay} src={props.coverSrc} label={props.label} />}
                {hasAnyText && (
                    <Area
                        spacing={{
                            top: SizeSpace.x100,
                            bottom: hasDescription ? SizeSpace.x300 : SizeSpace.x200,
                            horizontal: SizeSpace.x300,
                        }}
                    >
                        <VStack>
                            {props.title && (
                                <Text
                                    size={SizeText.headline}
                                    color={ColorText.body}
                                    indentStart={SizeSpace.x100}
                                    indentEnd={SizeSpace.x100}
                                >
                                    {props.title}
                                </Text>
                            )}
                            {props.description && (
                                <Text size={SizeText.footnote} color={ColorText.body}>
                                    {props.description}
                                </Text>
                            )}
                        </VStack>
                    </Area>
                )}
            </VStack>
        </Area>
    );
}
