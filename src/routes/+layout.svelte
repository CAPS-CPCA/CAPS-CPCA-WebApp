<script>
	// import { data, userLang } from '$lib/data';
	import '../global.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	// $: lang = $userLang;
	// $: console.log(lang);
</script>

<Header />
<slot />
<Footer />
