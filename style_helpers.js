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

    return {
        setStyles,
        style_a,
    }

})();
