import { Example } from "cookbook";
import { Area, AreaAlign, Layout, Text, VStack } from "../../../base";
import { ColorBg, SizeSpace } from "../../../theme";
import { ContentCard } from "../ContentCard";
import coverSrc from "../../../content/image/examples/cover.jpeg";

export const main = () => {
    return (
        <Example>
            <Area color={ColorBg.secondary}>
                <Layout
                    header={
                        <Area color={ColorBg.header} hAlign={AreaAlign.center}>
                            <Text inline>Awesome App Title</Text>
                        </Area>
                    }
                    body={
                        <Area spacing={SizeSpace.x150} vScroll>
                            <VStack gap={SizeSpace.x200}>
                                <ContentCard
                                    coverSrc={coverSrc}
                                    title={"Атомные привычки"}
                                    description={
                                        "Практический марафон по изменению себя через свои привычки. Групповая работа без шансов\n" +
                                        '"соскочить" и без возможности ошибиться.'
                                    }
                                />
                                <ContentCard
                                    coverSrc={coverSrc}
                                    title={"Атомные привычки"}
                                    description={"Практический марафон ..."}
                                />
                                <ContentCard coverSrc={coverSrc} overlay title={"Атомные привычки"} />
                                <ContentCard coverSrc={coverSrc} overlay label={"Тест"} title={"Атомные привычки"} />
                                <ContentCard coverSrc={coverSrc} overlay label={"Тест"} />
                            </VStack>
                        </Area>
                    }
                    footer={
                        <Area spacing={SizeSpace.x150} color={ColorBg.main}>
                            <Area spacing={SizeSpace.x150} color={ColorBg.button} hAlign={AreaAlign.center}>
                                <Text>Записаться</Text>
                            </Area>
                        </Area>
                    }
                />
            </Area>
        </Example>
    );
};
