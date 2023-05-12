interface IconDesc {
    icon_name: string,
}

export function build_top_left_panel_icon({ icon_name }: IconDesc) { const span = document.createElement("span");

    const icon = document.createElement("i");
    console.log("foo");

    icon.classList.add("fa");
    icon.classList.add(icon_name);
    icon.setAttribute("aria-hidden", "true");

    icon.classList.add("style-panel-decorative-icon");

    span.append(icon);

    return span;
}

export function build_vdot_icon() {
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
