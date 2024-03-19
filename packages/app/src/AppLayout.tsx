import { ComponentChild } from "preact";
import { Box, cn, ColorBg, css, SizeSpace, st, telegramTheme } from "uikit";

const style = css({
    width: "100%",
    height: "100%",
});
export function AppLayout({ children }: { children: ComponentChild }) {
    return (
        <Box cn={[st.spacing(SizeSpace.x200), st.colorBg(ColorBg.secondary), cn(style, telegramTheme)]}>{children}</Box>
    );
}
