export function build_unread_count({ classic }) {
    const elem = document.createElement("span");
    if (classic) {
        elem.classList.add("style-panel-unread-counter-classic");
    }
    else {
        elem.classList.add("style-panel-unread-counter");
    }
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