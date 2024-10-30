import * as Path from "path-browserify";

import {MenuItem} from "./types";


export const PUBLIC_PATH = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL, window.location.href).pathname : "/";
export const DOCS_URL = process.env.REACT_APP_DOCS_URL || Path.join(PUBLIC_PATH, "/docs");

export const ROUTES = {
    home: "/"
};

export const MENU: MenuItem[] = [
    {
        label: "menu.get-started",
        to: "/get-started",
        children: [
            {
                label: "menu.overview",
                to: "/get-started/overview"
            },
            {
                label: "menu.installation",
                to: "/get-started/installation"
            }
        ]
    },
    {
        label: "menu.projects",
        to: "/project",
        children: [
            {
                label: "menu.initialization",
                to: "/project/init"
            },
            {
                label: "menu.project-management",
                to: "/project/management"
            },
            {
                label: "menu.build-args",
                to: "/project/build-args"
            },
            {
                label: "menu.env",
                to: "/project/env"
            },
            {
                label: "menu.domains",
                to: "/project/domains"
            },
            {
                label: "menu.ssl",
                to: "/project/ssl"
            }
        ]
    },
    {
        label: "menu.presets",
        to: "/presets",
        children: [
            {
                label: "menu.preset-php-apache",
                to: "/presets/php-apache"
            },
            // {
            //     label: "menu.preset-custom",
            //     to: "/presets/custom"
            // }
        ]
    },
    {
        label: "menu.plugins",
        to: "/plugins",
        children: [
            {
                label: "menu.proxy",
                to: "/plugins/proxy"
            },
            {
                label: "menu.cron",
                to: "/plugins/cron"
            },
            {
                label: "menu.mariadb",
                to: "/plugins/mariadb"
            },
            {
                label: "menu.rproxy",
                new: true,
                to: "/plugins/rproxy"
            },
            {
                label: "menu.serveo",
                deprecated: true,
                to: "/plugins/serveo"
            },
            {
                label: "menu.ngrok",
                deprecated: true,
                to: "/plugins/ngrok"
            },
            {
                label: "menu.redis",
                to: "/plugins/redis"
            },
            {
                label: "menu.pgsql",
                to: "/plugins/pgsql"
            },
            {
                label: "menu.maildev",
                new: true,
                to: "/plugins/maildev"
            },
            {
                label: "menu.storage",
                new: true,
                to: "/plugins/storage"
            },
            {
                label: "menu.custom-plugin",
                to: "/plugins/custom"
            }
        ]
    }
];
