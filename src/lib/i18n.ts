import { writable, derived } from 'svelte/store';

import translations from "../generated/translations";

export type TranslationsType = typeof translations;
export type Locale = keyof TranslationsType;
export type LocaleType = TranslationsType[Locale];
export type LocaleKey = keyof LocaleType;

// There should always be a single parameter, because of how the messageformat
// output is formatted.
export type LocaleParams<Key extends LocaleKey> = Parameters<LocaleType[Key]>[0];

/** Put your default locale here. */
export const locale = writable("en");

/**
 * Translation store.
 *
 * @example
 * ```svelte
 * <p>{$t("simpleString")}</p>
 * <p>{$t("stringWithInterpolation", {n: 10})}
 * <p>{$t("stringWithMultipleInterpolations", {count: 0, gender: "female"})}
 * ```
 */
export const t = derived(locale, ($locale: Locale) => {
    const localeTranslations = translations[$locale];

    return function translate<Key extends LocaleKey>(translation: Key, obj?: LocaleParams<Key>) {
        return (localeTranslations[translation] as (arg?: {[key: string]: number | string;}) => string)(obj);
    }
});
