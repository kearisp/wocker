import React from "react";
import {useLocation, Routes, Route, Navigate} from "react-router";

import {MarkdownScreen} from "../../blocks";


const MarkdownPage: React.FC = () => {
    const {pathname} = useLocation();

    return (
        <Routes>
            <Route index element={<Navigate replace to="/docs/installation" />}></Route>
            <Route path="*" element={<MarkdownScreen path={pathname} />}></Route>
        </Routes>
    );
};

export default MarkdownPage;
