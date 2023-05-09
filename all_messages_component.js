zulip.all_messages_component = (function () {
    const { build_unread_count } = zulip.unread_count_helpers;
    const { build_vdot_icon } = zulip.icon_helpers;
    const { build_list_item, build_main_link, build_right_align_div } =
        zulip.panel_helpers;

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
            unread_count,
            vdot_icon,
        };
    }

    function fully_build({ services }) {
        function repopulate_text(){
            all_messages.main_link.span.innerText = translate("All messages");
            all_messages.unread_count.innerText = "2";
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
        const { launch_all_messages, all_messages_menu, translate } = services;

        wire_up_handlers();
        repopulate_text();

        return {
            li: all_messages.li,
            repopulate_text,
        }
    }

    return { fully_build };
})();
