import { render } from "preact";
import { App, AppProps } from "./App";

export function main(examples: AppProps["items"], options?: { className?: string }) {
    render(
        <App items={examples} className={options?.className ?? ""} />,
        document.getElementById("root") || document.body,
    );
}
