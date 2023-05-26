import {
    build_list_item,
    build_main_link,
    MainLinkWidget,
} from "./panel_helpers.js";
import { TippyTemplateArgs } from "types";

type BuildArgs = {
    readonly launch_recent_conversations: () => void;
    readonly set_tippy_template_for_element: (arg0: TippyTemplateArgs) => void;
    readonly translate: (s: string) => string;
};

type Widgets = {
    readonly main_link: MainLinkWidget;
};

export type RecentConversationsWidget = {
    readonly li: HTMLElement;
    readonly repopulate_text: () => void;
    readonly widgets: Widgets;
};

function build() {
    const li = build_list_item();

    const main_link = build_main_link({
        href: "#recent",
        icon_name: "fa-clock",
    });

    li.append(main_link.elem);

    return {
        li,
        main_link,
    };
}

export function fully_build({
    launch_recent_conversations,
    set_tippy_template_for_element,
    translate,
}: BuildArgs) {
    function repopulate_text() {
        recent.main_link.span.innerText = translate("Recent conversations");
    }

    function wire_up_handlers() {
        // TODO: fix what we launch
        recent.main_link.elem.addEventListener("click", () => {
            launch_recent_conversations();
        });
    }

    function tippy_enable() {
        set_tippy_template_for_element({
            elem: recent.main_link.elem,
            template: "recent-conversations-tooltip-content",
        });
    }

    const recent = build();

    wire_up_handlers();
    repopulate_text();
    tippy_enable();

    const widgets = {
        main_link: recent.main_link,
    };

    return {
        li: recent.li,
        repopulate_text,
        widgets,
    };
}
