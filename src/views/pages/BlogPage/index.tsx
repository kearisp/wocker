import React from "react";
import {Routes, Route} from "react-router-dom";
import {useLocation} from "react-router";
import {MarkdownScreen} from "src/views/blocks";


const BlogPage: React.FC = () => {
    const {pathname} = useLocation();

    return (
        <div className="px-6">
            <Routes>
                <Route index element={<MarkdownScreen path={"blog/index"} />}></Route>
                <Route path="*" element={<MarkdownScreen path={pathname} />}></Route>
            </Routes>
        </div>
    );
};


export default BlogPage;
