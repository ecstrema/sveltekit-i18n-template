import { writable, derived } from 'svelte/store';

import translations from "../generated/translations";

// Put your default language here
export const locale = writable("en");

export const t = derived(locale, ($locale: string) => {
    const localeTranslations = translations[$locale];
    return (translation: string, ...args: unknown[]) => {
        return localeTranslations[translation](args);
    }
})
