<script lang="ts">
    import { changeURL, locale, sourceLocale } from "$lib/i18n";
    import { onDestroy, onMount } from "svelte";

    let lastLocale = $locale;

    function localizedPath(path: string, lastLocale: string, newLocale: string): string {
        const realPath = lastLocale === sourceLocale ? path : path.substring(lastLocale.length + 1);
        return newLocale === sourceLocale ? realPath : ("/" + newLocale + realPath);
    }

    let unsubscribe = () => {};
    onMount(() => {
        locale.subscribe((newLocale) => {
            changeURL(localizedPath(window.location.pathname, lastLocale, newLocale));
            lastLocale = newLocale;
        });
    });

    onDestroy(unsubscribe);

    function changeLanguage(): void {
        if ($locale === "en") $locale = "fr";
        else if ($locale === "fr") $locale = "es";
        else $locale = "en";
    }
</script>

<button on:click={changeLanguage}>Next Language</button>

<slot/>
