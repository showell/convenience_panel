zulip.icon_helpers = (function () {
    const { setStyles } = zulip.style_helpers;

    function build_top_left_panel_icon({ icon_name }) {
        const span = document.createElement("span");

        const icon = document.createElement("i");

        icon.classList.add("fa");
        icon.classList.add(icon_name);
        icon.setAttribute("aria-hidden", "true");

        span.append(icon);

        setStyles(span, {
            display: "inline-block",
            minWidth: "19px",
            textAlign: "center",
        });

        setStyles(icon, {
            paddingRight: "3px",
            opacity: ".7",
        });

        return span;
    }

    function build_vdot_icon() {
        const span = document.createElement("span");
        const svg = `
            <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192 512"
            >
                <path
                    fill="currentColor"
                    d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                >
                </path>
            </svg>
        `;

        span.innerHTML = svg;
        span.classList.add("style-panel-popup-menu-icon");

        return span;
    }

    return {
        build_top_left_panel_icon,
        build_vdot_icon,
    };
})();
