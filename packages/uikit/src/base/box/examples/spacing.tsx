import { Example } from "cookbook";
import { Box } from "../Box";
import { ColorBg, SizeSpace, st } from "../../../theme";
import { VStack } from "../../v-stack";

export const spacing = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x100}>
                <Box cn={[st.colorBg(ColorBg.button)]}>
                    <div>Some awesome content</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x100)]}>
                    <div>Some awesome content</div>
                </Box>
                <Box cn={[st.colorBg(ColorBg.button), st.vSpacing(SizeSpace.x200), st.hSpacing(SizeSpace.x150)]}>
                    <div>Some awesome content</div>
                </Box>
                <Box
                    cn={[
                        st.colorBg(ColorBg.button),
                        st.vSpacing(SizeSpace.x200),
                        st.hSpacing(SizeSpace.x150),
                        st.vSpacingEnd(SizeSpace.x075),
                    ]}
                >
                    <div>Some awesome content</div>
                </Box>
                <Box
                    cn={[st.colorBg(ColorBg.button), st.hSpacingStart(SizeSpace.x500), st.hSpacingEnd(SizeSpace.x300)]}
                >
                    <div>Some awesome content</div>
                </Box>
            </VStack>
        </Example>
    );
};
