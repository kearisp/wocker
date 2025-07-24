import Typography from "@mui/material/Typography";
import {titleToId} from "./utils";
import {A, Blockquote, Code, CodeBlock, H, Img, Pre, Source} from "./blocks";


export const options = {
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
            component: Typography,
            props: {
                sx: {
                    mt: 1,
                    mb: 1
                },
                variant: "body1"
            }
        },
        blockquote: {
            component: Blockquote
        },
        img: {
            component: Img
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
        }
    }
};
