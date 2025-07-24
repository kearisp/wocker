import React, {Suspense} from "react";
import {useLocation, BrowserRouter, Routes, Route, Outlet, Navigate} from "react-router-dom";
import {PUBLIC_PATH, ROUTES} from "../env";
import {LoadingScreen} from "./blocks";
import {HomePage, BlogPage, DocsPage} from "./pages";
import {DashboardLayout, DocsLayout} from "./layouts";
import {ThemeProvider} from "./providers";
import "./App.scss";


const escape = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const DocsNavigate = () => {
    const {pathname} = useLocation();
    let path = pathname;

    if(PUBLIC_PATH !== "/") {
        path = path.replace(new RegExp(`^${escape(PUBLIC_PATH)}`), "");
    }

    return (
        <Navigate replace to={`${ROUTES.docs}${path}`} />
    );
};

export const App: React.FC = () => {
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
                            <Route path={`${ROUTES.blog}/*`} element={<BlogPage />} />
                            <Route
                              element={
                                <DocsLayout>
                                    <Outlet />
                                </DocsLayout>
                              }>
                                <Route path={`${ROUTES.docs}/*`} element={<DocsPage />} />
                                <Route path={`${ROUTES.docs}/presets/php-apache`} element={<Navigate to={`${ROUTES.docs}/presets/php`} />} />
                            </Route>
                            <Route path="*" element={<DocsNavigate />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    );
};
