import { ZodSchema } from "zod";
import { AuthData } from "./handler";

export type CmdCallbackResult = { statusCode?: number; body?: Record<string, unknown> | unknown[] | null };
export type CmdCallback<T> = (payload: T, authData: AuthData) => Promise<CmdCallbackResult>;
export type Command<T> = {
    schema: ZodSchema<T>;
    handler: CmdCallback<T>;
};
export async function runCommand<T>(
    command: Command<T>,
    payload: unknown,
    authData: AuthData,
): Promise<Required<CmdCallbackResult>> {
    let validBody: T;
    try {
        validBody = command.schema.parse(payload);
    } catch (error) {
        return {
            statusCode: 400,
            body: {
                error,
            },
        };
    }

    const result = await command.handler(validBody, authData);

    return {
        statusCode: result.statusCode || 200,
        body: result.body || null,
    };
}
