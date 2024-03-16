import { Example } from "cookbook";
import { Area } from "../Area";
import { HStack } from "../../stack";
import { Text } from "../../text";
import { ColorBg, SizeSpace } from "../../../theme";

const data = new Array(100).fill("").map((_, idx) => `Item #${idx + 1}`);
export const hScroll = () => {
    return (
        <Example>
            <Area hScroll spacing={SizeSpace.x200} color={ColorBg.secondary}>
                <HStack gap={SizeSpace.x150}>
                    {data.map(value => (
                        <Area spacing={SizeSpace.x200} color={ColorBg.button} compact>
                            <Text key={value}>{value}</Text>
                        </Area>
                    ))}
                </HStack>
            </Area>
        </Example>
    );
};
