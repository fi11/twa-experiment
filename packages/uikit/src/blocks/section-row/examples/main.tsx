import { Example } from "cookbook";
import { SectionRow } from "../SectionRow";
import { Icon, SvgDisclosure, SvgGroup, SvgPerson } from "../../../content/icon";
import { Section } from "../../section";
import { ColorBg, ColorText, SizeSpace } from "../../../theme";
import { VStack } from "../../../base";
import { Label } from "../../../content";
import { IconView } from "../../../content/icon/types.public";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x300}>
                <Section outline={false}>
                    <SectionRow
                        onPress={() => {}}
                        title={"Section row #1"}
                        start={
                            <Icon view={IconView.squad}>
                                <SvgPerson />
                            </Icon>
                        }
                        end={<Label title={"Открыть"} />}
                    />
                    <SectionRow
                        title={"Section row #2"}
                        description={"Some awesome description"}
                        start={
                            <Icon>
                                <SvgPerson />
                            </Icon>
                        }
                    />
                    <SectionRow
                        title={"Section row #3"}
                        description={
                            "Some awesome description Some awesome description Some awesome description Some awesome description Some awesome description"
                        }
                        start={
                            <Icon>
                                <SvgPerson />
                            </Icon>
                        }
                        end={
                            <Icon color={ColorText.hint}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow title={"Section row #4"} />
                    <SectionRow title={"Section row #6"} end={<Label title={"99"} />} />
                </Section>
                <Section>
                    <SectionRow
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon color={ColorText.link}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon color={ColorText.link}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon color={ColorText.link}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                </Section>
                <Section outline>
                    <SectionRow
                        start={
                            <Icon>
                                <SvgPerson />
                            </Icon>
                        }
                        onPress={() => {}}
                        title={"Section row #6"}
                        color={ColorBg.secondary}
                        end={
                            <Icon color={ColorText.link}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        color={ColorBg.secondary}
                        start={
                            <Icon>
                                <SvgPerson />
                            </Icon>
                        }
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon color={ColorText.link}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        color={ColorBg.secondary}
                        start={
                            <Icon>
                                <SvgPerson />
                            </Icon>
                        }
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon color={ColorText.link}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                </Section>
                <Section outline>
                    <SectionRow
                        start={
                            <Icon>
                                <SvgGroup />
                            </Icon>
                        }
                        onPress={() => {}}
                        title={"Записались"}
                        color={ColorBg.secondary}
                        end={<Label title={"6"} />}
                    />
                </Section>
            </VStack>
        </Example>
    );
};
