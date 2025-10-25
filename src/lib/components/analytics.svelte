<script lang="ts">
	import { page } from '$app/stores';
	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'G-5YRPHXLWFC', {
				page_title: document.title,
				page_path: $page.url.href
			});
		}
	}
</script>

<svelte:head>
	<!-- Google tag (gtag.js) UBC -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-5YRPHXLWFC"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-5YRPHXLWFC');
	</script>
	 <!-- Google tag (gtag.js) SOGC -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-PS3P1FPJ7P"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-PS3P1FPJ7P');
	</script>
</svelte:head>
