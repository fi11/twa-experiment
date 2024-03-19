import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../v-stack";

import { SizeSpace, SizeText, st } from "../../../theme";

export const allView = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text cn={[st.text(SizeText.title1)]}>Awesome text Title 1</Text>
                <Text cn={[st.text(SizeText.title2)]}>Awesome text Title 2</Text>
                <Text cn={[st.text(SizeText.title3)]}>Awesome text Title 3</Text>
                <Text cn={[st.text(SizeText.headline)]}>Awesome text Headline</Text>
                <Text cn={[st.text(SizeText.body)]}>Awesome text Body</Text>
                <Text cn={[st.text(SizeText.callout)]}>Awesome text Callout</Text>
                <Text cn={[st.text(SizeText.subheadline1)]}>Awesome text Subhedline 1</Text>
                <Text cn={[st.text(SizeText.subheadline2)]}>Awesome text Subhedline 2</Text>
                <Text cn={[st.text(SizeText.footnote)]}>Awesome text Footnote</Text>
                <Text cn={[st.text(SizeText.caption1)]}>Awesome text Caption 1</Text>
                <Text cn={[st.text(SizeText.caption2)]}>Awesome text Caption 2</Text>
                <Text>
                    Значимость этих проблем настолько очевидна, что граница обучения кадров выявляет срочную потребность
                    форм воздействия. Внезапно, реплицированные с зарубежных источников, современные исследования,
                    инициированные исключительно синтетически, указаны как претенденты на роль ключевых факторов. С
                    учётом сложившейся международной обстановки, постоянный количественный рост и сфера нашей активности
                    говорит о возможностях форм воздействия. И нет сомнений, что ключевые особенности структуры проекта
                    заблокированы в рамках своих собственных рациональных ограничений. Но консультация с широким активом
                    выявляет срочную потребность кластеризации усилий!
                </Text>
            </VStack>
        </Example>
    );
};
