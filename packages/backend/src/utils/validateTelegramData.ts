import crypto from "crypto";

export type VerifiedTelegramWebAppDataResult = {
    auth_date: string;
    chat_instance: string;
    chat_type: string;
    user: {
        id: number;
        first_name?: string;
        last_name?: string;
        username?: string;
        language_code?: string;
        is_premium?: boolean;
        allows_write_to_pm?: boolean;
    };
};

export const verifyTelegramWebAppData = (
    telegramInitData: string,
    token: string,
    expiresIn: number = 86400,
): VerifiedTelegramWebAppDataResult | null => {
    try {
        // The data is a query string, which is composed of a series of field-value pairs.
        const encoded = decodeURIComponent(telegramInitData);

        // HMAC-SHA-256 signature of the bot's token with the constant string WebAppData used as a key.
        const secret = crypto.createHmac("sha256", "WebAppData").update(token);

        // Data-check-string is a chain of all received fields'.
        const arr = encoded.split("&");

        const hashIndex = arr.findIndex(str => str.startsWith("hash="));
        const hash = arr.splice(hashIndex)[0].split("=")[1];
        // sorted alphabetically
        arr.sort((a, b) => a.localeCompare(b));
        // in the format key=<value> with a line feed character ('\n', 0x0A) used as separator
        // e.g., 'auth_date=<auth_date>\nquery_id=<query_id>\nuser=<user>
        const dataCheckString = arr.join("\n");

        // The hexadecimal representation of the HMAC-SHA-256 signature of the data-check-string with the secret key
        const _hash = crypto.createHmac("sha256", secret.digest()).update(dataCheckString).digest("hex");

        // if hash are equal the data may be used on your server.
        // Complex data types are represented as JSON-serialized objects.
        if (_hash !== hash) {
            return null;
        }

        const data: Record<string, unknown> = {};
        const ok = arr.every(item => {
            const [key, value] = item.split("=");
            data[key] = value;
            switch (key) {
                case "auth_date":
                    const authDate = Number.parseInt(value, 10);
                    const date = new Date(authDate * 1000);
                    if (date.valueOf() + expiresIn * 1000 < new Date().valueOf()) {
                        return false;
                    }
                    data[key] = new Date(authDate).toISOString();
                    return true;
                case "chat_instance":
                case "chat_type":
                    data[key] = String(value);
                    return true;
                case "user":
                    data[key] = JSON.parse(value);
                    return true;
            }
        });

        if (!ok) {
            return null;
        }

        return data as VerifiedTelegramWebAppDataResult;
    } catch (err) {
        console.error(err);
        return null;
    }
};
