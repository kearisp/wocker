import React, {PropsWithChildren} from "react";


type OlProps = PropsWithChildren;

export const Ol: React.FC<OlProps> = (props) => {
    const {
        children
    } = props;

    return (
        <ol className="list-decimal list-outside pl-6 my-4 space-y-2">
            {children}
        </ol>
    );
};
