import {useMemo, useSyncExternalStore} from "react";


type Theme = "light" | "dark";

const getTheme = (): Theme => {
    if(typeof window === "undefined") {
        return "light";
    }

    const savedTheme = localStorage.getItem("theme") as Theme;

    if(savedTheme) {
        return savedTheme;
    }

    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }

    return "light";
};

const updateHtmlClass = (theme: Theme) => {
    if(typeof window === "undefined") {
        return;
    }

    const root = window.document.documentElement;
    if(theme === "dark") {
        root.classList.add("dark");
    }
    else {
        root.classList.remove("dark");
    }
};

const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback);

    return () => window.removeEventListener("storage", callback);
};

if(typeof window !== "undefined") {
    updateHtmlClass(getTheme());
}

export const useTheme = () => {
    const theme = useSyncExternalStore(
        subscribe,
        () => getTheme(),
        () => "light" as Theme
    );

    const setTheme = (newTheme: Theme) => {
        localStorage.setItem("theme", newTheme);
        updateHtmlClass(newTheme);
        window.dispatchEvent(new Event("storage"));
    };

    return useMemo(() => {
        return {
            isDark: theme === "dark",
            isLight: theme === "light",
            theme,
            setTheme
        };
    }, [theme]);
};
