<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Cards from './Cards.svelte';
	import Survey from './Survey.svelte';
	import Newsletter from './Newsletter.svelte';
	import AboutSogc from './AboutSOGC.svelte';

	export let data;

	onMount(() => {
		document.title = localStorage.getItem('lang') === 'en' ? 'Home' : 'Accueil';
	});
</script>

<Hero type="banner" id="home" data={$data.hero} />
<Cards data={$data.cards} />
<Survey data={$data.survey} />
<Newsletter data={$data.newsletter} />
<AboutSogc data={$data.aboutSOGC} />
