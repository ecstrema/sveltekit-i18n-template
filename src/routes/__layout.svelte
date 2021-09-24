<script lang="ts">
    // import { goto } from "$app/navigation";
    // import { locale } from "$lib/i18n";
    import { onDestroy } from "svelte";
    // import { getStores } from "$app/stores";

    // const { page } = getStores();

    // let lastLocale = $locale;
    let unsubscribe = () => {};
    // const unsubscribe = locale.subscribe((value) => {
    //     goto($page?.path?.replace(`/${lastLocale}/`, value))
    // });

    onDestroy(unsubscribe);
</script>

<slot/>
