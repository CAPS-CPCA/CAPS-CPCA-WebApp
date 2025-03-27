<script lang="ts">
	import { onMount } from 'svelte';
	import Reader from '../[...slug]/Reader.svelte';
	import { createSearch, searchHandler } from '$lib/search';
	import { onDestroy } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { page } from '$app/state';

	export let data;

	onMount(() => {
		document.title = localStorage.getItem('lang') === 'en' ? 'Search' : 'Recherche';
	});

	const searchModules: any = page.data.apidata
		? page.data.apidata.map((module: any) => ({
				...module,
				searchTerms: `${module.title.rendered} ${module.content.rendered}`
			}))
		: [];

	const searchStore = createSearch(searchModules);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<Hero type="icon" id="Search" data={$data.hero} />
<form class="form">
	<input type="search" placeholder={$data.search?.placeholder} bind:value={$searchStore.search} />
</form>
<br /><br />
<section class="reader">
	<div class="container">
		<Reader modules={$searchStore.filtered.reverse()} outline={false} data={$data.outline} />
	</div>
</section>

<style>
	.form {
		display: flex;
		height: 4rem;
		justify-content: center;
		align-items: center;
	}
	input {
		padding: 0.95rem;
		width: 20rem;
		background-color: #f6f7f8;
		border: 2px solid #01162740;
		transition: all 0.1s ease-in-out;
	}
	input::placeholder {
		font-family: 'Open Sans', sans-serif;
		font-style: italic;
	}
	input:hover {
		background-color: #8fd5ff;
	}
	input:focus {
		outline: none;
		background-color: #f6f7f8;
		border: 2px solid var(--Highlight);
	}
	input:first-of-type {
		border-radius: 1rem;
	}
	/* Mobile */
	@media (max-width: 768px) {
		.form {
			position: sticky;
			top: 5rem;
			z-index: 5;
		}
	}
</style>
