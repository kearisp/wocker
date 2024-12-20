import React, {useState, useCallback, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
    AppBar,
    Toolbar,
    Grid,
    Button,
    Box,
    Select,
    SelectChangeEvent,
    IconButton,
    MenuItem,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {ROUTES, HEADER_MENU} from "../../../env";
import {asset} from "../../../utils";
import {ThemeToggle} from "./blocks";


type Props = PropsWithChildren;

const DashboardLayout: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const theme = useTheme();
    const [t, i18n] = useTranslation();

    // i18n.language
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [, setOpen] = useState(false);

    const handleToggleMenu = useCallback(() => {
        setOpen((open) => !open);
    }, []);

    const handleChangeLanguage = useCallback(async (e: SelectChangeEvent) => {
        if(!e.target) {
            return;
        }

        await i18n.changeLanguage(e.target.value);

        localStorage.setItem("lang", e.target.value);
    }, [i18n]);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    {isMobile && (
                        <IconButton
                          onClick={handleToggleMenu}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    <img
                      style={{
                        marginRight: 8,
                        height: 32
                      }}
                      alt="WS"
                      src={asset("favicon-32x32.png")} />

                    <Typography
                      sx={{
                        flexGrow: 0,
                        display: {
                            xs: "none",
                            sm: "block"
                        },
                        mr: 2,
                        fontWeight: 700,
                        color: "inherit",
                        textDecoration: "none"
                      }}
                      component={Link}
                      variant="h6"
                      noWrap
                      to={ROUTES.home}>
                        Wocker
                    </Typography>

                    <Grid sx={{flex: 1}} />

                    {HEADER_MENU.map((menuItem, index: number) => {
                        const {
                            label,
                            to
                        } = menuItem;

                        return (
                            <Button
                              key={index}
                              component={Link}
                              variant="text"
                              color="inherit"
                              to={to}>
                                {t(label as any)}
                            </Button>
                        );
                    })}

                    <ThemeToggle />

                    <Select
                      variant="outlined"
                      size="small"
                      value={i18n.language}
                      onChange={handleChangeLanguage}>
                        <MenuItem value="ua">Ukrainian</MenuItem>
                        <MenuItem value="en">English</MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>

            <Box sx={theme.mixins.toolbar} />

            <Box
              sx={{
                "--wocker-header-height": "64px"
              }}
              display="flex">
                <Box flex={1}>
                    {children}
                </Box>
            </Box>
        </>
    );
};


export {DashboardLayout};
