import { createRsbuild } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";

import { resolve } from "path";

type ConfigureInput = { name: string };

const configure = ({ name }: ConfigureInput) => {
    return createRsbuild({
        rsbuildConfig: {
            plugins: [pluginPreact()],
            source: {
                entry: {
                    index: resolve(process.cwd(), "packages", name, "src", "cookbook.ts"),
                },
            },
            html: {
                template: resolve(__dirname, "..", "..", "assets", "cookbook", "index.html"),
                inject: "body",
            },
            dev: {
                hmr: false,
                startUrl: true,
            },
            server: {
                port: 8091,
            },
        },
    });
};
export const runExamples = async ({ name }: ConfigureInput) => {
    const builder = await configure({ name });
    return new Promise((resolve, reject) => {
        builder.startDevServer().catch(err => reject(err));
    });
};
