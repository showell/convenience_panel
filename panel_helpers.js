zulip.panel_helpers = (function () {
    const { build_top_left_panel_icon } = zulip.icon_helpers;

    function build_main_link({ href, text, icon_name }) {
        const elem = document.createElement("a");
        elem.href = href;

        function build_span() {
            const span = document.createElement("span");
            span.innerText = text;

            return span;
        }

        const icon = build_top_left_panel_icon({ icon_name });

        elem.append(icon);
        elem.append(build_span());

        return elem;
    }

    return {
        build_main_link,
    };
})();
