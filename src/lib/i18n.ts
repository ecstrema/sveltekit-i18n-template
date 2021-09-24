import { writable, derived } from 'svelte/store';

import translations from "../generated/translations";

export type TranslationsType = typeof translations;
/** The existing locales. */
export type Locale = keyof TranslationsType;
export type LocaleType = TranslationsType[Locale];
export type LocaleKey = keyof LocaleType;

// There should always be a single parameter, because of how the messageformat
// output is formatted.
export type LocaleParams<Key extends LocaleKey> = Parameters<LocaleType[Key]>[0];

/** The app's current locale. */
export const locale = writable("en");

/** The locale in which your source is written in. */
export const sourceLocale = "en";

/**
 * Translation store.
 *
 * @example
 * ```svelte
 * <p>{$t("Hello World")}</p>
 * <p>{$t("stringWithInterpolation", {n: 10})}
 * <p>{$t("stringWithMultipleInterpolations", {count: 0, gender: "female"})}
 * ```
 */
export const t = derived(locale, ($locale: Locale) => {
    let targetTranslations: LocaleType;

    if ($locale == sourceLocale) {
        if (!Object.prototype.hasOwnProperty.call(translations, $locale))
            return function(p: string): string { return p; }; // identity function
        targetTranslations = translations[$locale];
    }

    if (!Object.prototype.hasOwnProperty.call(translations, $locale)) {
        console.error(`Trying to get info from locale "${$locale}", which doesn't exist.\n Falling back to source locale("${sourceLocale}")`);
        targetTranslations = translations[sourceLocale]
    } else {
        targetTranslations = translations[$locale]
    }

    return function translate<Key extends LocaleKey>(translation: Key, obj?: LocaleParams<Key>): string {
        if (!Object.prototype.hasOwnProperty.call(targetTranslations, translation)) {
            if ($locale == sourceLocale) return translation;
            else if (Object.hasOwnProperty.call(translations, sourceLocale)) {
                console.error(`Key "${translation}" not present in locale "${$locale}", trying in source locale ("${sourceLocale}")`);
                targetTranslations = translations[sourceLocale];
                return translate(translation, obj);
            }
            return translation;
        }
        type _fn = (arg?: {[key: string]: number | string;}) => string;
        return (targetTranslations[translation] as _fn)(obj);
    }
});
