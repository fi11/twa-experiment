import { Ref, useEffect, useState } from "preact/hooks";
import { Pressable } from "../../types";
import { PressableViewController } from "../PressableViewController";

export interface UsePressConfig extends Pressable {
    activated: boolean;
    ref: Ref<HTMLElement>;
}

export interface UsePressResult {
    pressed: boolean;
}

export function usePress(config: UsePressConfig): UsePressResult {
    const [vc] = useState(() => new PressableViewController(false));
    const [pressed, setPressedState] = useState(() => vc.getState());

    vc.listener = {
        onPress: config.onPress,
        onPressStart: config.onPressStart,
        onPressEnd: config.onPressEnd,
    };

    useEffect(() => {
        vc.rootDomElement = (config.ref.current as any)?.base;
    });

    useEffect(() => {
        if (!config.activated) {
            return;
        }

        vc.subscribe(nextState => {
            setPressedState(nextState);
        });

        vc.dispatch("idle");

        return () => {
            vc.tearDown();
        };
    }, [config.activated]);

    return {
        pressed,
    };
}
