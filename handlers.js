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

    function set_tippy_template_for_element({ elem, template }) {
        const bogus_content = `(TIPPY would actually read from template ${template})`;
        tippy(elem, { content: bogus_content });
    }

    return {
        all_messages_menu,
        drafts_menu,
        launch_all_messages,
        launch_drafts,
        launch_mentions,
        launch_recent_conversations,
        launch_starred_messages,
        set_tippy_template_for_element,
        starred_messages_menu,
        translate,
        wants_starred_count,
    };
}
