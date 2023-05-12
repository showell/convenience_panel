export function build_unread_count(): HTMLSpanElement {
    const elem = document.createElement("span");
    elem.classList.add("style-panel-unread-counter");
    return elem;
}
