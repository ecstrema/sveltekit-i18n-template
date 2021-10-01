<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    import { locale } from "$lib/i18n";

    onMount(() => {
        goto("./" + $locale, { replaceState: true });
    })
</script>
