type CNItem = string | false | undefined | null | CNItem[];

export function cn(...args: CNItem[]): string {
    return args.reduce((acc: string, curr) => {
        if (curr) {
            const value = Array.isArray(curr) ? cn(...curr) : curr;
            acc += ` ${value}`;
        }

        return acc;
    }, "") as string;
}
