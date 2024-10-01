<script>
	import '../global.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Analytics from '$lib/components/analytics.svelte';

	export let data;
</script>

<Analytics />
<Header data={$data.header} />
<slot />
<Footer data={$data.footer} />
