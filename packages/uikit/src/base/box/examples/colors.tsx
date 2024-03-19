import { Example } from "cookbook";
import { Box } from "../Box";
import { ColorBg, SizeSpace, st } from "../../../theme";
import { VStack } from "../../v-stack";

export const colors = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x100}>
                <Box cn={[st.colorBg(ColorBg.main), st.spacing(SizeSpace.x150)]}>
                    <div>Main background color</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x150)]}>
                    <div>Secondary background color</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x150)]}>
                    <div>Header background color</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.section), st.spacing(SizeSpace.x150)]}>
                    <div>Section background color</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x150)]}>
                    <div>Button background color</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.sectionSeparator), st.spacing(SizeSpace.x150)]}>
                    <div>Section separator background color</div>
                </Box>
            </VStack>
        </Example>
    );
};
