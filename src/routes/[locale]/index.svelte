<script lang="ts">
    import { onDestroy } from "svelte";
    import { t, locale } from "$lib/i18n";

    let now = Date.now();
    const timer = setInterval(() => now = Date.now(), 1000);
    onDestroy(() => clearInterval(timer));
</script>

<h1>Current Language: {$locale}</h1>

<p>{$t("Hello World")}</p> <!-- Note that this one doesn't need an english translation, because the source text is the translation. -->
<p>{$t("interpolated", {count: 10 })}</p>
<p>{$t("time", {now: now})}</p>
<p>{$t("number", {n: 10})}</p>
<p>{$t("selected", {gender: "male"})}</p>
<p>{$t("pluralized", {count: 10})}</p>
<p>{$t("pluralized-with-hash", {count: 10})}</p>
