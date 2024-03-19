import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../v-stack";

import { ColorText, SizeSpace, SizeText, st } from "../../../theme";

export const indents = () => {
    return (
        <Example>
            <VStack>
                <Text inline cn={[st.text(SizeText.title1), st.vIndentEnd(SizeSpace.x200)]}>
                    Awesome text main
                </Text>
                <Text inline>Awesome text main</Text>
                <Text
                    inline
                    cn={[st.text(SizeText.footnote), st.colorText(ColorText.hint), st.vIndentStart(SizeSpace.x025)]}
                >
                    Awesome text main
                </Text>
            </VStack>
        </Example>
    );
};
