import React, {PropsWithChildren} from "react";


type Props = PropsWithChildren;

export const P: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    return (
        <p className="my-4 leading-7 text-foreground">
            {children}
        </p>
    );
};
