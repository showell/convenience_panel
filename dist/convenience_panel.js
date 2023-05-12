import * as all_messages_component from "./all_messages_component.js";
import * as recent_conversations_component from "./recent_conversations_component.js";
import * as mentions_component from "./mentions_component.js";
export function fully_build({ services }) {
    const div = document.createElement("div");
    const { launch_all_messages, launch_mentions, launch_recent_conversations, all_messages_menu, translate, } = services;
    const all_messages = all_messages_component.fully_build({
        launch_all_messages,
        all_messages_menu,
        translate,
    });
    div.append(all_messages.li);
    all_messages.update_unread_count(17);
    const recent_conversations = recent_conversations_component.fully_build({
        launch_recent_conversations,
        translate,
    });
    div.append(recent_conversations.li);
    const mentions = mentions_component.fully_build({
        launch_mentions,
        translate,
    });
    div.append(mentions.li);
    function repopulate_text() {
        all_messages.repopulate_text();
        recent_conversations.repopulate_text();
        mentions.repopulate_text();
    }
    return {
        elem: div,
        repopulate_text,
    };
}
//# sourceMappingURL=convenience_panel.js.map