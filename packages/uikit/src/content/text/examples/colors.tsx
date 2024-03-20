import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../../layout";

import { ColorText, SizeSpace, textStyles } from "theme";

export const colors = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text inline cn={[textStyles.color(ColorText.body)]}>
                    Awesome text main
                </Text>
                <Text inline cn={[textStyles.color(ColorText.accent)]}>
                    Awesome text accent
                </Text>
                <Text inline cn={[textStyles.color(ColorText.destructive)]}>
                    Awesome text destructive
                </Text>
                <Text inline cn={[textStyles.color(ColorText.button)]}>
                    Awesome text button
                </Text>
                <Text inline cn={[textStyles.color(ColorText.sectionHeader)]}>
                    Awesome text sectionHeader
                </Text>
                <Text inline cn={[textStyles.color(ColorText.subtitle)]}>
                    Awesome text subtitle
                </Text>
                <Text inline cn={[textStyles.color(ColorText.link)]}>
                    Awesome text link
                </Text>
                <Text inline cn={[textStyles.color(ColorText.hint)]}>
                    Awesome text hint
                </Text>
            </VStack>
        </Example>
    );
};
