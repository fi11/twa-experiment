import { css } from "goober";
import { textColors } from "./textColors";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { backgrounds } from "./backgrounds";
import { ColorsSys, systemColors } from "./systemColors";

const defaultDark = {
    section_bg_color: `#282828`,
    subtitle_text_color: `#ffffff`,
    button_color: `#007aff`,
    header_bg_color: `#1c1c1c`,
    destructive_text_color: `#ff453a`,
    text_color: `#ffffff`,
    hint_color: `#ffffff`,
    link_color: `#007aff`,
    secondary_bg_color: `#1c1c1c`,
    section_header_text_color: `#e5e5e5`,
    bg_color: `#282828`,
    accent_text_color: `#007aff`,
    button_text_color: `#ffffff`,

    section_separator_color: "#2e3035",
};

const defaultDarkLight = {
    text_color: `#000000`,
    link_color: `#2481cc`,
    destructive_text_color: `#ff3b30`,
    hint_color: `#999999`,
    bg_color: `#ffffff`,
    secondary_bg_color: `#efeff3`,
    accent_text_color: `#2481cc`,
    section_header_text_color: `#6d6d71`,
    button_color: `#2481cc`,
    header_bg_color: `#efeff3`,
    section_bg_color: `#ffffff`,
    subtitle_text_color: `#999999`,
    button_text_color: `#ffffff`,
    section_separator_color: "#2e3035",
};

