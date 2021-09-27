<script lang="ts">
	import { onMount } from 'svelte';
    import { t, locale } from '$lib/i18n';

	// Greater than 900, so that by default it shows the menu and not the hamburger.
	let windowWidth = 1000;
	let showMenu = false;
	const showMenuThreshold = 900;

	onMount(() => {
		windowWidth = window.innerWidth;
		window.addEventListener('resize', () => {
			windowWidth = window.innerWidth;
		});
	});

	function toggleLanguage() {
		if ($locale === "fr") {
			$locale = "en";
		}
		else {
			$locale = "fr";
		}
	}

	$: switchLanguage = $t("French");

	$: pages = [
		{ t: $t("Home"), href: "/" },
		{ t: $t("Map"), href: "/map" },
		{ t: $t("About"), href: "/about" },
	]
</script>

<header class="header">
	<div class="centered-layout">
		<div class="navbar">
			<a class="title" href=".">
				Sveltekit i18n
			</a>
			<div class="spacer"></div>
			{#if windowWidth && windowWidth > showMenuThreshold}
			<nav class="pages">
				{#each pages as p}
					<a class="page margin-right" href={"/" + $locale + p.href}>{p.t}</a>
				{/each}
				<p tabindex="0" class="page underline" on:keypress|preventDefault={toggleLanguage} on:click={toggleLanguage}>{switchLanguage}</p>
			</nav>
			{:else if windowWidth}
				<svg height="32px" viewBox="0 0 32 32" width="32px" class="hamburger" on:click={() => showMenu = !showMenu}>
					<path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
				</svg>
			{/if}
		</div>
		{#if showMenu && windowWidth < showMenuThreshold}
			<div class="menu">
				{#each pages as p}
					<a class="page margin-bottom" href={"/" + $locale + p.href}>{p.t}</a>
				{/each}
				<p tabindex="0" class="page underline" on:keypress|preventDefault={toggleLanguage} on:click={toggleLanguage}>{switchLanguage}</p>
			</div>
		{/if}
	</div>
</header>

<style>
	.header {
		box-shadow: 0 0 3px 0 lightblue;
	}
	.menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 12px;
	}
	.margin-bottom {
		margin-bottom: 12px;
	}
	.margin-right {
		margin-right: 20px;
	}

	.hamburger {
		min-width: 32px;
		position:  absolute;
		right: 20px;
		top: 25px;
		cursor: pointer;
	}

	.navbar {
		display: flex;
		align-items: center;

		padding-right: 30px;
		padding-left: 30px;
		padding-top: 20px;
		padding-bottom: 10px;
        box-sizing: border-box;
	}
	.title {
		color: rgb(244, 188, 81);
		font-size: 50px;
		text-transform: uppercase;
		text-decoration: none;
		font-weight: bold;
	}

	@media only screen and (max-width: 1100px) {
		.title {
			font-size: 40px;
		}
	}

	.pages {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	.spacer {
		flex-grow: 1;
		min-width: 40px;
	}

	.page {
		align-self: center;
		cursor: pointer;
		user-select: none;

		text-decoration: none;
  		font-size: 17px;

		color: rgb(12, 12, 12);
		transition: color 0.1s linear;
	}
	.page:hover {
		color:rgb(244, 188, 81);
	}
	.page:focus {
		font-weight: 600;
		outline: none;
	}

	.underline {
		text-decoration: underline;
	}
</style>
