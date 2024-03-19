import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../v-stack";

import { ColorText, SizeSpace, st } from "../../../theme";

export const colors = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text inline cn={[st.colorText(ColorText.body)]}>
                    Awesome text main
                </Text>
                <Text inline cn={[st.colorText(ColorText.accent)]}>
                    Awesome text accent
                </Text>
                <Text inline cn={[st.colorText(ColorText.destructive)]}>
                    Awesome text destructive
                </Text>
                <Text inline cn={[st.colorText(ColorText.button)]}>
                    Awesome text button
                </Text>
                <Text inline cn={[st.colorText(ColorText.sectionHeader)]}>
                    Awesome text sectionHeader
                </Text>
                <Text inline cn={[st.colorText(ColorText.subtitle)]}>
                    Awesome text subtitle
                </Text>
                <Text inline cn={[st.colorText(ColorText.link)]}>
                    Awesome text link
                </Text>
                <Text inline cn={[st.colorText(ColorText.hint)]}>
                    Awesome text hint
                </Text>
            </VStack>
        </Example>
    );
};
