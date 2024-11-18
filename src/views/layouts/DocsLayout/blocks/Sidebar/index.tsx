import React from "react";

import {MENU} from "../../../../../env";
import {MainMenu} from "../../../DashboardLayout/blocks/MainMenu";


export const Sidebar: React.FC = () => {
    return (
        <MainMenu items={MENU} />
    );
};
