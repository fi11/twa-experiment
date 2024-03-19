import { ContentCardProps } from "./types.public";
import { Box, Text, VStack } from "../../base";
import { ColorBg, ColorText, SizeSpace, SizeText, st } from "../../theme";
import { base } from "./styles";
import { Image } from "../../content";

export function ContentCard(props: ContentCardProps) {
    const hasDescription = props.description;
    const hasAnyText = !!props.title || !!props.description;
    return (
        <Box cn={[base, st.radius(SizeSpace.x200), st.colorBg(ColorBg.section)]}>
            <VStack>
                {props.coverSrc && <Image overlay={props.overlay} src={props.coverSrc} label={props.label} />}
                {hasAnyText && (
                    <Box
                        cn={[
                            st.hSpacing(SizeSpace.x300),
                            st.vSpacingStart(SizeSpace.x100),
                            st.vSpacingEnd(hasDescription ? SizeSpace.x300 : SizeSpace.x200),
                        ]}
                    >
                        <VStack>
                            {props.title && (
                                <Text
                                    cn={[
                                        st.text(SizeText.headline),
                                        st.colorText(ColorText.body),
                                        st.vIndentStart(SizeSpace.x100),
                                        st.vIndentEnd(SizeSpace.x100),
                                    ]}
                                >
                                    {props.title}
                                </Text>
                            )}
                            {props.description && (
                                <Text cn={[st.text(SizeText.footnote), st.colorText(ColorText.body)]}>
                                    {props.description}
                                </Text>
                            )}
                        </VStack>
                    </Box>
                )}
            </VStack>
        </Box>
    );
}
