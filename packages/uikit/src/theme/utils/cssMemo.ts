export function cssMemo<T extends string | number>(fn: (value: T) => string) {
    const memory: Record<string | number, string> = {};
    return function momomize(value: T | undefined | null) {
        if (value === undefined || value === null) {
            return "";
        }
        const prev = memory[value];
        if (prev) {
            return prev;
        }
        const result = fn(value);
        memory[value] = result;
        return result;
    };
}
