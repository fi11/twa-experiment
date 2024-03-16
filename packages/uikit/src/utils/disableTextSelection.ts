enum PROCESS_STATE {
    idle,
    disabled,
    restoring,
}

let processState: PROCESS_STATE = PROCESS_STATE.idle;
let prevUserTextSelect = "";

function getUserCurrentSelectValue() {
    return document.documentElement.style.userSelect || document.documentElement.style.webkitUserSelect;
}

function setUserSelectValueToDocument(value: string) {
    document.documentElement.style.userSelect = value;
    // -webkit-user-select: none;
    if (document.documentElement.style.webkitUserSelect) {
        document.documentElement.style.webkitUserSelect = value;
    }
}

export function disableTextSelection() {
    if (processState === PROCESS_STATE.idle) {
        prevUserTextSelect = getUserCurrentSelectValue();
        setUserSelectValueToDocument("none");
    }

    processState = PROCESS_STATE.disabled;

    return restoreTextSelection;
}

export function restoreTextSelection() {
    if (processState !== PROCESS_STATE.disabled) {
        return;
    }

    processState = PROCESS_STATE.restoring;

    // There appears to be a delay on iOS where selection still might occur
    // after pointer up, so wait a bit before removing user-select.
    setTimeout(() => {
        // Wait for any CSS transitions to complete so we don't recompute style
        // for the whole page in the middle of the animation and cause jank.
        requestAnimationFrame(() => {
            if (processState === PROCESS_STATE.restoring) {
                if (getUserCurrentSelectValue() === "none") {
                    setUserSelectValueToDocument(prevUserTextSelect);
                }

                prevUserTextSelect = "";
                processState = PROCESS_STATE.idle;
            }
        });
    }, 300);
}
