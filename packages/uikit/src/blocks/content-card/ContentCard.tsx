import { ContentCardProps } from "./types.public";
import { Box } from "../../layout";
import { Image, Label, Text } from "../../content";
import { Align, ColorBg, ColorText, externalCss, SizeSpace, SizeText, st, textStyles } from "theme";

const styles = {
    overlayBox: externalCss({
        background: `linear-gradient(0deg, rgba(0,0,0,.6) 0%, rgba(0,0,0,.5) 58%, rgba(0,0,0,0) 100%)`,
    }),
    textColor: externalCss({
        color: "#fff",
    }),
    label: externalCss({
        position: "absolute",
        top: "3vw",
        right: "3vw",
    }),
};
export function ContentCard(props: ContentCardProps) {
    return (
        <Box cn={[st.radius(SizeSpace.x200), st.colorBg(ColorBg.section)]}>
            {props.coverSrc && <Image overlay={props.overlay} src={props.coverSrc} label={props.label} />}
            <Box cn={[st.overlay(0), st.vAlign(Align.end)]}>
                <Box
                    cn={[
                        styles.overlayBox(),
                        st.hSpacing(SizeSpace.x300),
                        st.vSpacingEnd(SizeSpace.x100),
                        st.vSpacingStart(SizeSpace.x300),
                    ]}
                >
                    <Text
                        multiline={2}
                        cn={[textStyles.font(SizeText.footnote), styles.textColor(), textStyles.color(ColorText.hint)]}
                    >
                        {props.description}
                    </Text>
                    <Text
                        cn={[
                            textStyles.font(SizeText.title3),
                            styles.textColor(),
                            textStyles.color(ColorText.body),
                            st.vIndentStart(SizeSpace.x050),
                            st.vIndentEnd(SizeSpace.x100),
                        ]}
                    >
                        {props.title}
                    </Text>
                </Box>
            </Box>
            {props.label && (
                <Box inline cn={[styles.label()]}>
                    <Label title={props.label} />
                </Box>
            )}
        </Box>
    );
}
