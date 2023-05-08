zulip.all_messages_component = (function () {
    const { build_unread_count } = zulip.unread_count_helpers;
    const { build_vdot_icon } = zulip.icon_helpers;
    const { colorize_main_link, style_list_item, style_main_link } =
        zulip.panel_style_helpers;
    const { build_main_link } = zulip.panel_helpers;

    function build() {
        const li = document.createElement("li");
        const main_link = build_main_link({
            href: "#all_messages",
            icon_name: "fa-align-left",
        });

        const vdot_icon = build_vdot_icon();
        const unread_count = build_unread_count();


        li.append(main_link.elem);
        li.append(unread_count);
        li.append(vdot_icon);

        return {
            li,
            main_link,
            unread_count,
        };
    }

    function wire_up_handlers({ all_messages, services }) {
        const { launch_all_messages } = services;
        all_messages.main_link.elem.addEventListener("click", () => {
            launch_all_messages();
        });
    }

    function style(all_messages) {
        style_list_item(all_messages.li);
        style_main_link(all_messages.main_link.elem);
    }

    function colorize(all_messages) {
        colorize_main_link(all_messages.main_link.elem);
    }

    function populate_text(all_messages) {
        all_messages.main_link.span.innerText = "All messages";
        all_messages.unread_count.innerText = "2";
    }

    function fully_build({ services }) {
        const all_messages = build();
        wire_up_handlers({ all_messages, services });
        style(all_messages);
        colorize(all_messages);
        populate_text(all_messages);

        return all_messages;
    }

    return { fully_build };
})();
