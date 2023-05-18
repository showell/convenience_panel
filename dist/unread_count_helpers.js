export function build_unread_count() {
    const elem = document.createElement("span");
    elem.classList.add("style-panel-unread-counter");
    elem.style.visibility = "hidden";
    function update_count(count) {
        if (count === 0) {
            elem.style.visibility = "hidden";
        }
        else {
            elem.style.visibility = "visible";
            elem.innerText = `${count}`;
        }
    }
    return { elem, update_count };
}
//# sourceMappingURL=unread_count_helpers.js.map