const fontFamily = '-apple-system, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export const telegramTheme = css`
    color: ${textColors.body.var};
    ${textColors.body.define(`var(--tg-theme-text-color,${defaultDark.text_color})`)}
    ${textColors.accent.define(`var(--tg-theme-accent-text-color,${defaultDark.accent_text_color})`)}
    ${textColors.destructive.define(`var(--tg-theme-destructive-text-color,${defaultDark.destructive_text_color})`)}
    ${textColors.button.define(`var(--tg-theme-button-text-color,${defaultDark.button_text_color})`)}
    ${textColors.sectionHeader.define(
        `var(--tg-theme-section-header-text-color,${defaultDark.section_header_text_color})`,
    )}
    ${textColors.subtitle.define(`var(--tg-theme-subtitle-text-color,${defaultDark.subtitle_text_color})`)}
    ${textColors.link.define(`var(--tg-theme-link-color,${defaultDark.link_color})`)}
    ${textColors.hint.define(`var(--tg-theme-hint-color,${defaultDark.hint_color})`)}

    ${backgrounds.main.define(`var(--tg-theme-bg-color, ${defaultDark.bg_color})`)}
    ${backgrounds.secondary.define(`var(--tg-theme-secondary-bg-color,${defaultDark.secondary_bg_color})`)}
    ${backgrounds.header.define(`var(--tg-theme-header-bg-color,${defaultDark.header_bg_color})`)}
    ${backgrounds.section.define(`var(--tg-theme-section-bg-color,${defaultDark.section_bg_color})`)}
    ${backgrounds.button.define(`var(--tg-theme-button-color,${defaultDark.button_color})`)}
    ${backgrounds.sectionSeparator.define(
        `var(--tg-theme-section-separator-color,${defaultDark.section_separator_color})`,
    )}

    ${systemColors[ColorsSys.red].define("rgb(255, 59, 48)")}
    ${systemColors[ColorsSys.orange].define("rgb(255, 149, 0)")}
    ${systemColors[ColorsSys.yellow].define("rgb(255, 204, 0)")}
    ${systemColors[ColorsSys.green].define("rgb(45,148,62)")}
    ${systemColors[ColorsSys.teal].define("rgba(0, 128, 128)")}
    ${systemColors[ColorsSys.blue].define("rgb(0, 122, 255)")}
    ${systemColors[ColorsSys.purple].define("rgb(88, 86, 214)")}
    
    ${typography.familyMain.define(fontFamily)}
    
    ${typography.title1.define(`500 28px/34px ${typography.familyMain.var}`)}
    ${typography.title2.define(`500 20px/28px ${typography.familyMain.var}`)}
    ${typography.title3.define(`400 17px/24px ${typography.familyMain.var}`)}
    ${typography.headline.define(`500 16px/20px ${typography.familyMain.var}`)}
    ${typography.body.define(`300 16px/22px ${typography.familyMain.var}`)}
    ${typography.callout.define(`400 15px/18px ${typography.familyMain.var}`)}
    ${typography.subheadline1.define(`500 14px/18px ${typography.familyMain.var}`)}
    ${typography.subheadline2.define(`600 13px/16px ${typography.familyMain.var}`)}
    ${typography.footnote.define(`400 13px/16px ${typography.familyMain.var}`)}
    ${typography.caption1.define(`400 12px/15px ${typography.familyMain.var}`)}
    ${typography.caption2.define(`400 11px/14px ${typography.familyMain.var}`)}

    ${typography.title1.define(`500 28px/34px ${typography.familyMain.var}`)}
    ${typography.title2.define(`500 22px/28px ${typography.familyMain.var}`)}
    ${typography.title3.define(`400 20px/24px ${typography.familyMain.var}`)}
    ${typography.headline.define(`500 17px/22px ${typography.familyMain.var}`)}
    ${typography.body.define(`400 17px/22px ${typography.familyMain.var}`)}
    ${typography.callout.define(`400 16px/22px ${typography.familyMain.var}`)}
    ${typography.subheadline1.define(`600 15px/18px ${typography.familyMain.var}`)}
    ${typography.subheadline2.define(`600 14px/18px ${typography.familyMain.var}`)}
    ${typography.footnote.define(`400 13px/18px ${typography.familyMain.var}`)}
    ${typography.caption1.define(`400 12px/16px ${typography.familyMain.var}`)}
    ${typography.caption2.define(`400 11px/13px ${typography.familyMain.var}`)}
    
    ${spacing.x025.define(`${8 * 0.25}px`)} 
    ${spacing.x050.define(`${8 * 0.5}px`)}
    ${spacing.x075.define(`${8 * 0.75}px`)}
    ${spacing.x100.define(`${8 * 1}px`)}
    ${spacing.x150.define(`${8 * 1.5}px`)}
    ${spacing.x200.define(`${8 * 2}px`)}
    ${spacing.x250.define(`${8 * 2.5}px`)}
    ${spacing.x300.define(`${8 * 3}px`)}
    ${spacing.x400.define(`${8 * 4}px`)}
    ${spacing.x500.define(`${8 * 5}px`)}
    ${spacing.x600.define(`${8 * 6}px`)}
    ${spacing.x700.define(`${8 * 7}px`)}
    ${spacing.x800.define(`${8 * 8}px`)}
