import { Example } from "cookbook";
import { Area } from "../Area";
import { ColorBg, SizeSpace } from "../../../theme";
import { VStack } from "../../stack";

export const spacing = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x100}>
                <Area color={ColorBg.button} compact>
                    <div>Some awesome content</div>
                </Area>
                <Area color={ColorBg.button} spacing={SizeSpace.x100} compact>
                    <div>Some awesome content</div>
                </Area>
                <Area color={ColorBg.button} spacing={{ vertical: SizeSpace.x200, horizontal: SizeSpace.x150 }} compact>
                    <div>Some awesome content</div>
                </Area>
                <Area
                    color={ColorBg.button}
                    compact
                    spacing={{ vertical: SizeSpace.x200, horizontal: SizeSpace.x150, bottom: SizeSpace.x075 }}
                >
                    <div>Some awesome content</div>
                </Area>
                <Area compact color={ColorBg.button} spacing={{ top: SizeSpace.x100, left: SizeSpace.x300 }}>
                    <div>Some awesome content</div>
                </Area>
            </VStack>
        </Example>
    );
};
