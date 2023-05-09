zulip.convenience_panel = (function () {
{
    const all_messages_component = zulip.all_messages_component;

    function fully_build({ services }) {
        const div = document.createElement("div");

        const all_messages = all_messages_component.fully_build({ services });
        div.append(all_messages.li);

        return div;
    }

    return {
        fully_build,
    };
}
})();
