import { Example } from "cookbook";
import { Area } from "../Area";
import { ColorBg, SizeSpace } from "../../../theme";
import { VStack } from "../../stack";

export const colors = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x100}>
                <Area color={ColorBg.main} spacing={SizeSpace.x150}>
                    <div>Main background color</div>
                </Area>
                <Area color={ColorBg.secondary} spacing={SizeSpace.x150}>
                    <div>Secondary background color</div>
                </Area>
                <Area color={ColorBg.header} spacing={SizeSpace.x150}>
                    <div>Header background color</div>
                </Area>
                <Area color={ColorBg.section} spacing={SizeSpace.x150}>
                    <div>Section background color</div>
                </Area>
                <Area color={ColorBg.button} spacing={SizeSpace.x150}>
                    <div>Button background color</div>
                </Area>
                <Area color={ColorBg.sectionSeparator} spacing={SizeSpace.x150}>
                    <div>Section separator background color</div>
                </Area>
            </VStack>
        </Example>
    );
};
