import React, {Suspense} from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import {PUBLIC_PATH, ROUTES} from "../env";
import {LoadingScreen} from "./blocks";
import {HomePage, DocksPage} from "./pages";
import {DashboardLayout} from "./layouts";
import {ThemeProvider} from "./providers";
import "./App.scss";


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
                            <Route path="*" element={<DocksPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    );
};


export {App};
