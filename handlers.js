window.handlers = (function () {

    function build() {
        function launch_all_messages() {
            console.log("Launch All Messages");
        }

        return {
            launch_all_messages,
        };
    }

    return {
        build,
    }
        
})();
