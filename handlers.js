zulip.handlers = (function () {
    function build() {
        function launch_all_messages() {
            console.log("Launch All Messages");
        }

        function launch_recent_conversations() {
            console.log("Launch Recent Conversations");
        }

        function launch_mentions() {
            console.log("Launch Mentions view");
        }

        function all_messages_menu() {
            console.log("pop up All Messages vdot menu");
        }

        function translate(s) {
            if (zulip.lang == "fr") {
                if (s === "All messages") {
                    return "Tous les messages";
                } else if (s == "Recent conversations") {
                    return "Conversations récentes";
                }
            }

            return s;
        }

        return {
            launch_all_messages,
            launch_recent_conversations,
            launch_mentions,
            all_messages_menu,
            translate,
        };
    }

    return {
        build,
    };
})();
