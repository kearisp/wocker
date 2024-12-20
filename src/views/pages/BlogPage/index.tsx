import React from "react";
import {Routes, Route} from "react-router-dom";
import {useLocation} from "react-router";
import {Container} from "@mui/material";

import {MarkdownScreen} from "../../blocks";


const BlogPage: React.FC = () => {
    const {pathname} = useLocation();

    return (
        <Container>
            <Routes>
                <Route index element={<MarkdownScreen path={"blog/index"} />}></Route>
                <Route path="*" element={<MarkdownScreen path={pathname} />}></Route>
            </Routes>
        </Container>
    );
};


export default BlogPage;
