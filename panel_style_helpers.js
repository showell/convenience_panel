zulip.panel_style_helpers = (function () {
    const { setStyles } = zulip.style_helpers;

    function style_main_link(a) {
        setStyles(a, {
            marginTop: "1px",
            width: "85%",
        });
    }

    function colorize_main_link(a) {
        setStyles(a, {
            color: "rgb(51, 51, 51)",
        });
    }

    function style_right(a) {
        setStyles(a, {
            display: "flex",
            flexDirection: "row",
        });
    }

    return {
        colorize_main_link,
        style_main_link,
        style_right,
    };
})();
