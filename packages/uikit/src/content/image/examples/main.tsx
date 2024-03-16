import { Example } from "cookbook";
import { Image } from "../Image";
import src from "./cover.jpeg";
import { Area, VStack } from "../../../base";
import { ColorBg, SizeSpace } from "../../../theme";

export const main = () => {
    return (
        <Example>
            <Area vScroll>
                <VStack gap={SizeSpace.x300}>
                    <Image src={src} />
                    <Image overlay src={src} />
                    <Image label={"17:00"} src={src} />
                    <Image label={"Хит"} labelColor={ColorBg.button} overlay src={src} />
                </VStack>
            </Area>
        </Example>
    );
};
