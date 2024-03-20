import { LabelProps } from "./types.public";
import { Text } from "../text";
import { backgrounds, baseCss, cn, ColorBg, optCss, SizeSpace, SizeText, spacing, st, textStyles } from "theme";
import { Align } from "theme";

const styles = {
    main: optCss({
        borderRadius: spacing[SizeSpace.x200].var,
        height: spacing[SizeSpace.x300].var,
        width: "max-content",
        minWidth: spacing[SizeSpace.x300].var,
    }),
    color: baseCss({
        background: backgrounds[ColorBg.secondary].var,
    }),
    text: optCss({
        textTransform: "none",
    }),
};

export function Label(props: LabelProps) {
    return (
        <div
            data-name={"Label"}
            className={cn(
                st.box("inline"),
                styles.color(),
                props.cn,
                styles.main(true),
                st.hAlign(Align.center),
                st.vAlign(Align.center),
                st.hSpacing(SizeSpace.x100),
            )}
        >
            <Text cn={[textStyles.font(SizeText.caption1), styles.text(true)]}>{props.title}</Text>
        </div>
    );
}
