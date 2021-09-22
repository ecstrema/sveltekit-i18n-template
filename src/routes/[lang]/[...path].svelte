<script lang="ts">
    import Index from "../index.svelte";
    import About from "../about.svelte";
    import Map from "../map.svelte";
    import { getStores } from "$app/stores";
    import { locale } from "$lib/i18n";

    const { page } = getStores();

    $locale = "fr";

    const translationMap = {
        "index": Index,
        "apropos": About,
        "carte": Map,
        // etc.
    }


    let currentPage = $page.params.path;
    if (!currentPage || !Object.hasOwnProperty.call(translationMap, currentPage)) {
        currentPage = "index";
    }
</script>

<svelte:component this={translationMap[currentPage]}/>
