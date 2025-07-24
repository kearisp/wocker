import React, {useMemo, ComponentProps} from "react";
import {UNSAFE_NavigationContext} from "react-router";
import * as Path from "path-browserify";


type Props = ComponentProps<"source">

export const Source: React.FC<Props> = (props) => {
    const {
        src,
        ...rest
    } = props;

    const {basename} = React.useContext(UNSAFE_NavigationContext);

    const url = new URL(basename, window.location.href);

    const href = useMemo(() => {
        if(!src || !basename || src.startsWith("http") || src.startsWith("//")) {
            return src;
        }

        const url = new URL(basename, window.location.href);

        url.pathname = Path.join(url.pathname, src);

        return url.toString();
    }, [basename, src]);

    return (
        <source
          {...rest}
          src={href} />
    );
};
