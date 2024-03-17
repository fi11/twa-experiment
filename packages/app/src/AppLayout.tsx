import { ComponentChild } from "preact";
import { css, cn, Area, ColorBg, SizeSpace, telegramTheme } from "uikit";

const style = css({
    width: "100%",
    height: "100%",
});
export function AppLayout({ children }: { children: ComponentChild }) {
    return (
        <Area spacing={SizeSpace.x200} className={cn(style, telegramTheme)} color={ColorBg.secondary}>
            {children}
        </Area>
    );
}
