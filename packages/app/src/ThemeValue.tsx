import { Box, SizeSpace, SizeText, Text, st } from "uikit";
// element.style.getPropertyValue("--my-var");
//
// getComputedStyle(element).getPropertyValue("--my-var");
//
// element.style.setProperty("--my-var", jsVar + 4);

export const ThemeValue = () => {
    let value: string = "";
    try {
        value = JSON.stringify(Telegram.WebApp.themeParams, null, 2);
    } catch {}
    return (
        <Box cn={[st.vIndentStart(SizeSpace.x300)]}>
            <Text cn={[st.text(SizeText.footnote)]}>
                <pre style={{}}>{value}</pre>
            </Text>
        </Box>
    );
};
