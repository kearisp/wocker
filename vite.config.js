import {defineConfig} from "vite";
import ReactPlugin from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [ReactPlugin()],
    base: process.env.PUBLIC_URL
        ? new URL(process.env.PUBLIC_URL, "http://localhost").pathname
        : "/",
    build: {
        outDir: "build",
    },
    envPrefix: "REACT_APP_",
    define: {
        "import.meta.env.PUBLIC_URL": process.env.PUBLIC_URL ? JSON.stringify(process.env.PUBLIC_URL) : undefined
    },
    server: {
        open: true,
        allowedHosts: process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST.split(",") : undefined,
        host: process.env.VIRTUAL_HOST ? process.env.VIRTUAL_HOST.split(",")[0] : "0.0.0.0",
        port: process.env.VIRTUAL_PORT || 3000
    }
});
