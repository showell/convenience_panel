zulip.all_messages_component = (function () {
    const { build_unread_count } = zulip.unread_count_helpers;
    const { build_vdot_icon } = zulip.icon_helpers;
    const { build_list_item, build_main_link, build_right_align_div } = zulip.panel_helpers;

    function build() {
        const li = build_list_item();

        const main_link = build_main_link({
            href: "#all_messages",
            icon_name: "fa-align-left",
        });

        const vdot_icon = build_vdot_icon();
        const unread_count = build_unread_count();
        const right = build_right_align_div();

        li.append(main_link.elem);
        right.append(unread_count, vdot_icon);
        li.append(right);

        return {
            li,
            main_link,
            right,
            unread_count,
            vdot_icon,
        };
    }

    function wire_up_handlers({ all_messages, services }) {
        const { all_messages_menu, launch_all_messages } = services;
        all_messages.main_link.elem.addEventListener("click", () => {
            launch_all_messages();
        });
        all_messages.vdot_icon.addEventListener("click", () => {
            all_messages_menu();
        });
    }

    function populate_text(all_messages) {
        all_messages.main_link.span.innerText = "All messages";
        all_messages.unread_count.innerText = "2";
    }

    function fully_build({ services }) {
        const all_messages = build();
        wire_up_handlers({ all_messages, services });
        populate_text(all_messages);

        return all_messages;
    }

    return { fully_build };
})();
