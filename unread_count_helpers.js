zulip.unread_count_helpers = (function () {
    function build_unread_count() {
        const elem = document.createElement("span");
        elem.classList.add("style-panel-unread-counter");
        return elem;
    }

    return {
        build_unread_count,
    };
})();
