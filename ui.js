{
    const { fully_build } = zulip.convenience_panel;

    const demo = document.querySelector("#demo");
    const services = zulip.handlers.build();
    const panel = fully_build({ services });
    demo.append(panel);
}
