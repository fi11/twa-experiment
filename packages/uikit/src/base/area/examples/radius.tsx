import { Example } from "cookbook";
import { Area } from "../Area";
import { ColorBg, SizeSpace } from "../../../theme";
import { VStack } from "../../stack";

export const radius = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x100}>
                <Area color={ColorBg.button} spacing={SizeSpace.x200}>
                    <div>Some awesome content</div>
                </Area>
                <Area color={ColorBg.button} spacing={SizeSpace.x200} radius={SizeSpace.x100}>
                    <div>Some awesome content</div>
                </Area>
                <Area
                    color={ColorBg.button}
                    spacing={SizeSpace.x200}
                    radius={{ vertical: SizeSpace.x200, horizontal: SizeSpace.x150 }}
                >
                    <div>Some awesome content</div>
                </Area>
                <Area
                    color={ColorBg.button}
                    spacing={SizeSpace.x200}
                    radius={{ vertical: SizeSpace.x400, horizontal: SizeSpace.x300, bottom: SizeSpace.x150 }}
                >
                    <div>Some awesome content</div>
                </Area>
                <Area
                    color={ColorBg.button}
                    spacing={SizeSpace.x200}
                    radius={{ top: SizeSpace.x200, left: SizeSpace.x300 }}
                >
                    <div>Some awesome content</div>
                </Area>
            </VStack>
        </Example>
    );
};
