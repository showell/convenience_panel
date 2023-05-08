zulip.panel_style_helpers = (function () {
    const { setStyles } = zulip.style_helpers;

    function style_right(a) {
        setStyles(a, {
            display: "flex",
            flexDirection: "row",
        });
    }

    return {
        style_right,
    };
})();
