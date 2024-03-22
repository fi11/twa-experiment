import { Handler } from "@yandex-cloud/function-types";
import { handler as telegramAuth } from "func-telegram-auth";
import { handler as events } from "func-events";

export const routes: Record<string, Handler.Http> = {
    // "/foo": async () => ({ statusCode: 200, body: { ok: true } }),
    "/auth": telegramAuth,
    "/events": events,
};
