window.icon_helpers = (function () {
    const { setStyles } = window.style_helpers;

    function build_icon() {
        const span = document.createElement("psan");

        const icon = document.createElement("i");

        icon.innerText = "*";
        icon.className = "fa";
        icon.setAttribute("aria-hidden", "true");

        span.append(icon);
        const elem = span;


        setStyles(span, {
            display: "inline-block",
            minWidth: "19px",
            textAlign: "center",
        });

        setStyles(icon, {
            paddingRight: "3px",
            opacity: ".7",
        });

        return {
            elem,
        };
    }

    return {
        build_icon,
    };
})();
