<script lang="ts">
    import { getStores } from "$app/stores";
    import { locale } from "$lib/i18n";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import translations from "../../generated/translations";

    const { page } = getStores();

    if (Object.prototype.hasOwnProperty.call(translations, $page?.params?.locale))
        $locale = $page.params.locale as typeof $locale;
</script>

<Header/>

<div style="text-align: center;">
    <slot/>
</div>

<Footer/>
