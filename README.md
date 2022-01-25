# Sveltekit 18n

Internationalization-enabled svelte-kit template with built-in i18n.

## Features

- built-in translation store, no library required 🏡
- Powerful Typescript typing for autocomplete and error checking 📰
- Translation are compiled for lightning speed updates ⚡
- The default locale is the source code: no duplication 👁️
- Builtin i18n-ally configuration 🔥

## Using the template

[Use this template](https://github.com/Marr11317/sveltekit-i18n-template/generate)
or
[Download zip](https://github.com/Marr11317/sveltekit-i18n-template/archive/refs/heads/main.zip)

## Documentation

### Getting up and running

With `ni` (recommended) ([link](https://github.com/antfu/ni))

```bash
ni && nr dev
```

With pnpm

```bash
pnpm install && pnpm run dev
```

This will start a development server watching the translations as well as the source files for changes.

### Translating source code

The code is written directly in the target language. You'll often not need an english translation. This saves time and effort. You write

```typescript
const hw = $t("Hello World");

//fr.json
{ "Hello World": "Bonjour Monde" }
```

Instead of

```typescript
const hw = $t("helloWorld");

//en.json
{ "helloWorld": "Hello World" }
//fr.json
{ "helloWorld": "Bonjour Monde" }
```

This has several advantages, including

- Default content doesn't have to be fetched from an external resource, it's already available.
- This means less bandwidth cost
- It also means no javascript has to be run if the page is being viewed in its written language
- Sometimes this even mean that no json file has to be generated and kept up to date for the written language.

Note that although the first is shorter, if you prefer to use the second way, it is also perfectly valid!

Sometimes however, you'll have to use keys. There are typically 3 reasons you'd want to do so:

- Reason 1: plurals and gender rules

```svelte
<!-- Component.svelte -->
<p>{$t("interpolated", {count: 10 })}</p>
<p>{$t("selected", {gender: "male"})}</p>
```

```json
// en.json
{
    "interpolated": "A text where I interpolate {count} times",
    "selected": "{gender, select, male {He is a good boy} female {She is a good girl} other {They are good fellas}}"
}
```

See [messageformat's documentation](http://messageformat.github.io/messageformat/) for details about the translation format.

- Reason 2: Long and multiline strings

🚫 DON'T:

```svelte
<!-- Component.svelte -->
<p>{$t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...")}</p>
<p>{$t(`Multiline string
    that spans
    multiple
    lines`)}</p>
```

Translation nightmare

👍 DO:

```svelte
<p>{$t("loremIpsum")}</p>
<p>{$t(`multiline`)}</p>
```

```json
// en.json
{
    "loremIpsum": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    "multiline": "Multiline string\nthat spans\nmultiple\nlines"
}
```

Note: you can use yaml ([and soon json5 🤞🤞🤞](https://github.com/messageformat/messageformat/pull/345)) and all other formats supported by messageformat.

Note2: Nested keys are not allowed, and are not planned to be.

## Known issues

Note that messageformat has a bug under Windows, [which has now been fixed](https://github.com/messageformat/messageformat/issues/343), but hasn't been published yet. Until a release comes out, using this repo under Windows is troublesome. For those it concerns, try [github codespaces](github.com/codespaces).

## License

MIT
