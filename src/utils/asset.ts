import Path from "path-browserify";

import {PUBLIC_PATH} from "../env";


export const asset = (...parts: string[]): string => {
    return Path.join(PUBLIC_PATH, ...parts);
};
