import { writable, derived } from 'svelte/store';

import translations from "../generated/translations";

export type TranslationsType = typeof translations;
export type Locale = keyof TranslationsType;
export type LocaleType = TranslationsType[Locale];
export type LocaleKey = keyof LocaleType;
// There should always be a single parameter;
export type LocaleParams<Key extends LocaleKey> = Parameters<LocaleType[Key]>[0];

// Put your default language here
export const locale = writable("en");

export const t = derived(locale, ($locale: Locale) => {
    const localeTranslations = translations[$locale];

    function translate<Key extends LocaleKey>(translation: Key, obj?: LocaleParams<Key>) {
        return (localeTranslations[translation] as (arg?: number | string) => string)(obj);
    }

    return translate;
})
