import { ComponentChild } from "preact";
import { Box } from "uikit";
import { cn, ColorBg, css, SizeSpace, st, telegramTheme } from "theme";

const style = css({
    width: "100%",
    height: "100%",
});
export function AppLayout({ children }: { children: ComponentChild }) {
    return (
        <Box cn={[st.colorBg(ColorBg.secondary), cn(style(), telegramTheme)]}>
            <Box
                cn={[
                    st.vSpacing(SizeSpace.x200),
                    st.colorBg(ColorBg.secondary),
                    st.scroll("v"),
                    cn(style(), telegramTheme),
                ]}
            >
                {children}
            </Box>
        </Box>
    );
}
