import React from "react";
import {useLocation} from "react-router";

import {MarkdownScreen} from "../../blocks";


const MarkdownPage: React.FC = () => {
    const {pathname} = useLocation();

    return (
        <MarkdownScreen path={pathname} />
    );
};

export default MarkdownPage;
