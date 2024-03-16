import { Example } from "cookbook";
import { Label } from "../Label";
import { Section } from "../../../blocks";
import { Area, VStack } from "../../../base";
import { SizeSpace } from "../../../theme";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Section>
                    <Area spacing={SizeSpace.x200}>
                        <Label title={"Open"} />
                    </Area>
                </Section>
                <Section>
                    <Area spacing={SizeSpace.x200}>
                        <Label title={"99"} />
                    </Area>
                </Section>
                <Section>
                    <Area spacing={SizeSpace.x200}>
                        <Label title={"0"} />
                    </Area>
                </Section>
            </VStack>
        </Example>
    );
};
