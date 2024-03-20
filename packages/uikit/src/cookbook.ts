import { main } from "cookbook";
import * as text from "./content/text/examples";
import * as vstack from "./layout/h-stack/examples";
import * as hstack from "./layout/v-stack/examples";
import * as box from "./layout/box/examples";
import * as vcell from "./layout/v-cell/examples";
import * as hcell from "./layout/h-cell/examples";
import * as contentCard from "./blocks/content-card/examples";
import * as sectionRow from "./blocks/section-row/examples";
import * as section from "./blocks/section/examples";
import * as image from "./content/image/examples";
import * as icon from "./content/icon/examples";
import * as label from "./content/label/examples";
import { backgrounds, cn, ColorBg, telegramTheme } from "theme";
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
    { text, vstack, hstack, box, vcell, hcell, section, sectionRow, contentCard, image, icon, label },
    { className: cn(telegramTheme, bg) },
);
