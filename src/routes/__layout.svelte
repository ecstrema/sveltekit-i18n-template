<script lang="ts">
    import { getStores } from "$app/stores";
    import { changeURL, locale, localizedPath } from "$lib/i18n";
    import { onDestroy, onMount } from "svelte";

    let lastLocale = $locale;

    const { page } = getStores();

    let unsubscribe = () => {};
    // Run inside onMount to be only run client-side
    onMount(() => {
        unsubscribe = locale.subscribe((newLocale) => {
            changeURL(localizedPath($page.path, lastLocale, newLocale));
            lastLocale = newLocale;
        });
    });

    onDestroy(unsubscribe);
</script>

<slot/>
