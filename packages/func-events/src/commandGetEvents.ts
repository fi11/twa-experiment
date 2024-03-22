import { z } from "zod";

const schema = z.object({
    foo: z.string(),
});

export type GetEventsPayload = z.infer<typeof schema>;

export const getEvents = {
    schema,
    handler: async (body: GetEventsPayload) => {
        return {
            body: ["Event1, Event3"],
        };
    },
};
