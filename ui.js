{

    const demo = document.querySelector("#demo");
    const services = window.handlers.build();

    const all_messages_component = window.all_messages_component;
    const all_messages = all_messages_component.fully_build({services});
    demo.append(all_messages.li);
}
