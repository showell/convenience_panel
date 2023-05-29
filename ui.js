import { fully_build } from "./dist/convenience_panel.js";
import { build_handlers } from "./handlers.js";

{
    function tippy_enable({ elem, template }) {
        function content() {
            return template;
        }

        tippy(elem, { content, delay: 500 });
        elem.setAttribute("data-tooltip-template-id", template);
    }

    function tippy_enable_all_messages(elem) {
        tippy_enable({
            elem,
            template: "all-message-tooltip-content",
        });
    }

    function tippy_enable_drafts(elem) {
        tippy_enable({
            elem,
            template: "drafts-tooltip-content",
        });
    }

    function tippy_enable_recent_conversations(elem) {
        tippy_enable({
            elem,
            template: "recent-conversations-tooltip-content",
        });
    }

    zulip.lang = "en";
    zulip.wants_starred_count = false;

    const panel_container = document.querySelector("#panel_container");
    const services = build_handlers();
    const panel = fully_build({ services });
    window.panel = panel;

    panel_container.append(panel.elem);

    tippy_enable_all_messages(
        panel.widgets.all_messages.widgets.main_link.elem
    );
    tippy_enable_all_messages(panel.widgets.drafts.widgets.main_link.elem);
    tippy_enable_all_messages(
        panel.widgets.recent_conversations.widgets.main_link.elem
    );

    console.log("services get passed in", services);
    console.log("and component provides these", panel);

    let showing_unreads = false;

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
        document.querySelector("#test_stuff").append(div);
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

    function clear_drafts() {
        panel.update_drafts_count(0);
    }

    function set_drafts() {
        panel.update_drafts_count(40);
    }

    function show_unreads() {
        showing_unreads = true;
        panel.update_unread_count({
            all_messages: 10,
            mentions: 20,
            starred_messages: 30,
        });
    }

    function clear_unreads() {
        showing_unreads = false;
        panel.update_unread_count({
            all_messages: 0,
            mentions: 0,
            starred_messages: 0,
        });
    }

    function set_aria_hidden_visibility(vis) {
        for (const elem of document.querySelectorAll("[aria-hidden]")) {
            elem.style.visibility = vis;
        }
    }

    function screen_reader_on() {
        set_aria_hidden_visibility("hidden");
    }

    function screen_reader_off() {
        set_aria_hidden_visibility("visible");
    }

    function turn_on_starred_counts() {
        zulip.wants_starred_count = true;
        if (showing_unreads) {
            show_unreads();
        }
    }

    function turn_off_starred_counts() {
        zulip.wants_starred_count = false;
        if (showing_unreads) {
            show_unreads();
        }
    }

    make_test_checkbox({
        label: "Draft counts",
        no_action: clear_drafts,
        yes_action: set_drafts,
    });

    make_test_checkbox({
        label: "French",
        no_action: translate_to_english,
        yes_action: translate_to_french,
    });

    make_test_checkbox({
        label: "Screen reader mode",
        no_action: screen_reader_off,
        yes_action: screen_reader_on,
    });

    make_test_checkbox({
        label: "Show starred counts",
        no_action: turn_off_starred_counts,
        yes_action: turn_on_starred_counts,
    });

    make_test_checkbox({
        label: "Show unreads",
        no_action: clear_unreads,
        yes_action: show_unreads,
    });
}
