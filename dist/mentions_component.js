import { build_list_item, build_main_link } from "./panel_helpers.js";
function build() {
    const li = build_list_item();
    const main_link = build_main_link({
        href: "#narrow/is/mentioned",
        icon_name: "fa-at",
    });
    li.append(main_link.elem);
    return {
        li,
        main_link,
    };
}
export function fully_build({ launch_mentions, translate, }) {
    function repopulate_text() {
        recent.main_link.span.innerText = translate("Mentions");
    }
    function wire_up_handlers() {
        // TODO: fix what we launch
        recent.main_link.elem.addEventListener("click", () => {
            launch_mentions();
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
//# sourceMappingURL=mentions_component.js.map