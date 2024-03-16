import { Example } from "cookbook";
import { Area } from "../Area";
import { VStack } from "../../stack";
import { Text } from "../../text";
import { ColorBg, SizeSpace } from "../../../theme";

const data = new Array(100).fill("").map((_, idx) => `Awesome Item #${idx + 1}`);
export const vScroll = () => {
    return (
        <Example>
            <Area vScroll spacing={SizeSpace.x200} color={ColorBg.secondary}>
                <VStack gap={SizeSpace.x200}>
                    {data.map(value => (
                        <Text key={value}>{value}</Text>
                    ))}
                </VStack>
            </Area>
        </Example>
    );
};
