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

    document.body.append(french_button);
}
