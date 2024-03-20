import { Example } from "cookbook";
import { Image } from "../Image";
import src from "./cover.jpeg";
import { Box, VStack } from "../../../layout";
import { ColorBg, SizeSpace, st } from "theme";

export const main = () => {
    return (
        <Example>
            <Box cn={[st.scroll("v")]}>
                <VStack gap={SizeSpace.x300}>
                    <Image src={src} />
                    <Image overlay src={src} />
                    <Image label={"17:00"} src={src} />
                    <Image label={"Хит"} labelColor={ColorBg.button} overlay src={src} />
                </VStack>
            </Box>
        </Example>
    );
};
