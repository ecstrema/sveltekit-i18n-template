import type translations from "../../generated/translations";

type TranslationsType = typeof translations;

/** The existing locales. */
export type Locale = keyof TranslationsType;

export type LocaleTypes = TranslationsType[Locale];

/**
 * Union to intersection converter by @jcalz: https://stackoverflow.com/a/50375286/8580499
 *
 * `Intersect<{ a: 1 } | { b: 2 }> = { a: 1 } & { b: 2 }`
 */
type ToIntersection<T> = (T extends unknown ? ((x: T) => 0) : never) extends ((x: infer R) => 0) ? R : never;

type AllLocaleTypes = ToIntersection<TranslationsType[Locale]>;

export type LocaleType = {
    [P in keyof AllLocaleTypes]+?: AllLocaleTypes[P];
}

export type LocaleKey = keyof LocaleType;

/** There should always be a single parameter, because of how the messageformat output is formatted. */
export type LocaleParams<Key extends LocaleKey> = Parameters<LocaleType[Key]>[0];
