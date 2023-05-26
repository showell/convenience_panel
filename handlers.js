export function build_handlers() {
    function launch_all_messages() {
        console.log("Launch All Messages");
    }

    function launch_drafts() {
        console.log("Launch Drafts");
    }

    function launch_recent_conversations() {
        console.log("Launch Recent Conversations");
    }

    function launch_mentions() {
        console.log("Launch Mentions view");
    }

    function launch_starred_messages() {
        console.log("Launch Starred Messages view");
    }

    function all_messages_menu() {
        console.log("pop up All Messages vdot menu");
    }

    function drafts_menu() {
        console.log("pop up Drafts vdot menu");
    }

    function starred_messages_menu() {
        console.log("pop up Starred Messages vdot menu");
    }

    function translate(s) {
        if (zulip.lang == "fr") {
            if (s === "All messages") {
                return "Tous les messages";
            } else if (s == "Recent conversations") {
                return "Conversations récentes";
            } else if (s == "Starred messages") {
                return "Messages favoris";
            } else if (s == "Drafts") {
                return "Brouillons";
            }
        }

        return s;
    }

    function wants_starred_count() {
        return zulip.wants_starred_count;
    }

    function tippy_enable({ elem, template }) {
        const bogus_content = `(Zulip would actually read from template ${template})`;
        tippy(elem, { content: bogus_content });
        elem.setAttribute("data-tooltip-template-id", template);
    }

    function tippy_enable_all_messages(elem) {
        tippy_enable({
            elem,
            template: "all-message-tooltip-content",
        });
    }

    function tippy_enable_drafts(elem) {
        tippy_enable({
            elem,
            template: "drafts-tooltip-content",
        });
    }

    function tippy_enable_recent_conversations(elem) {
        tippy_enable({
            elem,
            template: "recent-conversations-tooltip-content",
        });
    }

    return {
        all_messages_menu,
        drafts_menu,
        launch_all_messages,
        launch_drafts,
        launch_mentions,
        launch_recent_conversations,
        launch_starred_messages,
        starred_messages_menu,
        tippy_enable_all_messages,
        tippy_enable_drafts,
        tippy_enable_recent_conversations,
        translate,
        wants_starred_count,
    };
}
