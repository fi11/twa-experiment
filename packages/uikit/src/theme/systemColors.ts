import { dt } from "./utils";

export enum ColorsSys {
    red = "red",
    orange = "orange",
    yellow = "yellow",
    green = "green",
    teal = "teal",
    blue = "blue",
    purple = "purple",
}
export const systemColors = {
    [ColorsSys.red]: dt("colorSystemRed"),
    [ColorsSys.orange]: dt("colorSystemOrange"),
    [ColorsSys.yellow]: dt("colorSystemYellow"),
    [ColorsSys.green]: dt("colorSystemGreen"),
    [ColorsSys.teal]: dt("colorSystemTeal"),
    [ColorsSys.blue]: dt("colorSystemBlue"),
    [ColorsSys.purple]: dt("colorSystemPurple"),
};
// colorSystemRed: designToken('rgb(255, 59, 48)'),
//     colorSystemOrange: designToken('rgb(255, 149, 0)'),
//     colorSystemYellow: designToken('rgb(255, 204, 0)'),
//     colorSystemGreen: designToken('rgb(45,148,62)'),
//     colorSystemTeal: designToken('rgba(0, 128, 128)'),
//     colorSystemBlue: designToken('rgb(0, 122, 255)'),
//     colorSystemPurple: designToken('rgb(88, 86, 214)'),
