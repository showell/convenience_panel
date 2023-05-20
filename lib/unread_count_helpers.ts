export type UnreadCountWidget = {
    elem: HTMLSpanElement;
    update_count: (count: number) => void;
};

type Args = {
    classic: boolean;
};

export function build_unread_count({ classic }: Args): UnreadCountWidget {
    const elem = document.createElement("span");
    if (classic) {
        elem.classList.add("style-panel-unread-counter-classic");
    } else {
        elem.classList.add("style-panel-unread-counter");
    }

    elem.style.visibility = "hidden";

    function update_count(count: number): void {
        if (count === 0) {
            elem.style.visibility = "hidden";
        } else {
            elem.style.visibility = "visible";
            elem.innerText = `${count}`;
        }
    }

    return { elem, update_count };
}
