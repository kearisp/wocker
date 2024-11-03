import React from "react";
import {createRoot} from "react-dom/client";

import {App} from "./views/App";
import "./i18n";


createRoot(document.getElementById("root") as HTMLElement)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
