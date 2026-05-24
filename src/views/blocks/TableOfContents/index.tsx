import React from "react";
import styles from "./index.module.scss";


type Heading = {
    id: string;
    title: string;
    children?: Heading[];
};

type Props = {
    headings: Heading[];
    level?: number;
};

export const TableOfContents: React.FC<Props> = (props) => {
    const {
        headings,
        level = 0
    } = props;

    return (
        <div>
            {headings.map((heading) => {
                const {
                    id,
                    title,
                    children
                } = heading;

                return (
                    <div key={id} className={styles.item} data-level={level}>
                        <a
                          className="underline text-primary"
                          href={`#${id}`}>
                            {title}
                        </a>

                        {children && (
                            <TableOfContents
                              level={level + 1}
                              headings={children} />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
