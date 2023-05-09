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

    function wire_up_handlers({ recent, launch_recent_conversations }) {
        // TODO: fix what we launch
        recent.main_link.elem.addEventListener("click", () => {
            launch_recent_conversations();
        });
    }

    function populate_text({ recent, translate } ) {
        recent.main_link.span.innerText = translate("Recent conversations");
    }

    function fully_build({ services }) {
        const recent = build();
        const { translate, launch_recent_conversations } = services;

        wire_up_handlers({ recent, launch_recent_conversations });
        populate_text({ recent, translate });

        return recent;
    }

    return { fully_build };
})();
