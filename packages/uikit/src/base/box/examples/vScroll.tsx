import { Example } from "cookbook";
import { Box } from "../Box";
import { VStack } from "../../v-stack";
import { Text } from "../../text";
import { ColorBg, SizeSpace, st } from "../../../theme";

const data = new Array(100).fill("").map((_, idx) => `Awesome Item #${idx + 1}`);
export const vScroll = () => {
    return (
        <Example>
            <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x200), st.scroll("v")]}>
                <VStack gap={SizeSpace.x200}>
                    {data.map(value => (
                        <Text key={value}>{value}</Text>
                    ))}
                </VStack>
            </Box>
        </Example>
    );
};
