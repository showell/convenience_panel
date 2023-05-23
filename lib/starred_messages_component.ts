import { build_vdot_icon, VdotWidget } from "./icon_helpers.js";
import {
    build_unread_count,
    UnreadCountWidget,
} from "./unread_count_helpers.js";
import {
    build_list_item,
    build_main_link,
    build_right_align_span,
    MainLinkWidget,
} from "./panel_helpers.js";

type StarredBuildArgs = {
    readonly launch_starred_messages: () => void;
    readonly starred_messages_menu: () => void;
    readonly translate: (s: string) => string;
    readonly wants_starred_count: () => boolean;
};

type Widgets = {
    readonly main_link: MainLinkWidget;
    readonly unread_count: UnreadCountWidget;
    readonly vdot_icon: VdotWidget;
};

export type StarredMessagesWidget = {
    readonly li: HTMLElement;
    readonly repopulate_text: () => void;
    readonly update_unread_count: (count: number) => void;
    readonly widgets: Widgets;
};

function build() {
    const li = build_list_item();

    const main_link = build_main_link({
        href: "#narrow/is/starred",
        icon_name: "fa-star",
    });

    const vdot_icon = build_vdot_icon();
    const classic = false;
    const unread_count = build_unread_count({ classic });
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
    launch_starred_messages,
    starred_messages_menu,
    translate,
    wants_starred_count,
}: StarredBuildArgs): StarredMessagesWidget {
    function repopulate_text() {
        starred_messages.main_link.span.innerText =
            translate("Starred messages");
    }

    function wire_up_handlers() {
        starred_messages.main_link.elem.addEventListener("click", () => {
            launch_starred_messages();
        });
        starred_messages.vdot_icon.elem.addEventListener("click", () => {
            starred_messages_menu();
        });
    }

    const starred_messages = build();

    wire_up_handlers();
    repopulate_text();

    function update_unread_count(count: number): void {
        if (wants_starred_count()) {
            starred_messages.unread_count.update_count(count);
        } else {
            // This is slightly hacky, but unread counts are hidden for 0.
            starred_messages.unread_count.update_count(0);
        }
    }

    const widgets = {
        main_link: starred_messages.main_link,
        unread_count: starred_messages.unread_count,
        vdot_icon: starred_messages.vdot_icon,
    };

    return {
        li: starred_messages.li,
        repopulate_text,
        update_unread_count,
        widgets,
    };
}
