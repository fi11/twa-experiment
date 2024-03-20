import { Example } from "cookbook";
import { Box } from "../../box";
import { ColorBg, SizeSpace, st } from "theme";
import { VCell } from "../VCell";

export const onlyBody = () => {
    return (
        <Example>
            <VCell
                body={
                    <Box cn={[st.spacing(SizeSpace.x150), st.colorBg(ColorBg.section)]}>
                        <div>Section background color</div>
                    </Box>
                }
            />
        </Example>
    );
};
