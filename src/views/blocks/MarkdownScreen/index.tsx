import React, {useState, useMemo, useEffect} from "react";
import * as Path from "path-browserify";
import {useTranslation} from "react-i18next";
import {PUBLIC_PATH} from "../../../env";
import {Markdown, titleToId} from "../Markdown";
import {TableOfContents} from "../TableOfContents";
import styles from "./index.module.scss";


type Heading = {
    id: string;
    title: string;
    children?: Heading[];
};

type Props = {
    path: string;
};

export const MarkdownScreen: React.FC<Props> = (props) => {
    const {
        path
    } = props;

    const [text, setText] = useState("");
    const [, i18n] = useTranslation();

    const headings = useMemo(() => {
        const headings: Heading[] = [];
        const lastLevelMap: any = {};

        let isCodeBlock = false;

        let lines = text.split("\n").filter((line: string) => {
            if(/^```.+/.test(line)) {
                isCodeBlock = true;
                return false;
            }

            if(line === "```") {
                isCodeBlock = false;
                return false;
            }

            return !isCodeBlock;
        }).join("\n").match(/#{1,6}\s(.*?)(?=\n)/g) || [];

        lines.forEach((text: string) => {
            const [, levelMark, title] = /(#{1,6})\s(.*)/.exec(text) || [];
            const level = levelMark.length;

            const header: Heading = {
                id: titleToId(title),
                title,
                children: []
            };

            if(lastLevelMap[level - 1]) {
                lastLevelMap[level - 1].children.push(header);
            }
            else {
                headings.push(header);
            }

            lastLevelMap[level] = header;
        });

        if(headings.length === 1) {
            return headings[0].children || [];
        }

        return headings;
    }, [text]);

    useEffect(() => {
        (async () => {
            const url = new URL(PUBLIC_PATH, window.location.href);

            const ext = Path.extname(path) || ".md";
            const dirname = Path.dirname(path);
            const filename = Path.basename(path, ext);

            url.pathname = Path.join(url.pathname, dirname, `${filename}-${i18n.language}${ext}`);

            const res = await fetch(url.toString());

            if(res.status !== 200) {
                return;
            }

            setText(await res.text());
        })();
    }, [path, i18n.language]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Markdown
                  content={text} />
            </div>

            <div className={styles.tocWrapper}>
                <div className={styles.toc}>
                    <TableOfContents
                      headings={headings} />
                </div>
            </div>
        </div>
    );
};
