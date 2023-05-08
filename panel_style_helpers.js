zulip.panel_style_helpers = (function () {
    const {
        setStyles,
        style_a,
    } = zulip.style_helpers;

    function style_main_link(a) {
        style_a(a);

        setStyles(a, {
            marginTop: "1px",
            display: "inline-block",
        });
    }

    function colorize_main_link(a) {
        setStyles(a, {
            color: "rgb(51, 51, 51)",
        });
    }

    function style_list_item(li) {
        setStyles(li, {
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "1px",
            paddingBottom: "1px",
        });
    }

    return {
        colorize_main_link,
        style_main_link,
        style_list_item,
    };
})();
