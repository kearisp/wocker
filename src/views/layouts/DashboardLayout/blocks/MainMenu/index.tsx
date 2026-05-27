import React, {useState, useCallback} from "react";
import {Link} from "react-router-dom";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {ChevronRight} from "lucide-react";
import {useMatchPath} from "src/hooks";
import {MenuItem} from "src/types";


type MainMenuProps = {
    isChild?: boolean;
    items: MenuItem[];
};

export const MainMenu: React.FC<MainMenuProps> = (props) => {
    const {
        isChild,
        items
    } = props;

    const [t] = useTranslation();
    const matchPath = useMatchPath();
    const [openIndexes, setOpenIndexes] = useState<number[]>(() => {
        const openIndexes: number[] = [];

        items.forEach((menuItem, index) => {
            let isActive = matchPath(menuItem.to);

            if(isActive) {
                openIndexes.push(index);
            }
        });

        return openIndexes;
    });

    const handleToggle = useCallback((index: number) => {
        setOpenIndexes((openIndexes) => {
            if(openIndexes.includes(index)) {
                return openIndexes.filter((openIndex: number) => {
                    return openIndex !== index;
                });
            }

            return [
                ...openIndexes,
                index
            ];
        });
    }, []);

    return (
        <div className={clsx("flex flex-col", isChild && "ml-4 border-l border-border")}>
            {items.map((item, index) => {
                const {
                    label = "",
                    children,
                    new: isNew,
                    deprecated: isDeprecated,
                    to
                } = item;

                const isOpen = openIndexes.includes(index);
                const isActive = matchPath(to);

                return (
                    <React.Fragment key={index}>
                        <Link
                          className={clsx(
                            "flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-muted/50 rounded-md mx-1",
                            isActive ? "text-primary font-semibold bg-primary/5" : "text-foreground"
                          )}
                          to={to}
                          onClick={(e) => {
                            if(children && children.length > 0) {
                                e.preventDefault();
                                handleToggle(index);
                            }
                          }}>
                            <span className="truncate">
                                {t(label)}
                            </span>

                            <div className="flex items-center gap-2 shrink-0 ml-2">
                                {isNew && (
                                    <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-green-500 text-white">
                                        new
                                    </span>
                                )}

                                {isDeprecated && (
                                    <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-amber-500 text-white">
                                        deprecated
                                    </span>
                                )}

                                {children && children.length > 0 && (
                                    <ChevronRight
                                      className={clsx(
                                        "w-4 h-4 transition-transform duration-300 text-primary",
                                        isOpen && "rotate-90"
                                      )} />
                                )}
                            </div>
                        </Link>

                        {children && children.length > 0 && isOpen && (
                            <MainMenu
                              isChild
                              items={children} />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
