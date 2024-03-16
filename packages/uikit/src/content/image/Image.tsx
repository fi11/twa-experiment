import { ImageProps } from "./types.public";
import { cn } from "../../theme";
import { base, image, label, overlay } from "./styles";
import { Label } from "../label";

export function Image(props: ImageProps) {
    return (
        <div className={cn(base)}>
            <img className={cn(image)} src={props.src} />
            {props.overlay && <div className={cn(overlay)} />}
            {props.label && <Label className={cn(label)} color={props.labelColor} title={props.label} />}
        </div>
    );
}
