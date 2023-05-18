export type UnreadCountWidget = {
    elem: HTMLSpanElement;
    update_count: (count: number) => void;
};

export function build_unread_count(): UnreadCountWidget {
    const elem = document.createElement("span");
    elem.classList.add("style-panel-unread-counter");

    elem.style.visibility = "hidden";

    function update_count(count: number): void {
        elem.style.visibility = "visible";
        console.log(`${count}`);
        elem.innerText = `${count}`;
    }

    return { elem, update_count };
}
