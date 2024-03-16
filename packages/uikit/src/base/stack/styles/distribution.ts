import { StackDistribution } from "../types.public";
import { css } from "goober";
import { cssMemo } from "../../../theme";

const equals: Partial<Record<StackDistribution, boolean>> = {
    [StackDistribution.start]: true,
    [StackDistribution.end]: true,
    [StackDistribution.center]: true,
    [StackDistribution.stretch]: true,
};

export const vDistribution = cssMemo((value: StackDistribution) => {
    if (equals[value]) {
        return css({
            alignContent: value,
        });
    }

    return "";
});

export const hDistribution = cssMemo((value: StackDistribution) => {
    if (equals[value]) {
        return css({
            justifyContent: value,
        });
    }

    return "";
});
