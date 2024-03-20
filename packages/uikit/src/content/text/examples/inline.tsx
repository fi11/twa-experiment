import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../../layout/v-stack";

import { SizeSpace, SizeText, textStyles } from "theme";

export const inline = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text inline cn={[textStyles.font(SizeText.title1)]}>
                    Awesome text Title 1
                </Text>
                <Text inline cn={[textStyles.font(SizeText.title2)]}>
                    Awesome text Title 2
                </Text>
                <Text inline cn={[textStyles.font(SizeText.title3)]}>
                    Awesome text Title 3
                </Text>
                <Text inline cn={[textStyles.font(SizeText.headline)]}>
                    Awesome text Headline
                </Text>
                <Text inline cn={[textStyles.font(SizeText.body)]}>
                    Awesome text Body
                </Text>
                <Text inline cn={[textStyles.font(SizeText.callout)]}>
                    Awesome text Callout
                </Text>
                <Text inline cn={[textStyles.font(SizeText.subheadline1)]}>
                    Awesome text Subhedline 1
                </Text>
                <Text inline cn={[textStyles.font(SizeText.subheadline2)]}>
                    Awesome text Subhedline 2
                </Text>
                <Text inline cn={[textStyles.font(SizeText.footnote)]}>
                    Awesome text Footnote
                </Text>
                <Text inline cn={[textStyles.font(SizeText.caption1)]}>
                    Awesome text Caption 1
                </Text>
                <Text inline cn={[textStyles.font(SizeText.caption2)]}>
                    Awesome text Caption 2
                </Text>
            </VStack>
        </Example>
    );
};
