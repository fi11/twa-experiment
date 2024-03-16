export function addDocumentEventHandler<EventT extends UIEvent = UIEvent>(
    eventName: string,
    callback: (e: EventT) => void,
) {
    document.addEventListener(eventName, callback as any, true);

    return function removeGlobalEventHandler() {
        document.removeEventListener(eventName, callback as any, true);
    };
}
