<script lang="ts">
	import Reader from '../[...slug]/Reader.svelte';
	import type { ModuleType } from '$lib/types';
	import { createSearch, searchHandler } from '$lib/search';
	import { onDestroy } from 'svelte';
	import Hero from '../../components/Hero.svelte';

	export let data;

	const searchModules: ModuleType[] = $data.modules
		? $data.modules.map((module: ModuleType) => ({
				...module,
				searchTerms: `${module.title} ${module.content.data}`
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
		<Reader modules={$searchStore.filtered} outline={false} data={$data.outline} />
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
	/* button:last-of-type {
  border-radius: 0 1rem 1rem 0;
} */
</style>
