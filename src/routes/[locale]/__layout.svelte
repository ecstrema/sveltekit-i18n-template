<script lang="ts">
    import { getStores } from "$app/stores";
    import { locale } from "$lib/i18n";
    import translations from "../../generated/translations";

    const { page } = getStores();

    if (Object.prototype.hasOwnProperty.call(translations, $page?.params?.locale))
        $locale = $page.params.locale as typeof $locale;
</script>

<slot/>
