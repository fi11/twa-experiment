import { SectionProps } from "./types.public";
import { Box } from "../../layout";
import { ColorBg, SizeSpace, st } from "theme";

export function Section(props: SectionProps) {
    return (
        <Box
            cn={[
                st.radius(SizeSpace.x250),
                st.hIndent(SizeSpace.x200),
                st.outline(ColorBg.sectionSeparator, !!props.outline),
            ]}
        >
            {props.children}
        </Box>
    );
}
