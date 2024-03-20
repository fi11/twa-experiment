import { z } from "zod";
import jwt from "jsonwebtoken";
import { createHandler } from "../utils";
import { verifyTelegramWebAppData } from "../utils";

const TELEGRAM_BOT_TOKEN = ""; // https://core.telegram.org/bots#creating-a-new-bot
const JWT_SECRET = "secret";
const DEFAULT_EXPIRES_IN = 1800;

const schema = z.object({
    initData: z.string(),
});

export const handler = createHandler(schema, async data => {
    const initData = verifyTelegramWebAppData(data.initData, TELEGRAM_BOT_TOKEN, DEFAULT_EXPIRES_IN);
    if (!initData) {
        return {
            statusCode: 401,
            body: null,
        };
    }

    const token = jwt.sign(
        {
            userId: initData.user.id,
            username: initData.user.username,
            type: "telegram",
        },
        JWT_SECRET,
        {
            expiresIn: "1h",
        },
    );

    return {
        statusCode: 200,
        body: {
            initData,
            token,
        },
    };
});
