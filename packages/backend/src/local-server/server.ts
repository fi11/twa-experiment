import http from "http";
import { routes } from "./routes";
import { Handler } from "@yandex-cloud/function-types";

export const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json;charset=utf-8");

    if (req.method !== "POST") {
        res.writeHead(405);
        res.end();
        return;
    }

    console.log("Request: post ", req.url);
    const url = req.url?.replace(/\/$/g, "") || "";

    function mainHandler(handler: Handler.Http) {
        new Promise<string>((resolve, reject) => {
            const body: Uint8Array[] = [];
            req.on("error", err => {
                console.error(err);
                reject(err);
            })
                .on("data", chunk => {
                    body.push(chunk);
                })
                .on("end", () => {
                    resolve(Buffer.concat(body).toString());
                });
        })
            .then(data => {
                return handler({ body: JSON.parse(data) } as any, {} as any);
            })
            .then(result => {
                res.writeHead(result.statusCode);
                res.write(result.body);
                res.end();
            })
            .catch(err => {
                console.log(err);
                res.writeHead(500);
                res.end();
            });
    }

    const currentHandler = routes[url];
    if (currentHandler) {
        mainHandler(currentHandler);
        return;
    }

    res.writeHead(404);
    res.end();
});
