import { fully_build } from "./dist/convenience_panel.js";
import { build_handlers } from "./handlers.js";

{
    zulip.lang = "en";
    zulip.wants_starred_count = false;

    const demo = document.querySelector("#demo");
    const services = build_handlers();
    const panel = fully_build({ services });
    demo.append(panel.elem);

    console.log("services get passed in", services);
    console.log("and component provides these", panel);

    function make_test_checkbox({ label, no_action, yes_action }) {
        const div = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const span = document.createElement("span");
        span.innerText = label;

        div.append(checkbox, span);

        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                yes_action();
            } else {
                no_action();
            }
        });
        document.body.append(div);
    }

    function make_test_button({ label, action }) {
        const button = document.createElement("button");
        button.innerText = label;
        button.addEventListener("click", action);
        document.body.append(button);
    }

    function translate(lang) {
        zulip.lang = lang;
        panel.repopulate_text({ translate: services.translate });
    }

    function translate_to_english() {
        translate("en");
    }

    function translate_to_french() {
        translate("fr");
    }

    function set_unreads() {
        panel.update_unread_count({
            all_messages: 10,
            mentions: 20,
            starred_messages: 30,
            drafts: 40,
        });
    }

    function clear_unreads() {
        panel.update_unread_count({
            all_messages: 0,
            mentions: 0,
            starred_messages: 0,
            drafts: 0,
        });
    }

    function hide_stuff_for_screen_reader() {
        for (const elem of document.querySelectorAll("[aria-hidden]")) {
            elem.style.visibility = "hidden";
        }
    }

    make_test_button({
        label: "Hide aria-hidden elements",
        action: hide_stuff_for_screen_reader,
    });

    function turn_on_starred_counts() {
        zulip.wants_starred_count = true;
        set_unreads();
    }

    make_test_button({
        label: "Show starred counts",
        action: turn_on_starred_counts,
    });

    make_test_checkbox({
        label: "French",
        no_action: translate_to_english,
        yes_action: translate_to_french,
    });

    make_test_checkbox({
        label: "Show unreads",
        no_action: clear_unreads,
        yes_action: set_unreads,
    });

    window.panel = panel;
}
