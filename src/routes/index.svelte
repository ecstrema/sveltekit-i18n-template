<script context="module" lang="ts">
    import { locale } from "$lib/i18n";
    import { get as getStore } from "svelte/store";

    /**
     * @type {import('@sveltejs/kit').Get}
     */
    export async function get() {
        return {
            headers: {
                Location: "/" + getStore(locale),
            },
            status: 302,
        }
    }
</script>
