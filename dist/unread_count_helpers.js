export function build_unread_count() {
    const elem = document.createElement("span");
    elem.classList.add("style-panel-unread-counter");
    function update_count(count) {
        console.log(`${count}`);
        elem.innerText = `${count}`;
    }
    return { elem, update_count };
}
//# sourceMappingURL=unread_count_helpers.js.map