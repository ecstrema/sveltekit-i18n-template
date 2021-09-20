<script lang="ts">
import { get } from "svelte/store";

    import { t, locale } from "../lib/i18n"

    function changeLanguage() {
        if ($locale == "en") $locale = "fr";
        else if ($locale == "fr") $locale = "es";
        else $locale = "en";
    }
</script>

<button on:click={changeLanguage}>Next Language</button>

<h1>Current Language: {$locale}</h1>

<p>{$t("plain")}</p>
<p>{$t("interpolated", {count: 10 })}</p>
<p>{$t("time", {now: Date.now()})}</p>
<p>{$t("number", {n: 10})}</p>
<p>{$t("pluralized", {count: 10})}</p>
<p>{$t("pluralized-with-hash", {count: 10})}</p>
<p>{$t("selected", {gender: ""})}</p>
