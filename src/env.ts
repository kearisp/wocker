import * as Path from "path-browserify";

import {MenuItem} from "./types";


export const PUBLIC_PATH = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL, window.location.href).pathname : "/";
export const DOCS_URL = process.env.REACT_APP_DOCS_URL || Path.join(PUBLIC_PATH, "/docs");

export const ROUTES = {
    home: "/",
    overview: "/get-started/overview",
    installation: "/get-started/installation",
    usage: "/get-started/usage",
    projectInit: "/project/init",
    projectStart: "/project/start",
    projectManagement: "/project/management",
    projectDomains: "/project/domains",
    configEnv: "/project/env",
    buildArgs: "/project/build-args",
    presetPhpApache: "/presets/php-apache",
    pluginsCustom: "/plugins/custom",
    pluginsProxy: "/plugins/proxy",
    pluginsCron: "/plugins/cron",
    pluginsMariadb: "/plugins/mariadb",
    pluginsServeo: "/plugins/serveo",
    pluginsNgrok: "/plugins/ngrok",
    pluginsRedis: "/plugins/redis",
    pluginsPgsql: "/plugins/pgsql",
    pluginsRProxy: "/plugins/rproxy",
    pluginsMailDev: "/plugins/maildev",
    pluginsDns: "/plugins/dns"
};

export const MENU: MenuItem[] = [
    {
        label: "menu.get-started",
        to: "/get-started",
        children: [
            {
                label: "menu.overview",
                to: ROUTES.overview
            },
            {
                label: "menu.installation",
                to: ROUTES.installation
            }
        ]
    },
    {
        label: "menu.projects",
        to: "/project",
        children: [
            {
                label: "menu.initialization",
                to: ROUTES.projectInit
            },
            {
                label: "menu.project-management",
                to: ROUTES.projectManagement
            },
            {
                label: "menu.build-args",
                to: ROUTES.buildArgs
            },
            {
                label: "menu.env",
                to: ROUTES.configEnv
            },
            {
                label: "menu.domains",
                to: ROUTES.projectDomains
            }
        ]
    },
    {
        label: "menu.presets",
        to: "/presets",
        children: [
            {
                label: "menu.preset-php-apache",
                to: ROUTES.presetPhpApache
            }
        ]
    },
    {
        label: "menu.plugins",
        to: "/plugins",
        children: [
            {
                label: "menu.proxy",
                to: ROUTES.pluginsProxy
            },
            // {
            //     label: "menu.dns",
            //     to: ROUTES.pluginsDns
            // },
            {
                label: "menu.cron",
                to: ROUTES.pluginsCron
            },
            {
                label: "menu.mariadb",
                to: ROUTES.pluginsMariadb
            },
            {
                label: "menu.rproxy",
                new: true,
                to: ROUTES.pluginsRProxy
            },
            {
                label: "menu.serveo",
                deprecated: true,
                to: ROUTES.pluginsServeo
            },
            {
                label: "menu.ngrok",
                deprecated: true,
                to: ROUTES.pluginsNgrok
            },
            {
                label: "menu.redis",
                to: ROUTES.pluginsRedis
            },
            {
                label: "menu.pgsql",
                to: ROUTES.pluginsPgsql
            },
            {
                label: "menu.maildev",
                new: true,
                to: ROUTES.pluginsMailDev
            },
            {
                label: "menu.custom-plugin",
                to: ROUTES.pluginsCustom
            }
        ]
    }
];
