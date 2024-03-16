export function stateAttrs(input: Record<string, boolean | undefined | null | string | number>) {
    const attrs: Record<string, string | undefined> = {};

    return Object.keys(input).reduce((acc, curr) => {
        const value = input[curr];
        if (value || value === 0) {
            acc[`data-${curr}`] = typeof value  === 'boolean' ?  'true' : String(value);
        }
        return acc;
    }, attrs);
}
