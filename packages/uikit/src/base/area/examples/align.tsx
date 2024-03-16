import { Example } from "cookbook";
import { VStack } from "../../stack";
import { ColorBg, SizeSpace } from "../../../theme";
import { Area } from "../Area";
import { AreaAlign } from "../types.public";
import { useState } from "preact/compat";
import { Text } from "../../text";

export const align = () => {
    const [vAlign, setVAlign] = useState<AreaAlign>(AreaAlign.start);
    const [hAlign, setHAlign] = useState<AreaAlign>(AreaAlign.start);
    return (
        <Example>
            <Area color={ColorBg.button} spacing={SizeSpace.x150} vAlign={vAlign} hAlign={hAlign}>
                <Area compact>
                    <VStack gap={SizeSpace.x150}>
                        <Area compact>
                            <Text>
                                vAlign: {vAlign}; hAlign: {hAlign};
                            </Text>
                        </Area>
                        <Area compact>
                            <button onClick={() => setVAlign(AreaAlign.start)}>vAlign: start</button>
                        </Area>
                        <Area compact>
                            <button onClick={() => setVAlign(AreaAlign.end)}>vAlign: end</button>
                        </Area>
                        <Area compact>
                            <button onClick={() => setVAlign(AreaAlign.center)}>vAlign: center</button>
                        </Area>
                        <Area compact>
                            <button onClick={() => setHAlign(AreaAlign.start)}>hAlign: start</button>
                        </Area>
                        <Area compact>
                            <button onClick={() => setHAlign(AreaAlign.end)}>hAlign: end</button>
                        </Area>
                        <Area compact>
                            <button onClick={() => setHAlign(AreaAlign.center)}>hAlign: center</button>
                        </Area>
                    </VStack>
                </Area>
            </Area>
        </Example>
    );
};
