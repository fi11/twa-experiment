import { Example } from "cookbook";
import { VStack } from "../../v-stack";
import { Box } from "../Box";
import { ColorBg, SizeSpace, st } from "../../../theme";

export const indent = () => {
    return (
        <Example>
            <VStack>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x150)]}>Awesome Area Section</Box>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x150), st.hIndentStart(SizeSpace.x200)]}>
                    Awesome Area Section
                </Box>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x150), st.hIndentEnd(SizeSpace.x300)]}>
                    Awesome Area Section
                </Box>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x150), st.vIndentStart(SizeSpace.x100)]}>
                    Awesome Area Section
                </Box>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x150), st.vIndentEnd(SizeSpace.x400)]}>
                    Awesome Area Section
                </Box>
            </VStack>
        </Example>
    );
};
