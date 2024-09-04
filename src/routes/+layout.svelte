<script>
	import '../global.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let data;
</script>

<Header data={$data.header} />
<slot />
<Footer data={$data.footer} />
