import { Example } from "cookbook";

import { Text } from "../index";
import { VStack } from "../../stack";

import { SizeSpace, SizeText } from "../../../theme";

export const allView = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Text size={SizeText.title1}>Awesome text Title 1</Text>
                <Text size={SizeText.title2}>Awesome text Title 2</Text>
                <Text size={SizeText.title3}>Awesome text Title 3</Text>
                <Text size={SizeText.headline}>Awesome text Headline</Text>
                <Text size={SizeText.body}>Awesome text Body</Text>
                <Text size={SizeText.callout}>Awesome text Callout</Text>
                <Text size={SizeText.subheadline1}>Awesome text Subhedline 1</Text>
                <Text size={SizeText.subheadline2}>Awesome text Subhedline 2</Text>
                <Text size={SizeText.footnote}>Awesome text Footnote</Text>
                <Text size={SizeText.caption1}>Awesome text Caption 1</Text>
                <Text size={SizeText.caption2}>Awesome text Caption 2</Text>
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
