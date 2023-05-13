import * as all_messages_component from "./all_messages_component.js";
import * as drafts_component from "./drafts_component.js";
import * as mentions_component from "./mentions_component.js";
import * as recent_conversations_component from "./recent_conversations_component.js";
import * as starred_messages_component from "./starred_messages_component.js";

type Handlers = {
    readonly all_messages_menu: () => void;
    readonly drafts_menu: () => void;
    readonly launch_all_messages: () => void;
    readonly launch_drafts: () => void;
    readonly launch_mentions: () => void;
    readonly launch_recent_conversations: () => void;
    readonly launch_starred_messages: () => void;
    readonly starred_messages_menu: () => void;
    readonly translate: (s: string) => string;
}

interface PanelBuildArgs {
    services: Handlers,
}

type PanelWidgets = {
    all_messages: all_messages_component.AllMessagesWidget,
    drafts: drafts_component.DraftsWidget,
    mentions: mentions_component.MentionsWidget,
}

type ConveniencePanel = {
    elem: HTMLDivElement,
    repopulate_text: () => void,
    update_unread_count: (count: number) => void,
    widgets: PanelWidgets,
}

export function fully_build({ services }: PanelBuildArgs): ConveniencePanel {
    const div = document.createElement("div");

    const {
        all_messages_menu,
        drafts_menu,
        launch_all_messages,
        launch_drafts,
        launch_mentions,
        launch_recent_conversations,
        launch_starred_messages,
        starred_messages_menu,
        translate,
    } = services;

    const all_messages = all_messages_component.fully_build({
        launch_all_messages,
        all_messages_menu,
        translate,
    });

    const recent_conversations = recent_conversations_component.fully_build({
        launch_recent_conversations,
        translate,
    });

    const mentions = mentions_component.fully_build({
        launch_mentions,
        translate,
    });

    const starred_messages = starred_messages_component.fully_build({
        launch_starred_messages,
        starred_messages_menu,
        translate,
    });

    const drafts = drafts_component.fully_build({
        launch_drafts,
        drafts_menu,
        translate,
    });

    div.append(all_messages.li, recent_conversations.li, mentions.li, starred_messages.li, drafts.li);

    function repopulate_text() {
        all_messages.repopulate_text();
        recent_conversations.repopulate_text();
        mentions.repopulate_text();
        starred_messages.repopulate_text();
        drafts.repopulate_text();
    }

    function update_unread_count(count: number): void {
        all_messages.update_unread_count(count);
    }

    const widgets = {
        all_messages,
        drafts,
        mentions,
    };

    return {
        elem: div,
        repopulate_text,
        update_unread_count,
        widgets,
    };
}
