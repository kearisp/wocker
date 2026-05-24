import React, {PropsWithChildren} from "react";


type UlProps = PropsWithChildren;

export const Ul: React.FC<UlProps> = (props) => {
    const {
        children
    } = props;

    return (
        <ul className="list-disc list-outside pl-6 my-4 space-y-2">
            {children}
        </ul>
    );
};
