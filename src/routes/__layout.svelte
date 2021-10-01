<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { getStores } from "$app/stores";
    import { locale } from "$lib/i18n";
    import { onDestroy, onMount } from "svelte";

    let lastLocale = $locale;

    const { page } = getStores();

    function localizedPath(path: string, lastLocale: string, newLocale: string): string {
        return (base ? "/" + base : "") + "/" + newLocale + path.substring(lastLocale.length + 1);
    }

    let unsubscribe = () => {};
    // Run inside onMount to be only run client-side
    onMount(() => {
        unsubscribe = locale.subscribe((newLocale) => {
            goto(localizedPath($page.path, lastLocale, newLocale), { replaceState: true });
            lastLocale = newLocale;
        });
    });

    onDestroy(unsubscribe);
</script>

<slot/>
