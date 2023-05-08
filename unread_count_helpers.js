zulip.unread_count_helpers = (function () {
    const { setStyles } = zulip.style_helpers;

    function build_unread_count() {
        const elem = document.createElement("span");

        setStyles(elem, {});

        return elem;
    }

    return {
        build_unread_count,
    };
})();
