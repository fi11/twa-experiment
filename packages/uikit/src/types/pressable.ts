// export type PressEventSource = 'mouse' | 'pen' | 'touch' | 'keyboard'


export interface Pressable <T = HTMLElement> {
    onPress?: () => void;
    onPressEnd?: () => void;
    onPressStart?: () => void;
}
