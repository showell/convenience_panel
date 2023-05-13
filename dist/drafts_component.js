import { build_vdot_icon } from "./icon_helpers.js";
import { build_unread_count } from "./unread_count_helpers.js";
import { build_list_item, build_main_link, build_right_align_span, } from "./panel_helpers.js";
function build() {
    const li = build_list_item();
    const main_link = build_main_link({
        href: "#narrow/is/starred",
        icon_name: "fa-pencil",
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
export function fully_build({ launch_drafts, drafts_menu, translate, }) {
    function repopulate_text() {
        drafts.main_link.span.innerText = translate("Drafts");
    }
    function wire_up_handlers() {
        drafts.main_link.elem.addEventListener("click", () => {
            launch_drafts();
        });
        drafts.vdot_icon.addEventListener("click", () => {
            drafts_menu();
        });
    }
    const drafts = build();
    wire_up_handlers();
    repopulate_text();
    function update_unread_count(count) {
        drafts.unread_count.update_count(count);
    }
    return {
        li: drafts.li,
        repopulate_text,
        update_unread_count,
    };
}
//# sourceMappingURL=drafts_component.js.map