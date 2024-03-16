import { Example } from "cookbook";
import { Section } from "../Section";
import { VStack } from "../../../base";
import { SizeSpace } from "../../../theme";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Section>Section</Section>
                <Section outline>Section</Section>
                <Section>Section</Section>
            </VStack>
        </Example>
    );
};
