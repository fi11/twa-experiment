import { exec } from "child_process";
type ConfigureInput = { name: string };

function withWDir(path: string, cmd: string) {
    return `(cd ${path} && ${cmd})`;
}
export const buildFuncHandler = async ({ name }: ConfigureInput) => {
    const cmd = `rm -f ./build/${name}.zip && zip -v -j ./build/${name} ./packages/${name}/package.json ./packages/${name}/lib/*  -x \"*.d.ts\" -x \"*.map\"\n`;

    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.log(stderr);
                resolve("ok");
                return;
            }

            console.log(stdout);
            resolve("ok");
        });
    });
};

const serviceAccId = "ajekh0tdpjlmaugibqhq";
const secretId = "e6qf45vhq2c3n93c8q37";
const secrets = ["TG_BOT_SECRET", "JWT_SECRET"];
const envs: Record<string, string | number> = {
    TG_EXPIRES_IN: 2592000000,
};
function buildSecretParams() {
    return secrets.map(key => `--secret id=${secretId},key=${key},environment-variable=${key}`).join(" ");
}

function buildEnvs() {
    return Object.keys(envs)
        .map(key => `--environment ${key}=${envs[key]}`)
        .join(" ");
}

export const uploadFuncHandler = async ({ name }: ConfigureInput) => {
    const serviceAccParams = `--service-account-id ${serviceAccId}`;
    const secretParams = buildSecretParams();
    const envParams = buildEnvs();
    const cmd = withWDir(
        "./build",
        `yc serverless function version create --function-name=${name} --runtime nodejs18 --entrypoint index.handler  --memory 128m  --execution-timeout 3s  --source-path ./${name}.zip ${serviceAccParams} ${secretParams} ${envParams}`,
    );

    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error.message}`);
                reject(error);
                return;
            }
            if (stderr) {
                console.log(stderr);
                resolve("ok");
                return;
            }

            console.log(stdout);
            resolve("ok");
        });
    });
};
