import { build_list_item, build_main_link } from "./panel_helpers.js";
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
export function fully_build({ launch_recent_conversations, translate, }) {
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
    const widgets = {
        main_link: recent.main_link,
    };
    return {
        li: recent.li,
        repopulate_text,
        widgets,
    };
}
//# sourceMappingURL=recent_conversations_component.js.map