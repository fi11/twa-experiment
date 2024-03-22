import { Handler } from "@yandex-cloud/function-types";
import { ZodSchema } from "zod";

export function createHandler<T>(
    schema: ZodSchema<T>,
    cb: (body: T) => Promise<{ statusCode: number; body?: Record<string, unknown> | null }>,
): Handler.Http {
    return async function handler(event) {
        let data: T;
        const body = event.isBase64Encoded ? atob(event.body) : event.body;
        try {
            data = schema.parse(typeof body === "string" ? JSON.parse(body) : event.body);
        } catch (error) {
            console.error(error);
            return {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                statusCode: 400,
                isBase64Encoded: false,
                body: JSON.stringify({
                    error,
                }),
            };
        }
        return Promise.resolve()
            .then(() => cb(data))
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
