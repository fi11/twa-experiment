import { Example } from "cookbook";
import { VStack } from "../../stack";
import { Area } from "../Area";
import { ColorBg, SizeSpace } from "../../../theme";

export const indent = () => {
    return (
        <Example>
            <VStack>
                <Area compact spacing={SizeSpace.x150} color={ColorBg.button}>
                    Awesome Area Section
                </Area>
                <Area compact spacing={SizeSpace.x150} color={ColorBg.button} indentLeft={SizeSpace.x200}>
                    Awesome Area Section
                </Area>
                <Area compact spacing={SizeSpace.x150} color={ColorBg.button} indentTop={SizeSpace.x100}>
                    Awesome Area Section
                </Area>
                <Area compact spacing={SizeSpace.x150} color={ColorBg.button} indentBottom={SizeSpace.x400}>
                    Awesome Area Section
                </Area>
                <Area compact spacing={SizeSpace.x150} color={ColorBg.button} indentRight={SizeSpace.x300}>
                    Awesome Area Section
                </Area>
            </VStack>
        </Example>
    );
};
