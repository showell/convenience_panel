import { fully_build } from "./dist/convenience_panel.js";
import { build_handlers } from "./handlers.js";

{
    zulip.lang = "en";

    const demo = document.querySelector("#demo");
    const services = build_handlers();
    const panel = fully_build({ services });
    demo.append(panel.elem);

    function make_test_button({ label, action }) {
        const button = document.createElement("button");
        button.innerText = label;
        button.addEventListener("click", action);
        document.body.append(button);
    }

    function translate_to_french() {
        zulip.lang = "fr";
        panel.repopulate_text({ translate: services.translate });
    }

    make_test_button({
        label: "French",
        action: translate_to_french,
    });

    function set_unreads() {
        panel.update_unread_count({
            all_messages: 10,
            mentions: 20,
            starred_messages: 30,
            drafts: 40,
        });
    }

    make_test_button({
        label: "Set unread counts",
        action: set_unreads,
    });
    

    function clear_unreads() {
        panel.update_unread_count({
            all_messages: 0,
            mentions: 0,
            starred_messages: 0,
            drafts: 0,
        });
    }

    make_test_button({
        label: "Clear unread counts",
        action: clear_unreads,
    });

    function hide_stuff_for_screen_reader() {
        for (const elem of document.querySelectorAll("[aria-hidden]")) {
            elem.style.visibility = "hidden";
        }
    }

    make_test_button({
        label: "Hide aria-hidden elements",
        action: hide_stuff_for_screen_reader,
    });

    window.panel = panel;
}
