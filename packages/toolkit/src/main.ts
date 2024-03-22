import { program, Command } from "commander";
import { buildApp, devServer } from "./main-app";
import { buildFuncHandler, uploadFuncHandler } from "./cfunc";
import { runExamples } from "./cookbook";

export async function main() {
    const build = new Command("build");
    const dev = new Command("dev");
    const examples = new Command("cookbook");
    const buildFunc = new Command("build-func");
    const uploadFunc = new Command("upload-func");

    build.argument("package name").action(async args => {
        await buildApp({ name: args });
    });

    buildFunc.argument("package name").action(async args => {
        await buildFuncHandler({ name: args });
    });

    uploadFunc.argument("package name").action(async args => {
        await uploadFuncHandler({ name: args });
    });

    dev.argument("package name").action(async args => {
        await devServer({ name: args });
    });

    examples.argument("package name").action(async args => {
        await runExamples({ name: args });
    });

    program.addCommand(build);
    program.addCommand(buildFunc);
    program.addCommand(uploadFunc);
    program.addCommand(dev);
    program.addCommand(examples);

    await program.parseAsync(process.argv);
}
