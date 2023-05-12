import * as all_messages_component from "./all_messages_component.js";
import * as recent_conversations_component from "./recent_conversations_component.js";
import * as mentions_component from "./mentions_component.js";

type Handlers = {
    readonly launch_all_messages: () => void;
    readonly launch_mentions: () => void;
    readonly launch_recent_conversations: () => void;
    readonly all_messages_menu: () => void;
    readonly translate: (s: string) => string;
}

interface BuildArgs {
    services: Handlers,
}

export function fully_build({ services }: BuildArgs) {
    const div = document.createElement("div");

    const {
        launch_all_messages,
        launch_mentions,
        launch_recent_conversations,
        all_messages_menu,
        translate,
    } = services;

    const all_messages = all_messages_component.fully_build({
        launch_all_messages,
        all_messages_menu,
        translate,
    });
    div.append(all_messages.li);

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
