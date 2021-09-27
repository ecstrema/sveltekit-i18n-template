<script lang="ts">
    import { changeURL, locale, sourceLocale } from "$lib/i18n";
    import { onDestroy, onMount } from "svelte";

    let lastLocale = $locale;

    function localizedPath(path: string, lastLocale: string, newLocale: string): string {
        return "/" + newLocale + path.substring(lastLocale.length + 1);
    }

    let unsubscribe = () => {};
    onMount(() => {
        locale.subscribe((newLocale) => {
            changeURL(localizedPath(window.location.pathname, lastLocale, newLocale));
            lastLocale = newLocale;
        });
    });

    onDestroy(unsubscribe);
</script>

<slot/>
