import { Example } from "cookbook";
import { Box } from "../Box";
import { HStack } from "../../h-stack";
import { Text } from "../../text";
import { ColorBg, SizeSpace, st } from "../../../theme";

const data = new Array(100).fill("").map((_, idx) => `Item #${idx + 1}`);
export const hScroll = () => {
    return (
        <Example>
            <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x200), st.scroll("h")]}>
                <HStack gap={SizeSpace.x150}>
                    {data.map(value => (
                        <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x200)]}>
                            <Text key={value}>{value}</Text>
                        </Box>
                    ))}
                </HStack>
            </Box>
        </Example>
    );
};
