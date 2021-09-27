<script context="module" lang="ts">
    import Index from "../index.svelte";
    import Error from "../../components/error.svelte";
    import { sourceLocale, locale } from "$lib/i18n";
    import translations from "../../generated/translations";

    let pageItem = Index;

    export async function load({ page }) {
        const currentLocale = page?.params?.locale;
        const path = page?.params?.path;
        if (currentLocale === sourceLocale) {
            return {
                status: 302,
                redirect: "/" + path
            };
        }
        if (currentLocale) {
            if(path) {
                if (Object.prototype.hasOwnProperty.call(translations, currentLocale)) {
                    locale.set(currentLocale);
                    try {
                        console.log(path);
                        pageItem = await import(/* @vite-ignore */ `../${path}.svelte`);
                    } catch (error) {
                        pageItem = Error;
                    }
                }
            } // else pageItem = Index -> Default
        } // else pageItem = Index -> Default;

        return {
            status: 200
        }
    }
</script>

<svelte:component this={pageItem}/>
