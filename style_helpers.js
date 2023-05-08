window.style_helpers = (function () {
    function setStyles(elem, styles) {
        const info = [];
        const label = elem.id
            ? `#${elem.id}`
            : elem.className
            ? `.${elem.className}`
            : elem.tagName;

        info.push(`\nSetting styles for ${label}\n`);

        for (const [f, v] of Object.entries(styles)) {
            info.push(`  ${f}: ${v};`);
            elem.style[f] = v;
        }

        // console.trace(info.join("\n"));
        return elem;
    }

    function style_a(a) {
        setStyles(a, {
            cursor: "pointer",
            textDecoration: "none",
        });
    }

    function style_main_link(a) {
        style_a(a);

        setStyles(a, {
            marginTop: "1px",
            display: "block",
        });
    }

    function colorize_main_link(a) {
        setStyles(a, {
            color: "rgb(51, 51, 51)",
        });
    }

    function style_list_item(li) {
        setStyles(li, {
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "1px",
            paddingBottom: "1px",
        });
    }

    return {
        setStyles,
        colorize_main_link,
        style_main_link,
        style_list_item,
    };
})();
