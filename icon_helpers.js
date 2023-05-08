zulip.icon_helpers = (function () {
    const { setStyles } = zulip.style_helpers;

    function build_top_left_panel_icon({ icon_name }) {
        const span = document.createElement("psan");

        const icon = document.createElement("i");

        icon.classList.add("fa");
        icon.classList.add(icon_name);
        icon.setAttribute("aria-hidden", "true");

        span.append(icon);

        setStyles(span, {
            display: "inline-block",
            minWidth: "19px",
            textAlign: "center",
        });

        setStyles(icon, {
            paddingRight: "3px",
            opacity: ".7",
        });

        return span;
    }

    return {
        build_top_left_panel_icon,
    };
})();
