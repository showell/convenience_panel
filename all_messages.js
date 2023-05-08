window.all_messages_component = (function () {
    const { build_top_left_panel_icon } = window.icon_helpers;
    const { style_a, setStyles } = window.style_helpers;

    function build_all_messages(demo) {
        function build_li() {
            const elem = document.createElement("li");

            return {
                elem,
            };
        }

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

            elem.append(icon.elem);
            elem.append(build_span());

            li.elem.append(elem);

            return {
                elem,
            };
        }

        const li = build_li();
        const main_link = build_main_link(li);

        demo.append(li.elem);

        return {
            li,
            main_link,
        };
    }

    function wire_up_handlers(all_messages) {
        all_messages.main_link.elem.addEventListener("click", () => {
            console.log("click to all_messages view");
        });
    }

    function style(all_messages) {
        setStyles(all_messages.li.elem, {
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "1px",
            paddingBottom: "1px",
        });

        style_a(all_messages.main_link.elem);

        setStyles(all_messages.main_link.elem, {
            marginTop: "1px",
            display: "block",
            color: "rgb(51, 51, 51)",
        });
    }

    function fully_build() {
        const all_messages = build_all_messages(demo);
        wire_up_handlers(all_messages);
        style(all_messages);
    }

    return { fully_build };
})();
