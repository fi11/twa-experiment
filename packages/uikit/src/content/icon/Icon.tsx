import { IconProps, IconView } from "./types.public";
import { cn, ColorText, SizeSpace } from "../../theme";
import { base, color, size, squad } from "./styles";
import { ColorsSys } from "../../theme/systemColors";

export function Icon(props: IconProps) {
    const isSquad = props.view === IconView.squad;

    return (
        <div
            data-name="Icon"
            className={cn(
                base,
                size(props.size || SizeSpace.x250),
                !isSquad && color(props.color || ColorText.body),
                isSquad && squad(props.bgColor || ColorsSys.blue),
            )}
        >
            {props.children}
        </div>
    );
}
