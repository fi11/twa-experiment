import { createHandler } from "./handler";
import { runCommand } from "./command";
import { getEvents } from "./commandGetEvents";

const TG_BOT_SECRET = process.env.TG_BOT_SECRET || "";

export const handler = createHandler(async (body, authData) => {
    switch (body.cmd) {
        case "getEvents":
            return runCommand(getEvents, body.payload, authData);
        default:
            return {
                statusCode: 400,
                body: {
                    error: "Bad Command",
                },
            };
    }
});
