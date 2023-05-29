import * as all_messages_component from "./all_messages_component.js";
import * as drafts_component from "./drafts_component.js";
import * as mentions_component from "./mentions_component.js";
import * as recent_conversations_component from "./recent_conversations_component.js";
import * as starred_messages_component from "./starred_messages_component.js";
export function fully_build({ services }) {
    const div = document.createElement("div");
    const { all_messages_menu, drafts_menu, launch_all_messages, launch_drafts, launch_mentions, launch_recent_conversations, launch_starred_messages, starred_messages_menu, translate, } = services;
    const all_messages = all_messages_component.fully_build({
        all_messages_menu,
        launch_all_messages,
        translate,
    });
    const drafts = drafts_component.fully_build({
        drafts_menu,
        launch_drafts,
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
    div.append(all_messages.li, recent_conversations.li, mentions.li, starred_messages.li, drafts.li);
    function repopulate_text() {
        all_messages.repopulate_text();
        recent_conversations.repopulate_text();
        mentions.repopulate_text();
        starred_messages.repopulate_text();
        drafts.repopulate_text();
    }
    function update_drafts_count(count) {
        drafts.update_count(count);
    }
    function update_starred_count(count) {
        starred_messages.update_count(count);
    }
    function update_unread_count(counts) {
        all_messages.update_unread_count(counts.all_messages);
        mentions.update_unread_count(counts.mentions);
    }
    function update_starred_count_setting(should_show_counts) {
        starred_messages.update_for_count_setting(should_show_counts);
    }
    const widgets = {
        all_messages,
        drafts,
        mentions,
        recent_conversations,
        starred_messages,
    };
    return {
        elem: div,
        repopulate_text,
        update_drafts_count,
        update_starred_count,
        update_unread_count,
        update_starred_count_setting,
        widgets,
    };
}
//# sourceMappingURL=convenience_panel.js.map