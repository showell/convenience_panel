export type UnreadCountWidget = {
    elem: HTMLSpanElement;
    hide: () => void;
    show: () => void;
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

    let my_count = 0;
    let turned_on = true;
    update_count(0);

    function update_count(count: number): void {
        my_count = count;

        if (my_count > 0 && turned_on) {
            elem.style.visibility = "visible";
            elem.innerText = `${my_count}`;
        } else {
            elem.style.visibility = "hidden";
        }
    }

    function hide() {
        turned_on = false;
    }

    function show() {
        turned_on = true;
    }

    return { elem, hide, show, update_count };
}
