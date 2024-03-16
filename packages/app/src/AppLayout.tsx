import { ComponentChild } from "preact";
import { Area, ColorBg, SizeSpace, telegramTheme } from "uikit";

export function AppLayout({ children }: { children: ComponentChild }) {
    return (
        <Area spacing={SizeSpace.x200} className={telegramTheme} color={ColorBg.secondary}>
            {children}
        </Area>
    );
}
