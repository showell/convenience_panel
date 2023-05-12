import { build_vdot_icon } from "./icon_helpers.js";
import { build_unread_count } from "./unread_count_helpers.js";
import { build_list_item, build_main_link, build_right_align_span, } from "./panel_helpers.js";
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
    right.append(unread_count.elem, vdot_icon);
    li.append(right);
    return {
        li,
        main_link,
        unread_count,
        vdot_icon,
    };
}
export function fully_build({ launch_all_messages, all_messages_menu, translate, }) {
    function repopulate_text() {
        all_messages.main_link.span.innerText = translate("All messages");
    }
    function wire_up_handlers() {
        all_messages.main_link.elem.addEventListener("click", () => {
            launch_all_messages();
        });
        all_messages.vdot_icon.addEventListener("click", () => {
            all_messages_menu();
        });
    }
    const all_messages = build();
    wire_up_handlers();
    repopulate_text();
    all_messages.unread_count.update_count(4);
    return {
        li: all_messages.li,
        repopulate_text,
    };
}
//# sourceMappingURL=all_messages_component.js.map