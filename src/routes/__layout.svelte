<script context="module" lang="ts">
    import { goto } from "$app/navigation";
    import { locale } from "$lib/i18n";
    import { onDestroy } from "svelte";
    import { getStores } from "$app/stores";
    import { get } from "svelte/store";

    const { page } = getStores();

    let lastLocale = get(locale);
    // let unsubscribe = () => {};
    const unsubscribe = locale.subscribe((value) => {
        goto(get(page)?.path?.replace(`/${lastLocale}/`, value))
    });

    onDestroy(unsubscribe);
</script>

<slot/>
