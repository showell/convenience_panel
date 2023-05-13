import { fully_build } from "./dist/convenience_panel.js";
import { build_handlers } from "./handlers.js";

{
    zulip.lang = "en";

    const demo = document.querySelector("#demo");
    const services = build_handlers();
    const panel = fully_build({ services });
    demo.append(panel.elem);

    const french_button = document.createElement("button");
    french_button.innerText = "fr";
    french_button.addEventListener("click", () => {
        zulip.lang = "fr";
        panel.repopulate_text({ translate: services.translate });
    });

    const unread_button = document.createElement("button");
    unread_button.innerText = "Set unreads";

    unread_button.addEventListener("click", () => {
        panel.update_unread_count(20);
    });

    document.body.append(french_button);
    document.body.append(unread_button);

    window.panel = panel;
}
