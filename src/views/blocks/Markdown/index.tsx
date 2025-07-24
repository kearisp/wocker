import React, {useMemo} from "react";
import MarkdownJSX, {compiler} from "markdown-to-jsx";
import {titleToId} from "./utils";
import {options} from "./options";


const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;

type Props = {
    content: string;
};

const Markdown: React.FC<Props> = (props) => {
    const {
        content = ""
    } = props;

    const markdown = useMemo(() => {
        return content.replace(headerRegExp, "");
    }, [content]);

    const wd = useMemo(() => {
        // compiler(content, {
        //
        // })
    }, [content]);

    return (
        <MarkdownJSX
          options={options}>
            {markdown}
        </MarkdownJSX>
    );
};


export {titleToId, Markdown};
