import React, {useState, useEffect} from "react";
import * as Path from "path-browserify";
import MarkdownJSX, {compiler} from "markdown-to-jsx";

import {Markdown} from "../../../../blocks";
import {MENU, PUBLIC_PATH} from "../../../../../env";
import {MainMenu} from "../../../DashboardLayout/blocks/MainMenu";


export const Sidebar: React.FC = () => {
    const [text, setText] = useState<string>();

    useEffect(() => {
        (async () => {
            const url = new URL(PUBLIC_PATH, window.location.href);

            url.pathname = Path.join(url.pathname, "blocks/menu.md");

            const res = await fetch(url.toString());

            if(res.status !== 200) {
                return;
            }

            // console.log(url);

            setText(await res.text());
        })();
    }, []);

    return (
        <React.Fragment>
            {/*<MarkdownJSX>
                {text || ""}
            </MarkdownJSX>*/}

            <MainMenu items={MENU} />
        </React.Fragment>
    );
};
