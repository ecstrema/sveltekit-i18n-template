<script context="module" lang="ts">
    import Index from "../index.svelte";
    import About from "../about.svelte";
    import Map from "../map.svelte";
    import Error from "../../components/error.svelte";
    import { locale, sourceLocale } from "$lib/i18n";

    let pageItem = Index;
    const translationMap = {
        "fr": {
            "index": Index,
            "apropos": About,
            "carte": Map,
        },
        "es": {
            "index": Index,
            "informacion": About,
            "carta": Map,
        }
    }

    export async function load({ page }) {
        const currentLocale = page?.params?.locale;
        if (currentLocale === sourceLocale) {
            return {
                status: 302,
                redirect: "/" + page?.params?.path
            };
        }
        if (currentLocale) {
            if (Object.hasOwnProperty.call(translationMap, currentLocale)) {
                locale.set(currentLocale);

                const currentPage = page?.params?.path;
                if (currentPage) {
                    const trs = translationMap[currentLocale];
                    if (Object.hasOwnProperty.call(trs, currentPage)) {
                        pageItem = trs[currentPage];
                    } else {
                        return {
                            status: 302,
                            redirect: "/" + currentPage
                        };
                    }
                } // else pageItem = Index -> Default;
            } else {
                pageItem = Error;
            }
        } // else pageItem = Index -> Default;

        return {
            status: 200
        }
    }
</script>

<svelte:component this={pageItem}/>
