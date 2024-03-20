import { Example } from "cookbook";
import { VStack } from "../../v-stack";
import { Align, ColorBg, SizeSpace, st } from "theme";
import { Box } from "../Box";
import { useState } from "preact/compat";
import { Text } from "../../../content";

export const align = () => {
    const [vAlign, setVAlign] = useState<Align>(Align.start);
    const [hAlign, setHAlign] = useState<Align>(Align.start);
    return (
        <Example>
            <Box cn={[st.colorBg(ColorBg.button), st.spacing(SizeSpace.x150), st.vAlign(vAlign), st.hAlign(hAlign)]}>
                <Box inline>
                    <VStack gap={SizeSpace.x150}>
                        <Box>
                            <Text inline>
                                vAlign: {vAlign}; hAlign: {hAlign};
                            </Text>
                        </Box>
                        <Box>
                            <button onClick={() => setVAlign(Align.start)}>vAlign: start</button>
                        </Box>
                        <Box>
                            <button onClick={() => setVAlign(Align.end)}>vAlign: end</button>
                        </Box>
                        <Box>
                            <button onClick={() => setVAlign(Align.center)}>vAlign: center</button>
                        </Box>
                        <Box>
                            <button onClick={() => setHAlign(Align.start)}>hAlign: start</button>
                        </Box>
                        <Box>
                            <button onClick={() => setHAlign(Align.end)}>hAlign: end</button>
                        </Box>
                        <Box>
                            <button onClick={() => setHAlign(Align.center)}>hAlign: center</button>
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </Example>
    );
};
