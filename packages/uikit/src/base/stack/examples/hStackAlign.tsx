import { Example } from "cookbook";
import { HStack } from "../HStack";
import { VStack } from "../VStack";

import { SizeSpace } from "../../../theme";
import { StackAlign } from "../types.public";

const style = { background: "purple" };
const heightStyle = { background: "orange", height: 80 };

export const hStackAlign = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <HStack gap={SizeSpace.x100} align={StackAlign.start}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={heightStyle}>Three</div>
                </HStack>
                <HStack gap={SizeSpace.x100} align={StackAlign.center}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={heightStyle}>Three</div>
                </HStack>
                <HStack gap={SizeSpace.x100} align={StackAlign.end}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={heightStyle}>Three</div>
                </HStack>
                <HStack gap={SizeSpace.x100} align={StackAlign.stretch}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={heightStyle}>Three</div>
                </HStack>
            </VStack>
        </Example>
    );
};
