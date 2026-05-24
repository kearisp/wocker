import React, {PropsWithChildren} from "react";


type LiProps = PropsWithChildren;

export const Li: React.FC<LiProps> = (props) => {
    const {
        children
    } = props;

    return (
        <li className="mb-1 text-primary">
            {children}
        </li>
    );
};