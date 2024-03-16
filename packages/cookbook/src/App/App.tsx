import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

export type AppProps = {
    items: Record<string, Record<string, FunctionComponent>>;
    className?: string;
};

function encode(value: string): string {
    return encodeURIComponent(value);
}

function parsePath(url: string) {
    return new URL(url).pathname.split("/").slice(1).filter(Boolean);
}

const style = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    padding: "20px 40px",
};

export function App({ items, className }: AppProps) {
    const [paths] = useState(() => parsePath(window.location.href));

    if (paths.length === 0) {
        return (
            <div style={style}>
                {Object.keys(items).map(name => (
                    <p key={name}>
                        <a href={`/${encode(name)}`}>{name}</a>
                    </p>
                ))}
            </div>
        );
    }

    if (paths.length === 1) {
        const name = paths[0];
        const example = items[name] || {};

        return (
            <div style={style}>
                {Object.keys(example).map(key => (
                    <p key={key}>
                        <a href={`/${encode(name)}/${encode(key)}`}>{key}</a>
                    </p>
                ))}
            </div>
        );
    }

    if (paths.length === 2) {
        const name = paths[0];
        const exampleKey = paths[1];
        const Example = items[name][exampleKey] || null;

        return (
            <div style={style} className={className}>
                <Example />
            </div>
        );
    }

    return null;
}
