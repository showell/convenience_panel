import { build_list_item, build_main_link, build_right_align_span } from "./panel_helpers.js";
import { build_unread_count } from "./unread_count_helpers.js";
function build() {
    const li = build_list_item();
    const main_link = build_main_link({
        href: "#narrow/is/mentioned",
        icon_name: "fa-at",
    });
    const unread_count = build_unread_count();
    const right = build_right_align_span();
    right.append(unread_count.elem);
    li.append(main_link.elem, right);
    return {
        li,
        main_link,
        unread_count,
    };
}
export function fully_build({ launch_mentions, translate, }) {
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
    function update_unread_count(count) {
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
//# sourceMappingURL=mentions_component.js.map