import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../v-stack";

import { SizeSpace, SizeText, st, strongCss } from "../../../theme";

export const inline = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text inline cn={[st.text(SizeText.title1)]}>
                    Awesome text Title 1
                </Text>
                <Text inline cn={[st.text(SizeText.title2)]}>
                    Awesome text Title 2
                </Text>
                <Text inline cn={[st.text(SizeText.title3)]}>
                    Awesome text Title 3
                </Text>
                <Text inline cn={[st.text(SizeText.headline)]}>
                    Awesome text Headline
                </Text>
                <Text inline cn={[st.text(SizeText.body)]}>
                    Awesome text Body
                </Text>
                <Text inline cn={[st.text(SizeText.callout)]}>
                    Awesome text Callout
                </Text>
                <Text inline cn={[st.text(SizeText.subheadline1)]}>
                    Awesome text Subhedline 1
                </Text>
                <Text inline cn={[st.text(SizeText.subheadline2)]}>
                    Awesome text Subhedline 2
                </Text>
                <Text inline cn={[st.text(SizeText.footnote)]}>
                    Awesome text Footnote
                </Text>
                <Text inline cn={[st.text(SizeText.caption1)]}>
                    Awesome text Caption 1
                </Text>
                <Text inline cn={[st.text(SizeText.caption2)]}>
                    Awesome text Caption 2
                </Text>
            </VStack>
        </Example>
    );
};
