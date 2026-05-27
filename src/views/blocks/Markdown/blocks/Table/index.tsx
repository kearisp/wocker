import React, {PropsWithChildren} from "react";


type TableProps = PropsWithChildren;

export const Table: React.FC<TableProps> = (props) => {
    const {
        children
    } = props;

    return (
        <table className="text-primary mb-2">
            {children}
        </table>
    );
};
