zulip.all_messages_component = (function () {
    const { build_unread_count } = zulip.unread_count_helpers;
    const { build_vdot_icon } = zulip.icon_helpers;
    const { build_main_link } = zulip.panel_helpers;

    function build() {
        const li = document.createElement("li");
        const main_link = build_main_link({
            href: "#all_messages",
            icon_name: "fa-align-left",
        });

        const vdot_icon = build_vdot_icon();
        const unread_count = build_unread_count();
        const right = document.createElement("span");

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

    function style(all_messages) {
        all_messages.li.classList.add("style-panel-list-item");
        all_messages.right.classList.add("style-panel-list-item-right");
    }

    function populate_text(all_messages) {
        all_messages.main_link.span.innerText = "All messages";
        all_messages.unread_count.innerText = "2";
    }

    function fully_build({ services }) {
        const all_messages = build();
        wire_up_handlers({ all_messages, services });
        style(all_messages);
        populate_text(all_messages);

        return all_messages;
    }

    return { fully_build };
})();
