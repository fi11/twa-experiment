import { Example } from "cookbook";
import { Box } from "../Box";
import { ColorBg, SizeSpace, st } from "theme";
import { VStack } from "../../v-stack";

export const radius = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x100}>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x200)]}>
                    <div>Some awesome content</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x200), st.radius(SizeSpace.x100)]}>
                    <div>Some awesome content</div>
                </Box>
            </VStack>
        </Example>
    );
};
