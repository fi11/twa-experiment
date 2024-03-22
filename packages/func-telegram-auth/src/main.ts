import { z } from "zod";
import jwt from "jsonwebtoken";
import { createHandler } from "./handler";
import { verifyTelegramWebAppData } from "./validateTelegramData";

const TG_BOT_SECRET = process.env.TG_BOT_SECRET || "";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const EXPIRES_IN_SEC = Number.parseInt(process.env.TG_EXPIRES_IN || "", 10) || 3600;

const schema = z.object({
    initData: z.string(),
});

export const handler = createHandler(schema, async data => {
    const initData = verifyTelegramWebAppData(data.initData, TG_BOT_SECRET, EXPIRES_IN_SEC);
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
            data: initData,
            accessToken: token,
        },
    };
});
