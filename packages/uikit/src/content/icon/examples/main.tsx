import { Example } from "cookbook";
import { Icon } from "../Icon";
import { VStack } from "../../../base";
import { ColorText, SizeSpace } from "../../../theme";
import { SvgEventBusy, SvgGroup, SvgLock, SvgPerson } from "../icon-set";
import { SvgApps } from "../icon-set/apps";
import { SvgTime } from "../icon-set/time";
import { IconView } from "../types.public";
import { ColorsSys } from "../../../theme/systemColors";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Icon>
                    <SvgLock />
                </Icon>
                <Icon view={IconView.squad}>
                    <SvgPerson />
                </Icon>
                <Icon size={SizeSpace.x300} color={ColorText.accent}>
                    <SvgGroup />
                </Icon>
                <Icon size={SizeSpace.x400} color={ColorText.destructive}>
                    <SvgPerson />
                </Icon>
                <Icon size={SizeSpace.x500} color={ColorText.link}>
                    <SvgApps />
                </Icon>
                <Icon size={SizeSpace.x600} color={ColorText.hint}>
                    <SvgEventBusy />
                </Icon>
                <Icon size={SizeSpace.x700}>
                    <SvgTime />
                </Icon>
                <Icon size={SizeSpace.x800}>
                    <SvgPerson />
                </Icon>
                <Icon view={IconView.squad} size={SizeSpace.x800}>
                    <SvgApps />
                </Icon>
                <Icon view={IconView.squad} bgColor={ColorsSys.orange}>
                    <SvgPerson />
                </Icon>
                <Icon view={IconView.squad} bgColor={ColorsSys.purple}>
                    <SvgPerson />
                </Icon>
            </VStack>
        </Example>
    );
};
