import { Example } from "cookbook";
import { HStack } from "../../h-stack";
import { VStack } from "../VStack";

import { SizeSpace } from "theme";

const style = { background: "purple" };

export const vStackGaps = () => {
    return (
        <Example>
            <HStack gap={SizeSpace.x200}>
                <VStack>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x025}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x050}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x075}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x100}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x150}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x200}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x250}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x300}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x400}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x500}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
                <VStack gap={SizeSpace.x600}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </VStack>
            </HStack>
        </Example>
    );
};
