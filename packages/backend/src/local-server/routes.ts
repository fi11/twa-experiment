import { Handler } from "@yandex-cloud/function-types";
import { handler as telegramAuth } from "../telegram-auth/main";

export const routes: Record<string, Handler.Http> = {
    // "/foo": async () => ({ statusCode: 200, body: { ok: true } }),
    "/telegram-auth": telegramAuth,
};
