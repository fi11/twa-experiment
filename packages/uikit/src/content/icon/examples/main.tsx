import { Example } from "cookbook";
import { Icon } from "../Icon";
import { VStack } from "../../../layout";
import { ColorText, iconStyles, SizeSpace, textStyles } from "theme";
import { SvgEventBusy, SvgGroup, SvgLock, SvgPerson } from "../icon-set";
import { SvgApps } from "../icon-set/apps";
import { SvgTime } from "../icon-set/time";
import { ColorsSys } from "theme";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <Icon>
                    <SvgLock />
                </Icon>
                <Icon cn={[iconStyles.square(ColorsSys.blue)]}>
                    <SvgPerson />
                </Icon>
                <Icon cn={[textStyles.color(ColorText.accent), iconStyles.size(SizeSpace.x300)]}>
                    <SvgGroup />
                </Icon>
                <Icon cn={[textStyles.color(ColorText.destructive), iconStyles.size(SizeSpace.x400)]}>
                    <SvgPerson />
                </Icon>
                <Icon cn={[textStyles.color(ColorText.link), iconStyles.size(SizeSpace.x500)]}>
                    <SvgApps />
                </Icon>
                <Icon cn={[textStyles.color(ColorText.hint), iconStyles.size(SizeSpace.x600)]}>
                    <SvgEventBusy />
                </Icon>
                <Icon cn={[iconStyles.size(SizeSpace.x700)]}>
                    <SvgTime />
                </Icon>
                <Icon cn={[iconStyles.size(SizeSpace.x800)]}>
                    <SvgPerson />
                </Icon>
                <Icon cn={[iconStyles.square(ColorsSys.blue), iconStyles.size(SizeSpace.x800)]}>
                    <SvgApps />
                </Icon>
                <Icon cn={[iconStyles.square(ColorsSys.orange)]}>
                    <SvgPerson />
                </Icon>
                <Icon cn={[iconStyles.square(ColorsSys.purple)]}>
                    <SvgPerson />
                </Icon>
            </VStack>
        </Example>
    );
};
