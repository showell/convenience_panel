zulip.convenience_panel = (function () {
{
    const all_messages_component = zulip.all_messages_component;
    const recent_conversations_component = zulip.recent_conversations_component;

    function fully_build({ services }) {
        const div = document.createElement("div");

        const all_messages = all_messages_component.fully_build({ services });
        div.append(all_messages.li);

        const recent_conversations = recent_conversations_component.fully_build({ services });
        div.append(recent_conversations.li);

        return div;
    }

    return {
        fully_build,
    };
}
})();
