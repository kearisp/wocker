enum LocaleTypeEnum {
    UA = "uk",
    EN = "en"
}

export type LocaleType = LocaleTypeEnum;

export const LocaleType = Object.assign({}, LocaleTypeEnum, {
    values: () => {
        return Object.values(LocaleTypeEnum)
    },
    label: (locale: LocaleTypeEnum) => {
        return `language.${locale}`;
    }
});
