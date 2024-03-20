import { Example } from "cookbook";
import { Label } from "../Label";
import { Section } from "../../../blocks";
import { Box, VStack } from "../../../layout";
import { ColorBg, SizeSpace, st } from "theme";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Section>
                    <Box cn={[st.spacing(SizeSpace.x200)]}>
                        <Label title={"Open"} cn={[st.colorBg(ColorBg.section)]} />
                    </Box>
                </Section>
                <Section>
                    <Box cn={[st.colorBg(ColorBg.section)]}>
                        <Box cn={[st.spacing(SizeSpace.x200)]}>
                            <Label title={"99"} />
                        </Box>
                    </Box>
                </Section>
                <Section>
                    <Box cn={[st.spacing(SizeSpace.x200)]}>
                        <Label title={"0"} cn={[st.colorBg(ColorBg.button)]} />
                    </Box>
                </Section>
            </VStack>
        </Example>
    );
};
