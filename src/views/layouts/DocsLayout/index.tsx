import React, {PropsWithChildren} from "react";
import {Box} from "@mui/material";

import {Sidebar} from "./blocks";


type Props = PropsWithChildren<{}>;

export const DocsLayout: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    return (
        <Box display="flex">
            <Box sx={{width: 220, flexBasis: 220, minWidth: 220}}>
                <Sidebar />
            </Box>

            <Box flex={1}>
                {children}
            </Box>
        </Box>
    );
};
