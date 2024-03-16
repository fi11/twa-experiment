import { dt } from "./utils";
import { SizeText } from "./types";

export const typography = {
    familyMain: dt("fontFamilyMain"),

    [SizeText.title1]: dt("fontTitle1"),
    [SizeText.title2]: dt("fontTitle2"),
    [SizeText.title3]: dt("fontTitle3"),
    [SizeText.headline]: dt("fontHeadline"),
    [SizeText.body]: dt("fontBody"),
    [SizeText.callout]: dt("fontCallout"),
    [SizeText.subheadline1]: dt("fontSubheadline1"),
    [SizeText.subheadline2]: dt("fontSubheadline2"),
    [SizeText.footnote]: dt("fontFootnote"),
    [SizeText.caption1]: dt("fontCaption1"),
    [SizeText.caption2]: dt("fontCaption2"),
};
