import React, {useMemo, PropsWithChildren} from "react";
import {
    CssBaseline,
    StyledEngineProvider,
    Experimental_CssVarsProvider as CssVarsProvider,
    extendTheme,
    useMediaQuery
} from "@mui/material";
import {generateTheme} from "./generateTheme";


type Props = PropsWithChildren;

export const ThemeProvider: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const eTheme = useMemo(() => {
        return extendTheme({
            cssVarPrefix: "wocker",
            colorSchemeSelector: "class",
            colorSchemes: {
                light: generateTheme("light"),
                dark: generateTheme("dark")
            }
        });
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <CssVarsProvider
              modeStorageKey="mode"
              colorSchemeStorageKey="color-scheme"
              attribute="data-color-scheme"
              theme={eTheme}
              defaultMode={prefersDarkMode ? "dark" : "light"}>
                <CssBaseline />

                {children}
            </CssVarsProvider>
        </StyledEngineProvider>
    );
};
