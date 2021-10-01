import { writable, derived } from 'svelte/store';
import type { Writable } from 'svelte/store';

import translations from "../../generated/translations";
import type { Locale, LocaleKey, LocaleParams, LocaleType, LocaleTypes } from './i18n-types';

/** The locale in which your source is written in. */
export const sourceLocale = "en";

/** The app's current locale. */
export const locale: Writable<Locale | typeof sourceLocale> = writable("en");

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
    let targetTranslations: LocaleTypes;

    if ($locale === sourceLocale) {
        if (!Object.prototype.hasOwnProperty.call(translations, $locale))
            return function(p: string): string { return p; }; // identity function
        targetTranslations = translations[$locale];
    }

    if (!Object.prototype.hasOwnProperty.call(translations, $locale)) {
        console.error(`Trying to get info from locale "${$locale}", which doesn't exist.\n Falling back to source locale("${sourceLocale}")`);
        targetTranslations = translations[sourceLocale]
    } else {
        targetTranslations = translations[$locale];
    }

    return function translate<Key extends LocaleKey>(translation: Key, obj?: LocaleParams<Key>): string {
        if (!Object.prototype.hasOwnProperty.call(targetTranslations, translation)) {
            if ($locale === sourceLocale) return translation;
            if (Object.hasOwnProperty.call(translations, sourceLocale)) {
                if (targetTranslations === translations[sourceLocale]) return translation;
                console.error(`Key "${translation}" not present in locale "${$locale}", falling back to source locale ("${sourceLocale}")`);
                targetTranslations = translations[sourceLocale];
                return translate(translation, obj);
            }
            return translation;
        }
        return ((targetTranslations as LocaleType)[translation])(obj) as string;
    }
});
