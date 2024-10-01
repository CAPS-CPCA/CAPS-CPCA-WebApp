<script lang="ts">
	import { page } from '$app/stores';
	import Hero from '$lib/components/hero.svelte';

	export let data;

	function setID(url: string) {
		switch (true) {
			case url.includes('prescribing') || url.includes('prescrire'):
				return 'P';
			case url.includes('dispensing') || url.includes('dispenser'):
				return 'D';
			case url.includes('supporting') || url.includes('soutien'):
				return 'S';
			case url.includes('about') || url.includes('a-propos'):
				return 'A';
			default:
				return 'P';
		}
	}
	$: id = setID($page.url.pathname);
</script>

<Hero type="content" {id} data={$data.hero} />
<slot />
