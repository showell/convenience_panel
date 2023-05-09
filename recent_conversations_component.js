zulip.recent_conversations_component = (function () {
    const { build_list_item, build_main_link } = zulip.panel_helpers;

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

    function fully_build({ services }) {
        function repopulate_text() {
            recent.main_link.span.innerText = translate("Recent conversations");
        }

        function wire_up_handlers() {
            // TODO: fix what we launch
            recent.main_link.elem.addEventListener("click", () => {
                launch_recent_conversations();
            });
        }

        const recent = build();
        const { translate, launch_recent_conversations } = services;

        wire_up_handlers();
        repopulate_text();

        return {
            li: recent.li,
            repopulate_text,
        };
    }

    return { fully_build };
})();
