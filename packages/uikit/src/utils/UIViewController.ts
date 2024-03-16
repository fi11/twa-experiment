//
// export abstract class UIViewController<
//     PropsT extends Record<string, unknown> = {},
//     StateT extends Record<string, unknown> = {}
// > {
//     private tearDownCallbacks: (() => void)[];
//
//     private currentProps: PropsT;
//     private propsChangeCallbacks: ((nextProps: PropsT, prevProps: PropsT) => void)[] = [];
//
//     private currentState: StateT;
//     private stateChangeCallbacks: ((nextState: StateT, prevState: StateT) => void)[] = [];
//
//     public props = {
//         subscribe: (cb: (nextProps: PropsT, prevProps: PropsT) => void) => {
//             this.propsChangeCallbacks.push(cb);
//
//             return () => {
//                 this.propsChangeCallbacks = this.propsChangeCallbacks.filter(
//                     (i) => i !== cb
//                 );
//             };
//         },
//         next: (nextProps: PropsT) => {
//             if (this.isEqual(nextProps, this.props.getValue())) {
//                 return;
//             }
//
//             const prevProps = this.currentProps;
//             this.currentProps = nextProps;
//
//             this.propsChangeCallbacks.forEach((cb) => {
//                 cb(nextProps, prevProps);
//             });
//         },
//
//         getValue: () => {
//             return this.currentProps;
//         },
//
//         fieldChanged: <K extends keyof PropsT>(key: K, cb: (nextValue: PropsT[K], prevValue: PropsT[K]) => void) => {
//             return this.props.subscribe((next, prev) => {
//                if (next[key] !== prev[key]) {
//                    cb(next[key], prev[key]);
//                }
//             });
//         }
//     };
//
//     public state = {
//         subscribe: (cb: (nextState: StateT, prevProps: StateT) => void) => {
//             this.stateChangeCallbacks.push(cb);
//
//             return () => {
//                 this.stateChangeCallbacks = this.stateChangeCallbacks.filter(
//                     (i) => i !== cb
//                 );
//             };
//         },
//         next: (nextState: StateT) => {
//             if (this.isEqual(nextState, this.state.getValue())) {
//                 return;
//             }
//             const prevState = this.currentState;
//             this.currentState = nextState;
//
//             this.stateChangeCallbacks.forEach((cb) => {
//                 cb(nextState, prevState);
//             });
//
//         },
//
//         getValue: () => {
//             return this.currentState;
//         }
//     };
//
//     public constructor(props: PropsT) {
//         this.currentProps = props;
//         this.currentState = this.getInitialState();
//         this.tearDownCallbacks = [];
//     }
//
//     public abstract getInitialState(): StateT;
//
//     protected initialize(): void {}
//
//     protected tearDown(): void {
//         this.tearDownCallbacks.forEach((cb) => cb());
//         this.propsChangeCallbacks = [];
//     }
//
//     protected addTearDownCallback(cb: () => void): () => void {
//         this.tearDownCallbacks.push(cb);
//
//         return () => {
//             this.removeTearDownCallback(cb);
//         };
//     }
//
//     protected removeTearDownCallback(cb: () => void): void {
//         this.tearDownCallbacks = this.tearDownCallbacks.filter((i) => i !== cb);
//     }
//
//     protected isEqual<T extends Record<string, unknown>>(left: T, right: T) {
//         const leftKeys = Object.keys(left);
//         const rightKeys = Object.keys(right);
//
//         if (leftKeys.length !== rightKeys.length) {
//             return false;
//         }
//
//         for (let i = 0; i < leftKeys.length; i++) {
//             const key = leftKeys[i];
//             if (left[key] !== right[key]) {
//                 return false;
//             }
//         }
//
//         return true;
//     }
//
//     public activate(nextStateCallback: (nextState: StateT) => void) {
//         this.initialize();
//         const unsubscribe = this.state.subscribe(nextStateCallback);
//         return () => {
//             unsubscribe();
//             this.tearDown();
//         }
//     }
// }

export class ObservableValue<ValueT> {
    private nextCallbacks: ((nextValue: ValueT, prevValue: ValueT) => void)[];
    private currentValue: ValueT;

    constructor(value: ValueT) {
        this.nextCallbacks = [];
        this.currentValue = value;
    }

    public subscribe(cb: (nextValue: ValueT, prevValue: ValueT) => void) {
        this.nextCallbacks.push(cb);

        return () => {
            this.nextCallbacks = this.nextCallbacks.filter(
                (i) => i !== cb
            );
        };
    }

    public next(nextValue: ValueT) {
        const prevState = this.currentValue;
        this.currentValue = nextValue;

        this.nextCallbacks.forEach((cb) => {
            cb(nextValue, prevState);
        });
    }

    public getValue() {
        return this.currentValue;
    }
}

export class Subscriptions {
    private callbacks: (() => void)[];

    public constructor() {
        this.callbacks = [];
    }

    public add(callback: () => void) {
        this.callbacks.push(callback);
        return () => {
            this.remove(callback);
        }
    }

    public remove(callback: () => void) {
        this.callbacks = this.callbacks.filter(i => i !== callback);
    }

    public unsubscribe() {
        this.callbacks.forEach(cb => cb());
        this.callbacks = [];
    }
}

export abstract class UIViewController {
    protected subscriptions: Subscriptions;

    public constructor() {
        this.subscriptions = new Subscriptions()
    }

    protected initialize(): void {}

    protected tearDown(): void {
        this.subscriptions.unsubscribe();
    }
}

export class UIStateViewController<StateT> extends  UIViewController {
    protected state: ObservableValue<StateT>;

    constructor(initState: StateT) {
        super();
        this.state = new ObservableValue(initState)
    }

    public activate(nextStateCallback: (nextState: StateT) => void) {
        this.initialize();
        const unsubscribe = this.state.subscribe(nextStateCallback);
        return () => {
            unsubscribe();
            this.tearDown();
        };
    }
}

