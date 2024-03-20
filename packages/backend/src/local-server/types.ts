import { Handler } from "@yandex-cloud/function-types";

export type Result = ReturnType<Handler.Http>;

export type RequestData = {
    body: Record<string, unknown>;
};

export interface Handler {
    (req: RequestData): Promise<Result>;
}
