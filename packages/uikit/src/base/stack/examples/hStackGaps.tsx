import { Example } from "cookbook";
import { VStack } from "../VStack";
import { HStack } from "../HStack";

import { SizeSpace } from "../../../theme";

const style = { background: "purple" };

export const hStackGaps = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <HStack>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x025}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x050}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x075}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x100}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x150}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x200}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x250}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x300}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x400}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x500}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
                <HStack gap={SizeSpace.x600}>
                    <div style={style}>One</div>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                </HStack>
            </VStack>
        </Example>
    );
};
