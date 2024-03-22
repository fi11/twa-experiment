import { Handler } from "@yandex-cloud/function-types";
import { ZodSchema } from "zod";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

const BearerRegExp = /^Bearer\s/;

export type AuthData = {
    userId: number;
    username: string;
    type: string;
};

type Body = {
    cmd: string;
    payload: unknown;
};

function jwtVerify(headers: Record<string, unknown>): AuthData | null {
    try {
        const authorization = headers["Authorization"] || headers["authorization"];
        let jwtData: AuthData | null = null;
        if (typeof authorization === "string" && BearerRegExp.test(authorization)) {
            const token = authorization.replace(BearerRegExp, "");
            jwtData = jwt.verify(token, JWT_SECRET) as AuthData;
        }

        return jwtData;
    } catch {
        return null;
    }
}

function isValidBody(body: unknown): body is Body {
    if (!body || typeof body !== "object") {
        return false;
    }

    return body.hasOwnProperty("cmd") && typeof (body as { cmd: unknown }).cmd === "string";
}

export function createHandler(
    cb: (
        body: Body,
        jwtData: AuthData,
    ) => Promise<{ statusCode: number; body?: Record<string, unknown> | unknown[] | null }>,
): Handler.Http {
    return async function handler(event) {
        const authData = jwtVerify(event.headers);
        if (!authData) {
            return {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                statusCode: 403,
                isBase64Encoded: false,
                body: JSON.stringify({
                    error: "Invalid Token",
                }),
            };
        }
        let body = event.isBase64Encoded ? atob(event.body) : event.body;

        try {
            body = typeof body === "string" ? JSON.parse(body) : body;
            if (!isValidBody(body)) {
                throw new Error("Bad Command");
            }
        } catch {
            return {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                statusCode: 400,
                isBase64Encoded: false,
                body: JSON.stringify({
                    error: "Bad Command",
                }),
            };
        }

        return Promise.resolve()
            .then(() => cb(body, authData))
            .then(result => {
                return {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    isBase64Encoded: false,
                    statusCode: result.statusCode,
                    body: JSON.stringify(result.body || null),
                };
            })
            .catch(err => {
                console.error(err);
                return {
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    isBase64Encoded: false,
                    statusCode: 500,
                    body: JSON.stringify({
                        error: "Internal Server Error",
                    }),
                };
            });
    };
}
