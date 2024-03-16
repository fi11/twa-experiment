import { Example } from "cookbook";
import { HStack } from "../HStack";
import { VStack } from "../VStack";

import { SizeSpace } from "../../../theme";
import { StackAlign, StackDistribution } from "../types.public";

const style = { background: "purple" };
export const vStackAlign = () => {
    return (
        <Example>
            <HStack gap={SizeSpace.x200}>
                <VStack gap={SizeSpace.x100} align={StackAlign.start}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>...............</div>
                </VStack>
                <VStack gap={SizeSpace.x100} align={StackAlign.center}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>...............</div>
                </VStack>
                <VStack gap={SizeSpace.x100} align={StackAlign.end}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>...............</div>
                </VStack>
                <VStack gap={SizeSpace.x100} align={StackAlign.stretch}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>...............</div>
                </VStack>
            </HStack>
        </Example>
    );
};
