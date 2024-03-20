import { Handler } from "@yandex-cloud/function-types";
import { ZodSchema } from "zod";

export function createHandler<T>(
    schema: ZodSchema<T>,
    cb: (data: T) => Promise<{ statusCode: number; body?: Record<string, unknown> | null }>,
): Handler.Http {
    return async function handler(event) {
        let data: T;
        try {
            data = schema.parse(event.body);
        } catch (err) {
            return {
                statusCode: 400,
                body: JSON.stringify(err),
            };
        }
        return Promise.resolve()
            .then(() => cb(data))
            .then(result => {
                return {
                    statusCode: result.statusCode,
                    body: result.body ? JSON.stringify(result.body) : "",
                };
            })
            .catch(err => {
                console.error(err);
                return {
                    statusCode: 500,
                    body: "",
                };
            });
    };
}
