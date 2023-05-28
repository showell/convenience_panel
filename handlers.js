export function build_handlers() {
    function output(s) {
        const out = document.querySelector("#output");
        const br = document.createElement("br");

        out.append(s, br);
    }

    function launch_all_messages() {
        output("Launch All Messages");
    }

    function launch_drafts() {
        output("Launch Drafts");
    }

    function launch_recent_conversations() {
        output("Launch Recent Conversations");
    }

    function launch_mentions() {
        output("Launch Mentions view");
    }

    function launch_starred_messages() {
        output("Launch Starred Messages view");
    }

    function all_messages_menu() {
        output("pop up All Messages vdot menu");
    }

    function drafts_menu() {
        output("pop up Drafts vdot menu");
    }

    function starred_messages_menu() {
        output("pop up Starred Messages vdot menu");
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
        function content() {
            return "see console";
        }

        function onShow() {
            output(`(Zulip would actually read from template ${template})`);
        }

        tippy(elem, { content, delay: 100, onShow });
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
