{
    const demo = document.querySelector("#demo");
    const services = zulip.handlers.build();

    const all_messages_component = zulip.all_messages_component;
    const all_messages = all_messages_component.fully_build({ services });
    demo.append(all_messages.li);
}
