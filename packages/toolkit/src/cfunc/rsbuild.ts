import { createRsbuild } from "@rsbuild/core";

import { resolve } from "path";

const rootDir = resolve(process.cwd());

type ConfigureInput = { name: string };
const configure = ({ name }: ConfigureInput) => {
    return createRsbuild({
        rsbuildConfig: {
            plugins: [],
            source: {
                entry: {
                    main: resolve(rootDir, "packages", name, "src", "main.ts"),
                },
                exclude: [/[\\/]node_modules[\\/]/],
            },
            output: {
                cleanDistPath: false,
                minify: false,
                targets: ["node"],
                distPath: {
                    root: resolve(rootDir, "build", name),
                    server: ".",
                },
                copy: [{ from: resolve(rootDir, "packages", name, "package.json"), to: "" }],
            },
        },
    });
};

export const buildFunc = async ({ name }: ConfigureInput) => {
    const builder = await configure({ name });
    await builder.build();
};
