import React, {useCallback} from "react";
import {useTheme} from "src/hooks/useTheme";
import {Switch} from "src/views/blocks/Switch";


export const ThemeToggle: React.FC = () => {
    const {isLight, setTheme} = useTheme();

    const handleChange = useCallback((active: boolean) => {
        if(active) {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }
    }, [setTheme]);

    return (
        <Switch
          checked={isLight}
          onCheckedChange={handleChange} />
    );
};
