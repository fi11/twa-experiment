import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../stack";

import { SizeSpace, SizeText } from "../../../theme";

export const inline = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text inline size={SizeText.title1}>
                    Awesome text Title 1
                </Text>
                <Text inline size={SizeText.title2}>
                    Awesome text Title 2
                </Text>
                <Text inline size={SizeText.title3}>
                    Awesome text Title 3
                </Text>
                <Text inline size={SizeText.headline}>
                    Awesome text Headline
                </Text>
                <Text inline size={SizeText.body}>
                    Awesome text Body
                </Text>
                <Text inline size={SizeText.callout}>
                    Awesome text Callout
                </Text>
                <Text inline size={SizeText.subheadline1}>
                    Awesome text Subhedline 1
                </Text>
                <Text inline size={SizeText.subheadline2}>
                    Awesome text Subhedline 2
                </Text>
                <Text inline size={SizeText.footnote}>
                    Awesome text Footnote
                </Text>
                <Text inline size={SizeText.caption1}>
                    Awesome text Caption 1
                </Text>
                <Text inline size={SizeText.caption2}>
                    Awesome text Caption 2
                </Text>
            </VStack>
        </Example>
    );
};
