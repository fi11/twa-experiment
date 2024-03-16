import { disableTextSelection, restoreTextSelection } from "./disableTextSelection";
import { addDocumentEventHandler } from "./addDocumentEventHandler";

interface Effect {
    (): void | (() => void);
}

class UIVC<StateT, ActionT> {
    removeLastEffect: (() => void) | null = null;
    currentState: StateT;
    private subscribers: ((nextState: StateT, prevState: StateT) => void)[] = [];

    constructor(initialState: StateT) {
        this.currentState = initialState;
    }

    public applyAction(action: ActionT, state: StateT) {
        const [nextState, effect] = this.reduce(state, action);

        this.removeLastEffect?.();
        this.nextState(nextState);
        this.removeLastEffect = effect?.() ?? null;
    }

    public dispatch(action: ActionT) {
        this.applyAction(action, this.getState());
    }

    public tearDown() {
        this.subscribers = [];
        this.removeLastEffect?.();
    }

    protected reduce(state: StateT, action: ActionT): [StateT, Effect | null] {
        return [state, null];
    }

    public subscribe(callback: (nextState: StateT, prevState: StateT) => void) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(i => i !== callback);
        };
    }

    public getState() {
        return this.currentState;
    }

    private nextState(nextValue: StateT) {
        const prevValue = this.getState();
        this.currentState = nextValue;
        this.subscribers.forEach(cb => cb(nextValue, prevValue));
    }
}

export class PressableViewController extends UIVC<boolean, string> {
    public rootDomElement: HTMLElement | null = null;
    // currentState = false;
    public listener?: {
        onPressStart?(): void;
        onPressEnd?(): void;
        onPress?(): void;
    };

    protected reduce(state: boolean, action: string): [boolean, Effect | null] {
        switch (action) {
            case "idle":
                return [false, this.listenPressing];
            case "startPressing":
                return [true, this.capturePressing];
            case "moveOut":
                return [false, this.capturePressing];
            case "moveIn":
                return [true, this.capturePressing];
            default:
                return [state, null];
        }
    }

    private listenPressing = () => {
        return addDocumentEventHandler("pointerdown", (e: MouseEvent) => {
            const inTarget = this.rootDomElement?.contains(e.target as HTMLElement);
            if (inTarget) {
                e.preventDefault();
                this.dispatch("startPressing");
                this.listener?.onPressStart?.();
                return;
            }

            this.dispatch("idle");
        });
    };

    private capturePressing = () => {
        disableTextSelection();

        const removePointerMoveHandler = addDocumentEventHandler("pointermove", (e: MouseEvent) => {
            const inBody = document.body.contains(e.target as HTMLElement);
            if (!inBody) {
                this.dispatch("idle");
                return;
            }

            const inTarget = !!this.rootDomElement?.contains(e.target as HTMLElement);

            if (inTarget) {
                this.dispatch("moveIn");
                return;
            }

            this.dispatch("moveOut");
        });

        const removePointerUpHandler = addDocumentEventHandler("pointerup", (e: MouseEvent) => {
            const inTarget = this.rootDomElement?.contains(e.target as HTMLElement);

            this.dispatch("idle");

            if (inTarget) {
                e.preventDefault();
                this.listener?.onPressEnd?.();
                this.listener?.onPress?.();
            }
        });

        // const removePointerCancel = addDocumentEventHandler(
        //     'pointercancel',
        //     (e: MouseEvent) => {
        //         this.cancelPressing();
        //     }
        // );
        //
        return () => {
            restoreTextSelection();
            removePointerMoveHandler();
            removePointerUpHandler();
            // removePointerCancel();
        };
    };
}
