import { dt } from "./utils";
import { ColorText } from "./types";

export const textColors = {
    [ColorText.body]: dt("colorTextMain"),
    [ColorText.accent]: dt("colorTextAccent"),
    [ColorText.destructive]: dt("colorTextDestructive"),
    [ColorText.button]: dt("colorTextButton"),
    [ColorText.sectionHeader]: dt("colorTextSectionHeader"),
    [ColorText.subtitle]: dt("colorTextSubtitle"),
    [ColorText.link]: dt("colorTextLink"),
    [ColorText.hint]: dt("colorTextHint"),
};
