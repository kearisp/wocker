import React, {PropsWithChildren} from "react";
import {Sidebar} from "./blocks";


type Props = PropsWithChildren<{}>;

export const DocsLayout: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    return (
        <div className="flex gap-4">
            <div className="w-[220px] flex-basis-[220px] min-w-[220px]">
                <Sidebar />
            </div>

            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};
