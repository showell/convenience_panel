function style(elem, f, v) {
    elem.style[f] = v;
}

{
    const demo = document.querySelector("#demo");
    const all_messages = build_all_messages(demo);
    wire_up_handlers(all_messages);
    style(all_messages);

    function build_all_messages(demo) {
        function build_li() {
            const elem = document.createElement("li");
            return elem;
        }

        function build_main_link(li) {
            const elem = document.createElement("a");
            elem.href = "#all_messages";
            elem.innerText = "All messages";

            li.append(elem);
    
            return elem;
        }

        const li = build_li();
        const main_link = build_main_link(li);

        demo.append(li);

        return { main_link };
    }

    function wire_up_handlers(all_messages) {
        all_messages.main_link.addEventListener("click", () => {
            console.log("click to all_messages view");
        });
    }

    function style(all_messages) {
        const {style_a, setStyles} = window.style_helpers;

        style_a(all_messages.main_link);
        
        setStyles(all_messages.main_link, {
            marginTop: "1px",
            display: "block",
        }); 
    }
}

