zulip.unread_count_helpers = (function () {
    const { setStyles } = zulip.style_helpers;

    function build_unread_count() {
        const elem = document.createElement("span");

        setStyles(elem, {
            border: ".5px solid #7e827c",
            borderRadius: "4px",
            paddingRight: "4px",
            paddingLeft: "4px",
            fontSize: "12px",
        });

        return elem;
    }

    return {
        build_unread_count,
    };
})();
