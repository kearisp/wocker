import React from "react";
import Link from "@mui/material/Link";
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
                        <Link
                          variant="body2"
                          color="primary.light"
                          href={`#${id}`}>
                            {title}
                        </Link>

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
