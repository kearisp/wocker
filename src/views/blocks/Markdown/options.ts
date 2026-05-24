import {ComponentProps} from "react";
import Markdown from "markdown-to-jsx";
import {titleToId} from "./utils";
import {A, Blockquote, Code, CodeBlock, H, Img, Li, Ol, P, Pre, Source, Table, Ul} from "./blocks";


export const options: ComponentProps<typeof Markdown>["options"] = {
    slugify: titleToId,
    overrides: {
        h1: {
            component: H,
            props: {
                variant: "h1"
            }
        },
        h2: {
            component: H,
            props: {
                variant: "h2"
            }
        },
        h3: {
            component: H,
            props: {
                variant: "h3"
            }
        },
        h4: {
            component: H,
            props: {
                variant: "h4"
            }
        },
        p: {
            component: P
        },
        blockquote: {
            component: Blockquote
        },
        img: {
            component: Img
        },
        li: {
            component: Li
        },
        ol: {
            component: Ol
        },
        pre: {
            component: Pre
        },
        code: {
            component: Code
        },
        codeblock: {
            component: CodeBlock
        },
        a: {
            component: A
        },
        source: {
            component: Source
        },
        table: {
            component: Table
        },
        ul: {
            component: Ul
        }
    }
};
