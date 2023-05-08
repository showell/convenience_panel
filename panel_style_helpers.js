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

    function style_list_item(li) {
        setStyles(li, {
            paddingLeft: "5px",
            paddingTop: "1px",
            paddingBottom: "1px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
        });
    }

    return {
        colorize_main_link,
        style_main_link,
        style_list_item,
        style_right,
    };
})();
