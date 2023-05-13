import { build_vdot_icon, VdotWidget } from "./icon_helpers.js";
import { build_unread_count, UnreadCountWidget } from "./unread_count_helpers.js";
import {
    build_list_item,
    build_main_link,
    build_right_align_span,
    MainLinkWidget,
} from "./panel_helpers.js";

interface BuildArgs {
    readonly launch_all_messages: () => void;
    readonly all_messages_menu: () => void;
    readonly translate: (s: string) => string;
}

type Widgets = {
    readonly main_link: MainLinkWidget,
    readonly unread_count: UnreadCountWidget,
    readonly vdot_icon: VdotWidget,
} 

export type AllMessagesWidget = {
    readonly li: HTMLElement,
    readonly repopulate_text: () => void,
    readonly update_unread_count: (count: number) => void,
    readonly widgets: Widgets,
}

function build() {
    const li = build_list_item();

    const main_link = build_main_link({
        href: "#all_messages",
        icon_name: "fa-align-left",
    });

    const vdot_icon = build_vdot_icon();
    const unread_count = build_unread_count();
    const right = build_right_align_span();

    li.append(main_link.elem);
    right.append(unread_count.elem, vdot_icon.elem);
    li.append(right);

    return {
        li,
        main_link,
        unread_count,
        vdot_icon,
    };
}

export function fully_build({
    launch_all_messages,
    all_messages_menu,
    translate,
}: BuildArgs): AllMessagesWidget {
    function repopulate_text() {
        all_messages.main_link.span.innerText = translate("All messages");
    }

    function wire_up_handlers() {
        all_messages.main_link.elem.addEventListener("click", () => {
            launch_all_messages();
        });
        all_messages.vdot_icon.elem.addEventListener("click", () => {
            all_messages_menu();
        });
    }

    const all_messages = build();

    wire_up_handlers();
    repopulate_text();

    function update_unread_count(count: number): void {
        all_messages.unread_count.update_count(count);
    }

    const widgets = {
        main_link: all_messages.main_link,
        unread_count: all_messages.unread_count,
        vdot_icon: all_messages.vdot_icon,
    };

    return {
        li: all_messages.li,
        repopulate_text,
        update_unread_count,
        widgets,
    };
}
