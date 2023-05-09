zulip.recent_conversations_component = (function () {
    const { build_list_item, build_main_link } =
        zulip.panel_helpers;

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

    function wire_up_handlers({ recent, services }) {
        // TODO: fix what we launch
        const { launch_recent_conversations } = services;
        recent.main_link.elem.addEventListener("click", () => {
            launch_recent_conversations();
        });
    }

    function populate_text(all_messages) {
        all_messages.main_link.span.innerText = "Recent conversations";
    }

    function fully_build({ services }) {
        const recent = build();
        wire_up_handlers({ recent, services });
        populate_text(recent);

        return recent;
    }

    return { fully_build };
})();
