import {isNewByDate} from "./utils";
import {makeRouter} from "./utils/makeRouter";
import {MenuItem} from "./types";


export const VERSION = "1.0.32";

export const PUBLIC_PATH = import.meta.env.PUBLIC_URL ? new URL(import.meta.env.PUBLIC_URL, window.location.href).pathname : "/";

export const CANNY_APP_ID = import.meta.env.REACT_APP_CANNY_APP_ID || "";

export const Router = makeRouter({
    "home": "/",
    "blog": "/blog",
    "docs": "/docs",
    "docs.get-started": "/docs/get-started",
    "docs.installation": "/docs/installation",
    "docs.project": "/docs/project",
    "docs.project.init": "/docs/project/init",
    "docs.project.management": "/docs/project/management",
    "docs.project.build-args": "/docs/project/build-args",
    "docs.project.env": "/docs/project/env",
    "docs.project.domains": "/docs/project/domains",
    "docs.project.ssl": "/docs/project/ssl",
    "docs.project.logs": "/docs/project/logs",
    "docs.project.http-auth": "/docs/project/http-auth",
    "docs.preset": "/docs/presets",
    "docs.preset.php": "/docs/presets/php",
    "docs.preset.node": "/docs/presets/node",
    "docs.preset.custom": "/docs/presets/custom",
    "docs.plugin": "/docs/plugins",
    "docs.plugin.proxy": "/docs/plugins/proxy",
    "docs.plugin.cron": "/docs/plugins/cron",
    "docs.plugin.mariadb": "/docs/plugins/mariadb",
    "docs.plugin.mongodb": "/docs/plugins/mongodb",
    "docs.plugin.pgsql": "/docs/plugins/pgsql",
    "docs.plugin.redis": "/docs/plugins/redis",
    "docs.plugin.memcached": "/docs/plugins/memcached",
    "docs.plugin.maildev": "/docs/plugins/maildev",
    "docs.plugin.storage": "/docs/plugins/storage",
    "docs.plugin.rproxy": "/docs/plugins/rproxy",
    "docs.plugin.ollama": "/docs/plugins/ollama",
    "docs.plugin.custom": "/docs/plugins/custom"
} as const);

export const DOCS_URL = import.meta.env.REACT_APP_DOCS_URL || PUBLIC_PATH;

export const HEADER_MENU: MenuItem[] = [
    {
        label: "menu.blog",
        to: Router.url("blog")
    },
    {
        label: "menu.docs",
        to: Router.url("docs")
    }
];

export const MENU: MenuItem[] = [
    {
        label: "menu.get-started",
        to: Router.url("docs.installation"),
        children: [
            {
                label: "menu.installation",
                to: Router.url("docs.installation")
            }
        ]
    },
    {
        label: "menu.projects",
        to: Router.url("docs.project"),
        children: [
            {
                label: "menu.initialization",
                to: Router.url("docs.project.init")
            },
            {
                label: "menu.project-management",
                to: Router.url("docs.project.management")
            },
            {
                label: "menu.build-args",
                to: Router.url("docs.project.build-args")
            },
            {
                label: "menu.env",
                to: Router.url("docs.project.env")
            },
            {
                label: "menu.domains",
                to: Router.url("docs.project.domains")
            },
            {
                label: "menu.ssl",
                to: Router.url("docs.project.ssl")
            },
            {
                label: "menu.http-auth",
                to: Router.url("docs.project.http-auth")
            },
            {
                label: "menu.logs",
                to: Router.url("docs.project.logs")
            }
        ]
    },
    {
        label: "menu.presets",
        to: Router.url("docs.preset"),
        children: [
            {
                label: "menu.preset-php",
                to: Router.url("docs.preset.php")
            },
            {
                label: "menu.preset-node",
                to: Router.url("docs.preset.node"),
                new: isNewByDate("2024-12-15")
            },
            {
                label: "menu.preset-custom",
                to: Router.url("docs.preset.custom"),
                new: isNewByDate("2024-12-12")
            }
        ]
    },
    {
        label: "menu.plugins",
        to: Router.url("docs.plugin"),
        children: [
            {
                label: "menu.proxy",
                to: Router.url("docs.plugin.proxy")
            },
            {
                label: "menu.cron",
                to: Router.url("docs.plugin.cron")
            },
            {
                label: "menu.mariadb",
                to: Router.url("docs.plugin.mariadb")
            },
            {
                label: "menu.mongodb",
                to: Router.url("docs.plugin.mongodb"),
                new: isNewByDate("2024-12-15")
            },
            {
                label: "menu.pgsql",
                to: Router.url("docs.plugin.pgsql")
            },
            {
                label: "menu.redis",
                to: Router.url("docs.plugin.redis")
            },
            {
                label: "menu.memcached",
                new: isNewByDate("2025-01-03"),
                to: Router.url("docs.plugin.memcached")
            },
            {
                label: "menu.maildev",
                to: Router.url("docs.plugin.maildev")
            },
            {
                label: "menu.storage",
                new: isNewByDate("2024-12-29"),
                to: Router.url("docs.plugin.storage")
            },
            {
                label: "menu.rproxy",
                new: isNewByDate("2024-11-27"),
                to: Router.url("docs.plugin.rproxy")
            },
            {
                label: "menu.ollama",
                new: isNewByDate("2025-01-10"),
                to: Router.url("docs.plugin.ollama")
            },
            {
                label: "menu.custom-plugin",
                to: Router.url("docs.plugin.custom")
            }
        ]
    }
];
