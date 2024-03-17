import { AppLayout } from "./AppLayout";
import {
    Area,
    AreaAlign,
    ColorBg,
    ContentCard,
    Icon,
    Label,
    Layout,
    Section,
    SectionRow,
    SizeSpace,
    SvgGroup,
    VStack,
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
            <Layout
                body={
                    <Area vScroll>
                        <VStack gap={SizeSpace.x200}>
                            <Area
                                compact
                                hAlign={AreaAlign.center}
                                indentBottom={SizeSpace.x400}
                                indentTop={SizeSpace.x200}
                            >
                                <LogoSvg />
                            </Area>
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
                    </Area>
                }
            />
        </AppLayout>
    );
}
