import { LayoutProps } from "./types.public";
import { base, withHeader, withoutHeader } from "./styles";
import { cn } from "../../theme";

export function Layout(props: LayoutProps) {
    return (
        <div data-name={"Layout"} className={cn(base, props.header ? withHeader : withoutHeader)}>
            {props.header}
            {props.body}
            {props.footer}
        </div>
    );
}
