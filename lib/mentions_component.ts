import {
    build_list_item,
    build_main_link,
    build_right_align_span,
    MainLinkWidget,
} from "./panel_helpers.js";
import {
    build_unread_count,
    UnreadCountWidget,
} from "./unread_count_helpers.js";

interface BuildArgs {
    readonly launch_mentions: () => void;
    readonly translate: (s: string) => string;
}

type Widgets = {
    readonly main_link: MainLinkWidget;
    readonly unread_count: UnreadCountWidget;
};

export type MentionsWidget = {
    readonly li: HTMLElement;
    readonly repopulate_text: () => void;
    readonly update_unread_count: (count: number) => void;
    readonly widgets: Widgets;
};

function build() {
    const li = build_list_item();

    const main_link = build_main_link({
        href: "#narrow/is/mentioned",
        icon_name: "fa-at",
    });

    const classic = true;
    const unread_count = build_unread_count({ classic });
    const right = build_right_align_span();
    right.append(unread_count.elem);

    li.append(main_link.elem, right);

    return {
        li,
        main_link,
        unread_count,
    };
}

export function fully_build({
    launch_mentions,
    translate,
}: BuildArgs): MentionsWidget {
    function repopulate_text() {
        mentions.main_link.span.innerText = translate("Mentions");
    }

    function wire_up_handlers() {
        // TODO: fix what we launch
        mentions.main_link.elem.addEventListener("click", () => {
            launch_mentions();
        });
    }

    const mentions = build();

    wire_up_handlers();
    repopulate_text();

    function update_unread_count(count: number): void {
        mentions.unread_count.update_count(count);
    }

    const widgets = {
        main_link: mentions.main_link,
        unread_count: mentions.unread_count,
    };

    return {
        li: mentions.li,
        repopulate_text,
        update_unread_count,
        widgets,
    };
}