`;

// space.0	0×	0rem	0px
// space.025	0.25×	0.125rem	2px
// space.050	0.5×	0.25rem	4px
// space.075	0.75×	0.375rem	6px
// space.100	1×	0.5rem	8px
// space.150	1.5×	0.75rem	12px
// space.200	2×	1rem	16px
// space.250	2.5×	1.25rem	20px
// space.300	3×	1.5rem	24px
// space.400	4×	2rem	32px
// space.500	5×	2.5rem	40px
// space.600	6×	3rem	48px
// space.800	8×	4rem	64px
// space.1000	10×	5rem	80px

// 2 6 / 8/ 12 16 24 32 40 48
// spaceSizeXXS: designToken('1px'),
// spaceSizeXS: designToken('4px'),
// spaceSizeS: designToken('8px'),
// spaceSizeM: designToken('20px'),
// spaceSizeL: designToken('40px'),
// spaceSizeXL: designToken('48px'),
// spaceSizeXXL: designToken('72px'),
// spaceSize3XL: designToken('96px'),

// ${cssVars.fontTitle1}: 500 28px/34px var(${cssVars.fontFamilyMain});
// ${cssVars.fontTitle2}: 500 22px/28px var(${cssVars.fontFamilyMain});
// ${cssVars.fontTitle3}: 400 20px/24px var(${cssVars.fontFamilyMain});
// ${cssVars.fontHeadline}: 500 17px/22px var(${cssVars.fontFamilyMain});
// ${cssVars.fontBody}: 400 17px/22px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCallout}: 400 16px/22px var(${cssVars.fontFamilyMain});
// ${cssVars.fontSubheadline1}: 400 15px/18px var(${cssVars.fontFamilyMain});
// ${cssVars.fontSubheadline2}: 400 14px/18px var(${cssVars.fontFamilyMain});
// ${cssVars.fontFootnote}: 400 13px/18px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCaption1}: 400 12px/16px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCaption2}: 400 11px/13px var(${cssVars.fontFamilyMain});

// ${cssVars.fontTitle1}: 500 28px/33px var(${cssVars.fontFamilyMain});
// ${cssVars.fontTitle2}: 500 20px/23px var(${cssVars.fontFamilyMain});
// ${cssVars.fontTitle3}: 400 17px/20px var(${cssVars.fontFamilyMain});
// ${cssVars.fontHeadline}: 500 16px/18px var(${cssVars.fontFamilyMain});
// ${cssVars.fontBody}: 400 16px/19px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCallout}: 400 15px/28px var(${cssVars.fontFamilyMain});
// ${cssVars.fontSubheadline1}: 400 14px/16px var(${cssVars.fontFamilyMain});
// ${cssVars.fontSubheadline2}: 400 13px/15px var(${cssVars.fontFamilyMain});
// ${cssVars.fontFootnote}: 400 13px/15px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCaption1}: 400 12px/13px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCaption2}: 400 11px/13px var(${cssVars.fontFamilyMain});

// ${cssVars.fontTitle1}: 500 28px/33px var(${cssVars.fontFamilyMain});
// ${cssVars.fontTitle2}: 500 20px/23px var(${cssVars.fontFamilyMain});
// ${cssVars.fontTitle3}: 400 17px/20px var(${cssVars.fontFamilyMain});
// ${cssVars.fontHeadline}: 500 16px/18px var(${cssVars.fontFamilyMain});
// ${cssVars.fontBody}: 400 16px/21px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCallout}: 400 15px/18px var(${cssVars.fontFamilyMain});
// ${cssVars.fontSubheadline1}: 400 14px/16px var(${cssVars.fontFamilyMain});
// ${cssVars.fontSubheadline2}: 400 13px/15px var(${cssVars.fontFamilyMain});
// ${cssVars.fontFootnote}: 400 13px/15px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCaption1}: 400 12px/13px var(${cssVars.fontFamilyMain});
// ${cssVars.fontCaption2}: 400 11px/13px var(${cssVars.fontFamilyMain});

// ${typography.title1.define(`500 28px/34px ${typography.familyMain.var}`)}
//     ${typography.title2.define(`500 20px/28px ${typography.familyMain.var}`)}
//     ${typography.title3.define(`400 17px/24px ${typography.familyMain.var}`)}
//     ${typography.headline.define(`500 16px/20px ${typography.familyMain.var}`)}
//     ${typography.body.define(`300 16px/22px ${typography.familyMain.var}`)}
//     ${typography.callout.define(`400 15px/18px ${typography.familyMain.var}`)}
//     ${typography.subheadline1.define(`500 14px/18px ${typography.familyMain.var}`)}
//     ${typography.subheadline2.define(`600 13px/16px ${typography.familyMain.var}`)}
//     ${typography.footnote.define(`400 13px/16px ${typography.familyMain.var}`)}
//     ${typography.caption1.define(`400 12px/15px ${typography.familyMain.var}`)}
//     ${typography.caption2.define(`400 11px/14px ${typography.familyMain.var}`)}
