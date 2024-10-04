import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import {PUBLIC_PATH, ROUTES} from "./env";
import {LoadingScreen} from "./blocks";
import {HomePage, MarkdownPage} from "./pages";
import {DashboardLayout} from "./layouts";
import {ThemeProvider} from "./providers";
import "./App.scss";

import "./i18n";


const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Suspense fallback={<LoadingScreen />}>
                <BrowserRouter basename={PUBLIC_PATH}>
                    <Routes>
                        <Route
                          element={
                            <DashboardLayout>
                                <Outlet />
                            </DashboardLayout>
                          }>
                            <Route path={ROUTES.home} element={<HomePage />} />
                            <Route path="*" element={<MarkdownPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    );
};


export {App};
