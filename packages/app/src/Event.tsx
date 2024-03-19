import { AppLayout } from "./AppLayout";
import {
    Box,
    ColorBg,
    ContentCard,
    Icon,
    Label,
    VCell,
    Section,
    SectionRow,
    SizeSpace,
    SvgGroup,
    VStack,
    st,
    Align,
} from "uikit";
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
            <VCell
                body={
                    <Box cn={[st.scroll("v")]}>
                        <VStack gap={SizeSpace.x200}>
                            <Box
                                cn={[
                                    st.hAlign(Align.center),
                                    st.vIndentStart(SizeSpace.x200),
                                    st.vIndentEnd(SizeSpace.x400),
                                ]}
                            >
                                <LogoSvg />
                            </Box>
                            <ContentCard
                                coverSrc={coverSrc}
                                title={"Атомные привычки"}
                                label={"17 апр Вт / 19:00"}
                                description={
                                    "Практический марафон по изменению себя через свои привычки. Групповая работа без шансов\n" +
                                    '"соскочить" и без возможности ошибиться.'
                                }
                            />
                            <Section outline>
                                <SectionRow
                                    color={ColorBg.secondary}
                                    title={"Участники"}
                                    start={
                                        <Icon>
                                            <SvgGroup />
                                        </Icon>
                                    }
                                    end={<Label title={"3/8"} />}
                                />
                            </Section>
                        </VStack>
                    </Box>
                }
            />
        </AppLayout>
    );
}
