import { program, Command } from "commander";
import { buildApp, devServer } from "./main-app";
import { runExamples } from "./cookbook";

export async function main() {
    const build = new Command("build");
    const dev = new Command("dev");
    const examples = new Command("cookbook");

    build.argument("package name").action(async args => {
        await buildApp({ name: args });
    });

    dev.argument("package name").action(async args => {
        await devServer({ name: args });
    });

    examples.argument("package name").action(async args => {
        await runExamples({ name: args });
    });

    program.addCommand(build);
    program.addCommand(dev);
    program.addCommand(examples);

    await program.parseAsync(process.argv);
}
