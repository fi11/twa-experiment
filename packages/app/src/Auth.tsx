import { Align, Box, Section, SizeSpace, SizeText, Text, VStack } from "uikit";
import { textStyles, st } from "theme";
import { AppLayout } from "./AppLayout";
import { LogoSvg } from "./LogoSvg";
import { useEffect, useState } from "preact/hooks";

export const Auth = () => {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        Telegram.WebApp.expand();
        fetch("https://d5d6i4dcisfrr6ceqmue.apigw.yandexcloud.net/auth", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json;charset=utf-8",
            }),
            // headers: new Headers({ "content-type": "application/json" }),
            credentials: "omit",
            // mode: "no-cors",
            mode: "cors",
            body: JSON.stringify({
                initData: Telegram.WebApp.initData,
            }),
        })
            .then(r => r.json())
            .then(result => {
                setData(result);
            })
            .catch(error => {
                console.log(error);
                setData({ error: error?.message });
            });
    }, []);

    return (
        <AppLayout>
            <VStack gap={SizeSpace.x200}>
                <Box cn={[st.hAlign(Align.center), st.vIndentStart(SizeSpace.x200), st.vIndentEnd(SizeSpace.x400)]}>
                    <LogoSvg />
                </Box>
                <Section>
                    <Box cn={[st.vIndentStart(SizeSpace.x300)]}>
                        <Text cn={[textStyles.font(SizeText.footnote)]}>
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </Text>
                    </Box>
                </Section>
            </VStack>
        </AppLayout>
    );
};
