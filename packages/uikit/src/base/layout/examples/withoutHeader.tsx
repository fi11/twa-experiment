import { Example } from "cookbook";
import { Area } from "../../area";
import { ColorBg, SizeSpace } from "../../../theme";
import { Layout } from "../Layout";

export const withoutHeader = () => {
    return (
        <Example>
            <Layout
                body={
                    <Area color={ColorBg.section} spacing={SizeSpace.x150}>
                        <div>Section background color</div>
                    </Area>
                }
                footer={
                    <Area color={ColorBg.secondary} spacing={SizeSpace.x150}>
                        <div>Secondary background color</div>
                    </Area>
                }
            />
        </Example>
    );
};
