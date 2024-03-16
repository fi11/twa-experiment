import { Example } from "cookbook";
import { Layout } from "../Layout";
import { Area, AreaAlign } from "../../area";
import { ColorBg, SizeSpace } from "../../../theme";
import { Cell } from "../../cell/Cell";
import { Text } from "../../text";
import { HStack, VStack } from "../../stack";

const CellItem = ({ value }: { value: string }) => (
    <Area color={ColorBg.secondary}>
        <Cell
            start={
                <Area spacing={SizeSpace.x100} compact color={ColorBg.section}>
                    <Text>Start</Text>
                </Area>
            }
            body={
                <Area spacing={SizeSpace.x100} compact color={ColorBg.header}>
                    <Text>{value}</Text>
                </Area>
            }
            end={
                <Area spacing={SizeSpace.x100} compact color={ColorBg.button}>
                    <Text>End</Text>
                </Area>
            }
        />
    </Area>
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
            <Area color={ColorBg.main} hScroll>
                <Layout
                    header={
                        <Area color={ColorBg.header} spacing={SizeSpace.x150}>
                            <Cell
                                start={
                                    <Area>
                                        <Text>Back</Text>
                                    </Area>
                                }
                                body={
                                    <Area hAlign={AreaAlign.center}>
                                        <Text inline>Awesome App Title</Text>
                                    </Area>
                                }
                                end={
                                    <Area>
                                        <Text>Done</Text>
                                    </Area>
                                }
                            />
                        </Area>
                    }
                    body={
                        <Area color={ColorBg.secondary} spacing={SizeSpace.x150}>
                            <Layout
                                body={
                                    <Area vScroll spacing={SizeSpace.x100}>
                                        <VStack gap={SizeSpace.x100}>
                                            <Area hScroll>
                                                <HStack>{renderCells(20)}</HStack>
                                            </Area>
                                            {renderCells(100)}
                                        </VStack>
                                    </Area>
                                }
                                footer={
                                    <Area spacing={SizeSpace.x100}>
                                        <Text>Awesome Content</Text>
                                    </Area>
                                }
                            />
                        </Area>
                    }
                    footer={
                        <Area spacing={SizeSpace.x150} color={ColorBg.main}>
                            <Area spacing={SizeSpace.x150} color={ColorBg.button} hAlign={AreaAlign.center}>
                                <Text>Launch</Text>
                            </Area>
                        </Area>
                    }
                />
            </Area>
        </Example>
    );
};
