zulip.handlers = (function () {
    function build() {
        function launch_all_messages() {
            console.log("Launch All Messages");
        }

        function launch_recent_conversations() {
            console.log("Launch Recent Conversations");
        }

        function all_messages_menu() {
            console.log("pop up All Messages vdot menu");
        }

        return {
            launch_all_messages,
            launch_recent_conversations,
            all_messages_menu,
        };
    }

    return {
        build,
    };
})();
