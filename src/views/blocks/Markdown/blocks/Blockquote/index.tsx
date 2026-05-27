import React, {PropsWithChildren} from "react";


type Props = PropsWithChildren;

const Blockquote: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    return (
        <blockquote className="border-l-4 border-primary rounded-sm py-1 pl-4 my-4 italic text-muted-foreground bg-muted/30">
            {children}
        </blockquote>
    );
};


export {Blockquote};
