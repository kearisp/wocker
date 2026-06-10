import React, {useCallback, PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {LucideBell, ChevronUp, ChevronDown} from "lucide-react";
import {CannyProvider, CannyChangelog} from "react-canny";
import {Dropdown} from "src/views/blocks";
import {Button} from "src/views/blocks/Button";
import {LocaleType} from "src/types";
import {HEADER_MENU, CANNY_APP_ID} from "src/env";
import {Header, ThemeToggle} from "./blocks";


type Props = PropsWithChildren;

export const DashboardLayout: React.FC<Props> = (props) => {
    const {
        children
    } = props;

    const [t, i18n] = useTranslation();

    const handleChangeLanguage = useCallback(async (locale: LocaleType) => {
        await i18n.changeLanguage(locale);

        localStorage.setItem("lang", locale);
    }, [i18n]);

    return (
        <CannyProvider appId={CANNY_APP_ID} subdomain="kearisp">
            <Header>
                {HEADER_MENU.map((menuItem, index: number) => {
                    return (
                        <Button
                          key={index}
                          as={Link}
                          className="uppercase"
                          variant="secondary"
                          to={menuItem.to}>
                            {t(menuItem.label)}
                        </Button>
                    );
                })}

                <ThemeToggle />

                <Dropdown>
                    <Dropdown.Trigger asChild>
                        <Button
                          className="pr-2 group"
                          variant="outline">
                            {t(LocaleType.label(i18n.language as LocaleType))}

                            <ChevronUp className="group-data-[state=open]:block group-data-[state=closed]:hidden size-4" />
                            <ChevronDown className="group-data-[state=closed]:block group-data-[state=open]:hidden size-4" />
                        </Button>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        {LocaleType.values().map((locale) => {
                            return (
                                <Dropdown.Item
                                  key={locale}
                                  onClick={() => handleChangeLanguage(locale)}>
                                    {t(LocaleType.label(locale))}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Content>
                </Dropdown>

                <CannyChangelog
                  component={Button}
                  className="rounded-full"
                  variant="outline"
                  iconOnly
                  align="right"
                  labelIDs={[
                    "68b09319a3f8e8017063a1d4"
                  ]}
                  position="bottom">
                    <LucideBell />
                </CannyChangelog>
            </Header>

            <main className="pt-[64px] h-full transition-all bg-background">
                {children}
            </main>
        </CannyProvider>
    );
};
