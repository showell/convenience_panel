zulip.panel_helpers = (function () {
    const { build_top_left_panel_icon } = zulip.icon_helpers;

    function build_list_item() {
        const li = document.createElement("li");
        li.classList.add("style-panel-list-item");

        return li;
    }

    function build_main_link({ href, icon_name }) {
        const elem = document.createElement("a");
        elem.href = href;

        const icon = build_top_left_panel_icon({ icon_name });
        const span = document.createElement("span");

        elem.classList.add("style-panel-main-link");

        elem.append(icon, span);

        return { elem, span };
    }

    return {
        build_list_item,
        build_main_link,
    };
})();
