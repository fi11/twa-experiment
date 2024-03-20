import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../../layout";

import { ColorText, SizeSpace, SizeText, st, textStyles } from "theme";

export const indents = () => {
    return (
        <Example>
            <VStack>
                <Text inline cn={[textStyles.font(SizeText.title1), st.vIndentEnd(SizeSpace.x200)]}>
                    Awesome text main
                </Text>
                <Text inline>Awesome text main</Text>
                <Text
                    inline
                    cn={[
                        textStyles.font(SizeText.footnote),
                        textStyles.color(ColorText.hint),
                        st.vIndentStart(SizeSpace.x025),
                    ]}
                >
                    Awesome text main
                </Text>
            </VStack>
        </Example>
    );
};
