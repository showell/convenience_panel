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

            return {
                elem,
            };
        }

        function build_main_link(li) {
            const elem = document.createElement("a");
            elem.href = "#all_messages";
            elem.innerText = "All messages";

            li.elem.append(elem);
    
            return {
                elem,
            };
        }

        const li = build_li();
        const main_link = build_main_link(li);

        demo.append(li.elem);

        return {
            li,
            main_link,
        };
    }

    function wire_up_handlers(all_messages) {
        all_messages.main_link.elem.addEventListener("click", () => {
            console.log("click to all_messages view");
        });
    }

    function style(all_messages) {
        const {style_a, setStyles} = window.style_helpers;

        setStyles(all_messages.li.elem, {
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "1px",
            paddingBottom: "1px",
        });

        style_a(all_messages.main_link.elem);
        
        setStyles(all_messages.main_link.elem, {
            marginTop: "1px",
            display: "block",
            color: "rgb(51, 51, 51)",
        }); 

    }
}

