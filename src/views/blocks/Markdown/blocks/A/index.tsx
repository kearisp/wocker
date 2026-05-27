import React, {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {clsx} from "clsx";


type Props = PropsWithChildren<{
    className?: string;
    href: string;
}>;

export const A: React.FC<Props> = (props) => {
    const {
        className = "",
        href,
        children
    } = props;

    const modifications = clsx("text-link hover:text-link-hover visited:text-link-visited hover:underline transition-all", className);

    if(href.startsWith("http")) {
        return (
            <a
              className={modifications}
              target="_blank"
              rel="noreferrer"
              href={href}>
                {children}
            </a>
        );
    }

    return (
        <Link
          className={modifications}
          to={href}>
            {children}
        </Link>
    );
};
