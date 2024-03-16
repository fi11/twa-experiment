import { Area, SizeSpace, SizeText, Text } from "uikit";
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
        <Area indentTop={SizeSpace.x300}>
            <Text size={SizeText.footnote}>
                <pre style={{}}>{value}</pre>
            </Text>
        </Area>
    );
};
