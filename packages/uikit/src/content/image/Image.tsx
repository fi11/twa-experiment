import { ImageProps } from "./types.public";
import { baseCss, cn, externalCss, st } from "theme";

const styles = {
    image: baseCss({
        border: 0,
        outline: 0,
        margin: 0,
        padding: 0,
        userSelect: "none",
        width: "100%",
        objectFit: "cover",
    }),
    overlay: baseCss({
        position: "absolute",
        inset: 0,
        background: "transparent",
    }),
    darkOverlay: externalCss({
        background: "#000",
        opacity: 0.3,
    }),
};
export function Image(props: ImageProps) {
    return (
        <div className={cn(st.box("inline"))}>
            <img className={styles.image()} src={props.src} />
            <div className={cn(styles.overlay(), props.overlay && styles.darkOverlay())} />
        </div>
    );
}
