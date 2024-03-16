import { Example } from "cookbook";
import { HStack, VStack } from "../../stack";
import { Cell } from "../Cell";
import { Text } from "../../text";
import { ColorBg, SizeSpace } from "../../../theme";
import { Area } from "../../area";

export const all = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x400}>
                <HStack gap={SizeSpace.x100}>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            start={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.section}>
                                    <Text>Start</Text>
                                </Area>
                            }
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                            end={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.button}>
                                    <Text>End</Text>
                                </Area>
                            }
                        />
                    </Area>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            start={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.section}>
                                    <Text>Start</Text>
                                </Area>
                            }
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                        />
                    </Area>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                            end={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.button}>
                                    <Text>End</Text>
                                </Area>
                            }
                        />
                    </Area>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                        />
                    </Area>
                </HStack>
                <VStack gap={SizeSpace.x200}>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            start={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.section}>
                                    <Text>Start</Text>
                                </Area>
                            }
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                            end={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.button}>
                                    <Text>End</Text>
                                </Area>
                            }
                        />
                    </Area>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            start={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.section}>
                                    <Text>Start</Text>
                                </Area>
                            }
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                        />
                    </Area>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                            end={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.button}>
                                    <Text>End</Text>
                                </Area>
                            }
                        />
                    </Area>
                    <Area spacing={SizeSpace.x100} color={ColorBg.secondary}>
                        <Cell
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                        />
                    </Area>
                </VStack>
                <VStack>
                    <Area color={ColorBg.secondary}>
                        <Cell
                            start={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.section}>
                                    <Text>Start</Text>
                                </Area>
                            }
                            body={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                                    <Text>Body</Text>
                                </Area>
                            }
                            end={
                                <Area spacing={SizeSpace.x100} compact color={ColorBg.button}>
                                    <Text>End</Text>
                                </Area>
                            }
                        />
                    </Area>
                </VStack>
            </VStack>
        </Example>
    );
};
