<script lang="ts">
    import { goto } from "$app/navigation";
    import { locale } from "$lib/i18n";
    import { onDestroy, onMount } from "svelte";
    import { getStores } from "$app/stores";

    const { page } = getStores();

    let unsubscribe = () => {};
    // onMount(() => {
    //     unsubscribe = locale.subscribe((value) => {
    //         goto($page.path.replace(/fr|en|es\//, "$1") )
    //     });
    // });

    onDestroy(unsubscribe);
</script>

<slot/>
