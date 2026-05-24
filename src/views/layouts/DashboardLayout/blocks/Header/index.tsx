import React, {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {asset} from "src/utils";
import {Router} from "src/env";


type HeaderProps = PropsWithChildren<{
    className?: string;
}>;

export const Header: React.FC<HeaderProps> = (props) => {
    const {
        className = "",
        children
    } = props;

    return (
        <header className={`${className} fixed top-0 left-0 right-0 z-30 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center px-4 transition-all`}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <Link className="flex items-center gap-2" to={Router.url("home")}>
                        <img
                          className="h-[32px]"
                          alt="WS"
                          src={asset("favicon-32x32.png")} />

                        <span className="font-bold text-xl text-slate-800 dark:text-white">Wocker</span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {children}
                </div>
            </div>
        </header>
    );
};
