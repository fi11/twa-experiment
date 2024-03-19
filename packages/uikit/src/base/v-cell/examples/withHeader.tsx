import { Example } from "cookbook";
import { Box } from "../../box";
import { ColorBg, SizeSpace, st } from "../../../theme";
import { VCell } from "../VCell";

export const withHeader = () => {
    return (
        <Example>
            <VCell
                start={
                    <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.header)]}>
                        <div>Header background color</div>
                    </Box>
                }
                body={
                    <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.section)]}>
                        <div>Section background color</div>
                    </Box>
                }
                end={
                    <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.secondary)]}>
                        <div>Secondary background color</div>
                    </Box>
                }
            />
        </Example>
    );
};
