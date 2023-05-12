import { build_list_item, build_main_link } from "./panel_helpers.js";

interface BuildArgs {
    readonly launch_recent_conversations: () => void;
    readonly translate: (s: string) => string;
}

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

    const recent = build();

    wire_up_handlers();
    repopulate_text();

    return {
        li: recent.li,
        repopulate_text,
    };
}
