import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import * as Path from "path-browserify";
import {LocaleType} from "src/types";
import {PUBLIC_PATH} from "../env";


i18n.use(Backend).use(initReactI18next).init({
    lng: localStorage.getItem("lang") || LocaleType.UA,
    fallbackLng: LocaleType.EN,
    debug: import.meta.env.NODE_ENV === "development",
    backend: {
        loadPath: Path.join(PUBLIC_PATH, "/locales/{{lng}}.json")
    },
    interpolation: {
        escapeValue: false
    }
});
