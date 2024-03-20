import { Example } from "cookbook";
import { VCell } from "../VCell";
import { Box } from "../../box";
import { Align, ColorBg, SizeSpace, st } from "theme";
import { HCell } from "../../h-cell";
import { Text } from "../../../content/text";
import { HStack } from "../../h-stack";
import { VStack } from "../../v-stack";

const CellItem = ({ value }: { value: string }) => (
    <Box cn={[st.colorBg(ColorBg.secondary)]}>
        <HCell
            start={
                <Box cn={[st.spacing(SizeSpace.x100), st.colorBg(ColorBg.section)]}>
                    <Text>Start</Text>
                </Box>
            }
            body={
                <Box cn={[st.spacing(SizeSpace.x100), st.colorBg(ColorBg.header)]}>
                    <Text>{value}</Text>
                </Box>
            }
            end={
                <Box cn={[st.spacing(SizeSpace.x100), st.colorBg(ColorBg.button)]}>
                    <Text>End</Text>
                </Box>
            }
        />
    </Box>
);

function renderCells(count: number) {
    return new Array(count)
        .fill("")
        .map((_, idx) => `Awesome Item #${idx + 1}`)
        .map(value => <CellItem key={value} value={value} />);
}
export const app = () => {
    return (
        <Example>
            <Box cn={[st.scroll("v"), st.colorBg(ColorBg.main)]}>
                <VCell
                    start={
                        <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.header)]}>
                            <HCell
                                start={
                                    <Box>
                                        <Text>Back</Text>
                                    </Box>
                                }
                                body={
                                    <Box cn={[st.hAlign(Align.center)]}>
                                        <Text inline>Awesome App Title</Text>
                                    </Box>
                                }
                                end={
                                    <Box>
                                        <Text>Done</Text>
                                    </Box>
                                }
                            />
                        </Box>
                    }
                    body={
                        <Box cn={[st.spacing(SizeSpace.x100), st.colorBg(ColorBg.secondary)]}>
                            <VCell
                                body={
                                    <Box cn={[st.spacing(SizeSpace.x100), st.scroll("v")]}>
                                        <VStack gap={SizeSpace.x100}>
                                            <Box cn={[st.scroll("h")]}>
                                                <HStack>{renderCells(20)}</HStack>
                                            </Box>
                                            {renderCells(100)}
                                        </VStack>
                                    </Box>
                                }
                                end={
                                    <Box cn={[st.spacing(SizeSpace.x100)]}>
                                        <Text>Awesome Content</Text>
                                    </Box>
                                }
                            />
                        </Box>
                    }
                    end={
                        <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.main)]}>
                            <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.button), st.hAlign(Align.center)]}>
                                <Text>Launch</Text>
                            </Box>
                        </Box>
                    }
                />
            </Box>
        </Example>
    );
};
