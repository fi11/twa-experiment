import { Example } from "cookbook";
import { SectionRow } from "../SectionRow";
import { Icon, Label, SvgDisclosure, SvgGroup, SvgPerson } from "../../../content";
import { Section } from "../../section";
import { ColorsSys, ColorText, iconStyles, SizeSpace, textStyles } from "theme";
import { VStack } from "../../../layout";

export const main = () => {
    return (
        <Example>
            <VStack gap={SizeSpace.x300}>
                <Section outline={false}>
                    <SectionRow
                        onPress={() => {}}
                        title={"Section row #1"}
                        start={
                            <Icon cn={[iconStyles.square(ColorsSys.blue)]}>
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
                            <Icon cn={[textStyles.color(ColorText.hint)]}>
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
                            <Icon cn={[textStyles.color(ColorText.link)]}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon cn={[textStyles.color(ColorText.link)]}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon cn={[textStyles.color(ColorText.link)]}>
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
                        transparent
                        end={
                            <Icon cn={[textStyles.color(ColorText.link)]}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        transparent
                        start={
                            <Icon>
                                <SvgPerson />
                            </Icon>
                        }
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon cn={[textStyles.color(ColorText.link)]}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                    <SectionRow
                        transparent
                        start={
                            <Icon>
                                <SvgPerson />
                            </Icon>
                        }
                        onPress={() => {}}
                        title={"Section row #6"}
                        end={
                            <Icon cn={[textStyles.color(ColorText.link)]}>
                                <SvgDisclosure />
                            </Icon>
                        }
                    />
                </Section>
                <Section outline>
                    <SectionRow
                        transparent
                        start={
                            <Icon>
                                <SvgGroup />
                            </Icon>
                        }
                        onPress={() => {}}
                        title={"Записались"}
                        end={<Label title={"6"} />}
                    />
                </Section>
            </VStack>
        </Example>
    );
};
