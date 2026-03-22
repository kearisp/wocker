import React from "react";
import {createRoot} from "react-dom/client";
import {App} from "./views/App";
import "./i18n";
import "./index.scss";


createRoot(document.body)
    .render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
