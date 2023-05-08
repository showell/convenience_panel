zulip.unread_count_helpers = (function () {
    const { setStyles } = zulip.style_helpers;

    function build_unread_count() {
        const elem = document.createElement("span");
        elem.classList.add("style-panel-unread-counter");
        return elem;
    }

    return {
        build_unread_count,
    };
})();
