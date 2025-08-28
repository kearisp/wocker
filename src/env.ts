import * as Path from "path-browserify";

import {isNewByDate} from "./utils";
import {MenuItem} from "./types";


export const PUBLIC_PATH = process.env.PUBLIC_URL ? new URL(process.env.PUBLIC_URL, window.location.href).pathname : "/";
export const CANNY_APP_ID = process.env.REACT_APP_CANNY_APP_ID || "";
export const ROUTES = {
    home: "/",
    blog: "/blog",
    docs: "/docs"
};

export const DOCS_URL = process.env.REACT_APP_DOCS_URL || Path.join(PUBLIC_PATH, ROUTES.docs);

export const HEADER_MENU: MenuItem[] = [
    {
        label: "menu.blog",
        to: ROUTES.blog
    },
    {
        label: "menu.docs",
        to: ROUTES.docs
    }
];

export const MENU: MenuItem[] = [
    {
        label: "menu.get-started",
        to: `${ROUTES.docs}/get-started`,
        children: [
            {
                label: "menu.installation",
                to: `${ROUTES.docs}/installation`
            }
        ]
    },
    {
        label: "menu.projects",
        to: `${ROUTES.docs}/project`,
        children: [
            {
                label: "menu.initialization",
                to: `${ROUTES.docs}/project/init`
            },
            {
                label: "menu.project-management",
                to: `${ROUTES.docs}/project/management`
            },
            {
                label: "menu.build-args",
                to: `${ROUTES.docs}/project/build-args`
            },
            {
                label: "menu.env",
                to: `${ROUTES.docs}/project/env`
            },
            {
                label: "menu.domains",
                to: `${ROUTES.docs}/project/domains`
            },
            {
                label: "menu.ssl",
                to: `${ROUTES.docs}/project/ssl`
            }
        ]
    },
    {
        label: "menu.presets",
        to: `${ROUTES.docs}/presets`,
        children: [
            {
                label: "menu.preset-php",
                to: `${ROUTES.docs}/presets/php`
            },
            {
                label: "menu.preset-node",
                to: `${ROUTES.docs}/presets/node`,
                new: isNewByDate("2024-12-15")
            },
            {
                label: "menu.preset-custom",
                to: `${ROUTES.docs}/presets/custom`,
                new: isNewByDate("2024-12-12")
            }
        ]
    },
    {
        label: "menu.plugins",
        to: `${ROUTES.docs}/plugins`,
        children: [
            {
                label: "menu.proxy",
                to: `${ROUTES.docs}/plugins/proxy`
            },
            {
                label: "menu.cron",
                to: `${ROUTES.docs}/plugins/cron`
            },
            {
                label: "menu.mariadb",
                to: `${ROUTES.docs}/plugins/mariadb`
            },
            {
                label: "menu.mongodb",
                to: `${ROUTES.docs}/plugins/mongodb`,
                new: isNewByDate("2024-12-15")
            },
            {
                label: "menu.pgsql",
                to: `${ROUTES.docs}/plugins/pgsql`
            },
            {
                label: "menu.redis",
                to: `${ROUTES.docs}/plugins/redis`
            },
            {
                label: "menu.memcached",
                new: isNewByDate("2025-01-03"),
                to: `${ROUTES.docs}/plugins/memcached`
            },
            {
                label: "menu.maildev",
                to: `${ROUTES.docs}/plugins/maildev`
            },
            {
                label: "menu.storage",
                new: isNewByDate("2024-12-29"),
                to: `${ROUTES.docs}/plugins/storage`
            },
            {
                label: "menu.rproxy",
                new: isNewByDate("2024-11-27"),
                to: `${ROUTES.docs}/plugins/rproxy`
            },
            {
                label: "menu.ngrok",
                deprecated: true,
                to: `${ROUTES.docs}/plugins/ngrok`
            },
            {
                label: "menu.serveo",
                deprecated: true,
                to: `${ROUTES.docs}/plugins/serveo`
            },
            {
                label: "menu.ollama",
                new: isNewByDate("2025-01-10"),
                to: `${ROUTES.docs}/plugins/ollama`
            },
            {
                label: "menu.custom-plugin",
                to: `${ROUTES.docs}/plugins/custom`
            }
        ]
    }
];
