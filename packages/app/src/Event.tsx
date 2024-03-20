import { AppLayout } from "./AppLayout";
import { Box, ContentCard, Icon, Label, Section, SectionRow, SizeSpace, SvgGroup, VStack } from "uikit";
import { st, Align } from "theme";
import { LogoSvg } from "./LogoSvg";
import coverSrc from "./media/cover.jpeg";
import { useEffect } from "preact/hooks";

export function Event() {
    useEffect(() => {
        Telegram.WebApp.expand();
        Telegram.WebApp.MainButton.setText("Записаться");
        Telegram.WebApp.MainButton.show();
        Telegram.WebApp.MainButton.onClick(() => {
            Telegram.WebApp.MainButton.setText("Идет запись...");

            Telegram.WebApp.MainButton.showProgress();
            setTimeout(() => {
                Telegram.WebApp.MainButton.hideProgress();
                Telegram.WebApp.MainButton.setText("Отменить запись");
                Telegram.WebApp.showPopup({
                    title: "Вы успешно записаны",
                    message: "Мы записали вас на мероприятие, будем ждать",
                    buttons: [{ type: "ok" }],
                });
            }, 2000);
        });
    }, []);
    return (
        <AppLayout>
            <VStack gap={SizeSpace.x200}>
                <Box cn={[st.hAlign(Align.center), st.vIndentStart(SizeSpace.x200), st.vIndentEnd(SizeSpace.x400)]}>
                    <LogoSvg />
                </Box>
                <Box cn={[st.hIndent(SizeSpace.x200)]}>
                    <ContentCard
                        coverSrc={coverSrc}
                        title={"Атомные привычки"}
                        label={"18 апр Вт / 19:00"}
                        description={
                            "Практический марафон по изменению себя через свои привычки. Групповая работа без шансов\n" +
                            '"соскочить" и без возможности ошибиться.'
                        }
                    />
                </Box>
                <Section outline>
                    <SectionRow
                        transparent
                        title={"Участники"}
                        start={
                            <Icon>
                                <SvgGroup />
                            </Icon>
                        }
                        end={<Label title={"7/8"} />}
                    />
                </Section>
                <Section>
                    <SectionRow
                        title={"О событии"}
                        description={
                            'Власть – одно из вечных устремлений и один из мощнейших соблазнов человечества. Как была устроена власть в прошлом? Командовали ли предки друг другом? Когда появилась идея превосходства одного над другим? Когда власть стала не только личной, но и наследственной? Как идея власти меняла человечество? Обо всём этом и многом другом – лекция С.В. Дробышевского "Анатомия власти".'
                        }
                    />
                    <SectionRow title={"Формат"} end={<Label title={"Лекция"} />} />
                    <SectionRow title={"Локация"} end={<Label title={"Все пространство"} />} />
                    <SectionRow title={"Ведущий"} end={<Label title={"Павел Силин"} />} />
                    <SectionRow title={"Возратсная категория"} end={<Label title={"18+"} />} />
                </Section>
            </VStack>
        </AppLayout>
    );
}
