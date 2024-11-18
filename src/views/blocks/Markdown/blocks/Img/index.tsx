import React, {useMemo} from "react";
import Path from "path-browserify";

import {PUBLIC_PATH} from "../../../../../env";


type Props = {
    className?: string;
    title?: string;
    alt?: string;
    src: string;
};

export const Img: React.FC<Props> = (props) => {
    const {
        className,
        title,
        alt,
        src
    } = props;

    const currentSrc = useMemo(() => {
        const url = new URL(src, location.href);

        if(url.hostname !== location.hostname) {
            return src;
        }

        return Path.join(PUBLIC_PATH, src);
    }, [src]);

    return (
        <img
          style={{
            maxWidth: "100%"
          }}
          className={className}
          title={title}
          alt={alt}
          src={currentSrc} />
    );
};
