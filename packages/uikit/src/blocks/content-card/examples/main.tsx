import { Example } from "cookbook";
import { Box, VCell, VStack } from "../../../layout";
import { Text } from "../../../content";
import { ColorBg, SizeSpace, st } from "theme";
import { ContentCard } from "../ContentCard";
import coverSrc from "../../../content/image/examples/cover.jpeg";
import { Align } from "theme";

export const main = () => {
    return (
        <Example>
            <Box cn={[st.colorBg(ColorBg.secondary)]}>
                <VCell
                    start={
                        <Box cn={[st.hAlign(Align.center), st.colorBg(ColorBg.header)]}>
                            <Text inline>Awesome App Title</Text>
                        </Box>
                    }
                    body={
                        <Box cn={[st.scroll("v"), st.spacing(SizeSpace.x150)]}>
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
                        </Box>
                    }
                    end={
                        <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.main)]}>
                            <Box cn={[st.spacing(SizeSpace.x150), st.hAlign(Align.center), st.colorBg(ColorBg.button)]}>
                                <Text>Записаться</Text>
                            </Box>
                        </Box>
                    }
                />
            </Box>
        </Example>
    );
};
