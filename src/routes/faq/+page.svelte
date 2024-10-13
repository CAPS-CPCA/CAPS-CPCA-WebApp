<script lang="ts">
	import { onMount } from 'svelte';
	import { modulePath } from '$lib/modules';
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
	import Reader from '../[...slug]/Reader.svelte';

	export let data;

	$: modules = $data.modules;

	onMount(() => {
		document.title =
			localStorage.getItem('lang') === 'en' ? 'Frequently asked questions' : 'Questions fréquentes';
	});
</script>

<Hero type="icon" id="FAQ" data={$data.hero} />

<section class="reader">
	<div class="container">
		{#if modules}
			<Reader modules={modulePath($page.url.pathname, modules)} data={$data.outline} />
		{/if}
	</div>
</section>
