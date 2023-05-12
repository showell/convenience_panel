import { build_top_left_panel_icon } from "./icon_helpers.js";
 
export function build_list_item() {
    const li = document.createElement("li");
    li.classList.add("style-panel-list-item");

    return li;
}

interface LinkArgs {
    href: string,
    icon_name: string,
}

type MainLink = {
    elem: HTMLAnchorElement,
    span: HTMLSpanElement,
}

export function build_main_link({ href, icon_name }: LinkArgs): MainLink {
    const elem = document.createElement("a");
    elem.href = href;

    const icon = build_top_left_panel_icon({ icon_name });
    const span = document.createElement("span");

    elem.classList.add("style-panel-main-link");

    elem.append(icon, span);

    return { elem, span };
}

export function build_right_align_div() {
    const span = document.createElement("span");
    span.classList.add("style-panel-list-item-right");

    return span;
}
