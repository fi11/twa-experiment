import { CellProps } from "./types.public";
import { cn } from "../../theme";
import { base, withoutStart } from "./styles";

// Contnet min-content
export function Cell(props: CellProps) {
    return (
        <div data-name={"Cell"} className={cn(props.className, base, !props.start && withoutStart)} ref={props.ref}>
            {props.start}
            {props.body}
            {props.end}
        </div>
    );
}
