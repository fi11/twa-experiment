import { main } from "cookbook";
import * as text from "./base/text/examples";
import * as stack from "./base/stack/examples";
import * as area from "./base/area/examples";
import * as layout from "./base/layout/examples";
import * as cell from "./base/cell/examples";
import * as contentCard from "./blocks/content-card/examples";
import * as sectionRow from "./blocks/section-row/examples";
import * as section from "./blocks/section/examples";
import * as image from "./content/image/examples";
import * as icon from "./content/icon/examples";
import * as label from "./content/label/examples";
import { backgrounds, cn, ColorBg, telegramTheme, theme } from "./theme";
import { css } from "goober";

const t = {
    bg_color: "#ffffff",
    text_color: "#000000",
    hint_color: "#707579",
    link_color: "#3390ec",
    button_color: "#3390ec",
    button_text_color: "#ffffff",
    secondary_bg_color: "#f4f4f5",
    header_bg_color: "#ffffff",
    accent_text_color: "#3390ec",
    section_bg_color: "#ffffff",
    section_header_text_color: "#707579",
    subtitle_text_color: "#707579",
    destructive_text_color: "#e53935",
};

const bg = css`
    background: ${backgrounds[ColorBg.secondary].var};
`;

main(
    { text, stack, area, layout, cell, section, sectionRow, contentCard, image, icon, label },
    { className: cn(telegramTheme, bg) },
);
