import React, {useContext, useMemo, useEffect, CSSProperties} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco, idea, darcula} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import {useTheme} from "src/hooks/useTheme";
import {CodeBlockContext} from "../CodeBlock";
import {PreConsumer, PreContext} from "../Pre";


type Props = {
    className?: string;
    title?: string;
    children?: string;
};

export const Code: React.FC<Props> = (props) => {
    const {
        className,
        title,
        children = ""
    } = props;

    const {theme} = useTheme();
    const {register} = useContext(CodeBlockContext);

    const lang = useMemo(() => {
        const [, lang = "text"] = /lang-(.*)/.exec(className || "") || [];

        return lang;
    }, [className]);

    const {hasPre} = useContext(PreContext);

    const langProps = useMemo(() => {
        if(hasPre && ["typescript"].includes(lang)) {
            return {
                showLineNumbers: true,
                startingLineNumber: 1
            };
        }

        return {};
    }, [hasPre, lang]);

    const style = useMemo(() => {
        return theme === "dark" ? darcula : {
            ...idea,
            hljs: docco.hljs
        };
    }, [theme]);

    const customStyle = useMemo((): CSSProperties => {
        const baseStyle: CSSProperties = {
            padding: hasPre ? "1rem" : "0.1em 0.3em",
            borderRadius: "0.4rem",
            fontSize: hasPre ? "0.875rem" : "0.9em",
            lineHeight: "1.25rem",
            margin: hasPre ? undefined : "0",
            display: hasPre ? "block" : "inline-block",
            verticalAlign: hasPre ? "baseline" : "middle"
        };

        if(["text", "shell"].includes(lang)) {
            baseStyle.lineHeight = "1.15";
        }

        return baseStyle;
    }, [lang]);

    useEffect(() => {
        if(title) {
            register(title);
        }
    }, [title]); // eslint-disable-line

    return (
        <SyntaxHighlighter
          {...langProps}
          PreTag={PreConsumer}
          style={style}
          customStyle={customStyle}
          language={lang}>
            {children}
        </SyntaxHighlighter>
    );
};
