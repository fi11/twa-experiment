export function cn(...args: (string | false | undefined | null)[]): string {
    return args.reduce((acc: string, curr) => {
        if (curr) {
            acc += ` ${curr}`;
        }

        return acc;
    }, "") as string;
}
