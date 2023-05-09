{
    const { fully_build, repopulate_text } = zulip.convenience_panel;

    zulip.lang = "en";

    const demo = document.querySelector("#demo");
    const services = zulip.handlers.build();
    const panel = fully_build({ services });
    demo.append(panel.elem);

    const french_button = document.createElement("button");
    french_button.innerText = "fr";
    french_button.addEventListener("click", () => {
        zulip.lang = "fr";
        panel.repopulate_text({ translate: services.translate });
    });

    document.body.append(french_button);
}
