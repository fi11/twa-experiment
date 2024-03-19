import { Example } from "cookbook";
import { HStack } from "../../h-stack";
import { VStack } from "../../v-stack";
import { HCell } from "../HCell";
import { Text } from "../../text";
import { ColorBg, SizeSpace, st } from "../../../theme";
import { Box } from "../../box";

export const all = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x400}>
                <HStack gap={SizeSpace.x100}>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            start={
                                <Box cn={[st.colorBg(ColorBg.section), st.spacing(SizeSpace.x100)]}>
                                    <Text>Start</Text>
                                </Box>
                            }
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                            end={
                                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x100)]}>
                                    <Text>End</Text>
                                </Box>
                            }
                        />
                    </Box>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            start={
                                <Box cn={[st.colorBg(ColorBg.section), st.spacing(SizeSpace.x100)]}>
                                    <Text>Start</Text>
                                </Box>
                            }
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                        />
                    </Box>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                            end={
                                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x100)]}>
                                    <Text>End</Text>
                                </Box>
                            }
                        />
                    </Box>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                        />
                    </Box>
                </HStack>
                <VStack gap={SizeSpace.x200}>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            start={
                                <Box cn={[st.colorBg(ColorBg.section), st.spacing(SizeSpace.x100)]}>
                                    <Text>Start</Text>
                                </Box>
                            }
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                            end={
                                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x100)]}>
                                    <Text>End</Text>
                                </Box>
                            }
                        />
                    </Box>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            start={
                                <Box cn={[st.colorBg(ColorBg.section), st.spacing(SizeSpace.x100)]}>
                                    <Text>Start</Text>
                                </Box>
                            }
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                        />
                    </Box>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                            end={
                                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x100)]}>
                                    <Text>End</Text>
                                </Box>
                            }
                        />
                    </Box>
                    <Box cn={[st.colorBg(ColorBg.secondary), st.spacing(SizeSpace.x100)]}>
                        <HCell
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                        />
                    </Box>
                </VStack>
                <VStack>
                    <Box cn={[st.colorBg(ColorBg.secondary)]}>
                        <HCell
                            start={
                                <Box cn={[st.colorBg(ColorBg.section), st.spacing(SizeSpace.x100)]}>
                                    <Text>Start</Text>
                                </Box>
                            }
                            body={
                                <Box cn={[st.colorBg(ColorBg.header), st.spacing(SizeSpace.x100)]}>
                                    <Text>Body</Text>
                                </Box>
                            }
                            end={
                                <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x100)]}>
                                    <Text>End</Text>
                                </Box>
                            }
                        />
                    </Box>
                </VStack>
            </VStack>
        </Example>
    );
};
