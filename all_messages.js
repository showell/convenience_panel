window.all_messages_component = (function () {
    const { build_top_left_panel_icon } = window.icon_helpers;
    const { style_a, setStyles } = window.style_helpers;

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

    function wire_up_handlers({all_messages, services}) {
        const {launch_all_messages} = services;
        all_messages.main_link.addEventListener("click", () => {
            launch_all_messages();
        });
    }

    function style(all_messages) {
        setStyles(all_messages.li, {
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "1px",
            paddingBottom: "1px",
        });

        style_a(all_messages.main_link);

        setStyles(all_messages.main_link, {
            marginTop: "1px",
            display: "block",
            color: "rgb(51, 51, 51)",
        });
    }

    function fully_build({services}) {
        const all_messages = build_all_messages();
        wire_up_handlers({all_messages, services});
        style(all_messages);

        return all_messages;
    }

    return { fully_build };
})();
