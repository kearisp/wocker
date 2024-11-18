import React from "react";
import {Container} from "@mui/material";

import {MarkdownScreen} from "../../blocks";


const HomePage: React.FC = () => {
    return (
        <Container>
            <MarkdownScreen
              path="index.md" />
        </Container>
    );
};


export default HomePage;
