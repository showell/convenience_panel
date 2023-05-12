import * as all_messages_component from "./all_messages_component.js";
import * as recent_conversations_component from "./recent_conversations_component.js";
import * as mentions_component from "./mentions_component.js";

export function fully_build({ services }) {
    const div = document.createElement("div");

    const all_messages = all_messages_component.fully_build({
        services,
    });
    div.append(all_messages.li);

    const recent_conversations = recent_conversations_component.fully_build(
        { services }
    );
    div.append(recent_conversations.li);

    const mentions = mentions_component.fully_build(
        { services }
    );
    div.append(mentions.li);

    function repopulate_text({ translate }) {
        all_messages.repopulate_text();
        recent_conversations.repopulate_text();
        mentions.repopulate_text();
    }

    return {
        elem: div,
        repopulate_text,
    };
}
