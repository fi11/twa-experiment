import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../stack";

import { SizeSpace, ColorText, SizeText } from "../../../theme";

export const colors = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text inline size={SizeText.body} color={ColorText.body}>
                    Awesome text main
                </Text>
                <Text inline size={SizeText.body} color={ColorText.accent}>
                    Awesome text accent
                </Text>
                <Text inline size={SizeText.body} color={ColorText.destructive}>
                    Awesome text destructive
                </Text>
                <Text inline size={SizeText.body} color={ColorText.button}>
                    Awesome text button
                </Text>
                <Text inline size={SizeText.body} color={ColorText.sectionHeader}>
                    Awesome text sectionHeader
                </Text>
                <Text inline size={SizeText.body} color={ColorText.subtitle}>
                    Awesome text subtitle
                </Text>
                <Text inline size={SizeText.body} color={ColorText.link}>
                    Awesome text link
                </Text>
                <Text inline size={SizeText.body} color={ColorText.hint}>
                    Awesome text hint
                </Text>
            </VStack>
        </Example>
    );
};
