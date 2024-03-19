import { Example } from "cookbook";
import { Label } from "../Label";
import { Section } from "../../../blocks";
import { Box, VStack } from "../../../base";
import { SizeSpace, st } from "../../../theme";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Section>
                    <Box cn={[st.spacing(SizeSpace.x200)]}>
                        <Label title={"Open"} />
                    </Box>
                </Section>
                <Section>
                    <Box cn={[st.spacing(SizeSpace.x200)]}>
                        <Label title={"99"} />
                    </Box>
                </Section>
                <Section>
                    <Box cn={[st.spacing(SizeSpace.x200)]}>
                        <Label title={"0"} />
                    </Box>
                </Section>
            </VStack>
        </Example>
    );
};
