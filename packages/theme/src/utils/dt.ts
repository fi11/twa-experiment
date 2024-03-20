export type DesignToken = {
    var: string;
    value: string;
    name: string;
    define(value: string): string;
};
export function dt(name: string): DesignToken {
    const prefix = "uikit";
    const safeName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
    const varName = `--${prefix}-${safeName}`;
    return {
        var: `var(${varName})`,
        value: varName,
        name: name,
        define(value: string) {
            return `${varName}: ${value};`;
        },
    };
}
