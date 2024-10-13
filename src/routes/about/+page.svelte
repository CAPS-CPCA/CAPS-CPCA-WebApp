<script lang="ts">
	import { onMount } from 'svelte';
	import { modulePath } from '$lib/modules';
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
	import Reader from '../[...slug]/Reader.svelte';

	export let data;
	$: modules = $data.modules;

	onMount(() => {
		document.title = localStorage.getItem('lang') === 'en' ? 'About us' : 'À propos de nous';
	});
</script>

<Hero type="content" id="A" data={$data.hero} />

<section>
	<div class="container">
		{#if modules}
			<Reader
				modules={modulePath($page.url.pathname, modules)}
				data={$data.outline}
				outline={false}
			/>
		{/if}
	</div>
</section>
