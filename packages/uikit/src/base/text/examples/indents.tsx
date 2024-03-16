import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../stack";

import { SizeSpace, ColorText, SizeText } from "../../../theme";

export const indents = () => {
    return (
        <Example>
            <VStack>
                <Text inline size={SizeText.title1} indentEnd={SizeSpace.x200}>
                    Awesome text main
                </Text>
                <Text inline size={SizeText.body}>
                    Awesome text main
                </Text>
                <Text inline size={SizeText.footnote} color={ColorText.hint} indentStart={SizeSpace.x025}>
                    Awesome text main
                </Text>
            </VStack>
        </Example>
    );
};
