import {defineConfig} from "vite";
import ReactPlugin from "@vitejs/plugin-react";
import FS from "fs";
import Path from "path";


const {version} = JSON.parse(FS.readFileSync("./package.json").toString());

export default defineConfig({
    plugins: [ReactPlugin()],
    base: process.env.PUBLIC_URL
        ? new URL(process.env.PUBLIC_URL, "http://localhost").pathname
        : "/",
    resolve: {
        alias: {
            "src": Path.resolve(__dirname, "./src")
        }
    },
    build: {
        outDir: "build"
    },
    envPrefix: "REACT_APP_",
    define: {
        "import.meta.env.PUBLIC_URL": process.env.PUBLIC_URL ? JSON.stringify(process.env.PUBLIC_URL) : undefined,
        "import.meta.env.WOCKER_VERSION": JSON.stringify(version)
    },
    server: {
        open: false,
        allowedHosts: process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST.split(",") : undefined,
        host: process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST.split(",")[0] : "0.0.0.0",
        port: process.env.VIRTUAL_PORT || 3000
    }
});
