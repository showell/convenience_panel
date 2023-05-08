zulip.all_messages_component = (function () {
    const { build_top_left_panel_icon } = zulip.icon_helpers;
    const {
        colorize_main_link,
        style_list_item,
        style_main_link,
    } = zulip.style_helpers;

    function build_all_messages() {
        function build_main_link(li) {
            const elem = document.createElement("a");
            elem.href = "#all_messages";

            function build_span() {
                const span = document.createElement("span");
                span.innerText = "All messages";

                return span;
            }

            const icon = build_top_left_panel_icon({
                icon_name: "fa-align-left",
            });

            elem.append(icon);
            elem.append(build_span());

            li.append(elem);

            return elem;
        }

        const li = document.createElement("li");
        const main_link = build_main_link(li);

        return {
            li,
            main_link,
        };
    }

    function wire_up_handlers({ all_messages, services }) {
        const { launch_all_messages } = services;
        all_messages.main_link.addEventListener("click", () => {
            launch_all_messages();
        });
    }

    function style(all_messages) {
        style_list_item(all_messages.li);
        style_main_link(all_messages.main_link);
    }

    function colorize(all_messages) {
        colorize_main_link(all_messages.main_link);
    }

    function fully_build({ services }) {
        const all_messages = build_all_messages();
        wire_up_handlers({ all_messages, services });
        style(all_messages);
        colorize(all_messages);

        return all_messages;
    }

    return { fully_build };
})();
