import { Example } from "cookbook";
import { HStack } from "../HStack";
import { VStack } from "../VStack";

import { ColorBg, SizeSpace } from "../../../theme";
import { StackDistribution } from "../types.public";
import { Area } from "../../area";

const style = { background: "purple" };
export const hStackDistribution = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x200}>
                <HStack gap={SizeSpace.x100} distribution={StackDistribution.start}>
                    <Area color={ColorBg.button}>One</Area>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                    <div style={style}>Four</div>
                    <div style={style}>Five</div>
                </HStack>
                <HStack gap={SizeSpace.x100} distribution={StackDistribution.end}>
                    <Area color={ColorBg.button}>One</Area>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                    <div style={style}>Four</div>
                    <div style={style}>Five</div>
                </HStack>
                <HStack gap={SizeSpace.x100} distribution={StackDistribution.center}>
                    <Area color={ColorBg.button}>One</Area>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                    <div style={style}>Four</div>
                    <div style={style}>Five</div>
                </HStack>
                <HStack gap={SizeSpace.x100} distribution={StackDistribution.stretch}>
                    <Area color={ColorBg.button}>One</Area>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                    <div style={style}>Four</div>
                    <div style={style}>Five</div>
                </HStack>
                <HStack gap={SizeSpace.x100} distribution={StackDistribution.startGrow}>
                    <Area color={ColorBg.button}>One</Area>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                    <div style={style}>Four</div>
                    <div style={style}>Five</div>
                </HStack>
                <HStack gap={SizeSpace.x100} distribution={StackDistribution.endGrow}>
                    <Area color={ColorBg.button}>One</Area>
                    <div style={style}>Two</div>
                    <div style={style}>Tree</div>
                    <div style={style}>Four</div>
                    <div style={style}>Five</div>
                </HStack>
            </VStack>
        </Example>
    );
};
