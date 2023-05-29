function tippy_enable({ elem, template }) {
    function content() {
        return template;
    }

    tippy(elem, { content, delay: 300 });
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

export function tippy_enable_panel(panel) {
    tippy_enable_all_messages(
        panel.widgets.all_messages.widgets.main_link.elem
    );
    tippy_enable_drafts(panel.widgets.drafts.widgets.main_link.elem);
    tippy_enable_recent_conversations(
        panel.widgets.recent_conversations.widgets.main_link.elem
    );
}
