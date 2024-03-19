import { createRsbuild } from "@rsbuild/core";
import { pluginPreact } from "@rsbuild/plugin-preact";

import { resolve } from "path";

const rootDir = resolve(process.cwd());

type ConfigureInput = { name: string };
const configure = ({ name }: ConfigureInput) => {
    return createRsbuild({
        rsbuildConfig: {
            plugins: [pluginPreact()],
            source: {
                entry: {
                    index: resolve(rootDir, "packages", name, "src", "index.tsx"),
                },
            },
            output: {
                cleanDistPath: true,
                distPath: {
                    root: resolve(rootDir, "build", name),
                },
                // injectStyles: true,
                // assetPrefix: 'https://cdn.example.com/assets/',
            },
            html: {
                template: resolve(rootDir, "packages", name, "public", "index.html"),
                inject: "body",
            },
            dev: {
                hmr: false,
                startUrl: true,
            },
            server: {
                publicDir: {
                    name: resolve(rootDir, "packages", name, "public"),
                    copyOnBuild: true,
                },
            },
        },
    });
};

export const buildApp = async ({ name }: ConfigureInput) => {
    const builder = await configure({ name });
    await builder.build();
};

export const devServer = async ({ name }: ConfigureInput) => {
    const builder = await configure({ name });
    return new Promise((resolve, reject) => {
        builder.startDevServer().catch(err => reject(err));
    });
};
