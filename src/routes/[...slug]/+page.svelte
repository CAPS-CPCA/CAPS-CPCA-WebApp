<script lang="ts">
	import { redirect } from '$lib/data';
	import { modulePath } from '$lib/modules';
	import { page } from '$app/stores';
	import { Bibliography } from '$lib/store';
	import Reader from './Reader.svelte';
	import { isMobile } from '$lib/responsive';
	import { onMount } from 'svelte';
	import Jumper from './Jumper.svelte';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';

	function Titlefy(path: string) {
		return decodeURI(path.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()));
	}

	let mobileView: boolean;

	const unsubscribe = isMobile.subscribe((value) => {
		mobileView = value;
	});

	onMount(() => {
		return () => {
			unsubscribe();
		};
	});

	export let data;
	$: locator = $page.url.pathname.split('/').filter((item) => item !== '')[0];
	$: subpage = $page.url.pathname.split('/').filter((item) => item !== '')[1];

	$: redirect($page.url.pathname.replace(base, ''));
	$: modules = $data.modules;

	function getSlug(url: string) {
		const segments = url.replace(base, '').split('/').filter(Boolean);
		return segments[0] || '';
	}

	function extractRefs(url: string, modules: any, apidata: any[]): number[] {
		if (!modules || !apidata) return [];
		const pageModules = modulePath(url, modules);
		const slug = getSlug(url);
		const allContent = pageModules
			.map((mod: any) => {
				let title = mod.title;
				if (title.includes('&')) title = title.replace('&', '&amp;');
				const objArray = apidata.filter((item: any) => item.title.rendered === title);
				const obj = objArray.find((item: any) => item.class_list.includes('category-' + slug));
				return obj?.content?.rendered || '';
			})
			.join(' ');
		// Match patterns like [26], [26,27], [24,25,...], etc.
		// Requires non-whitespace before bracket (handles "text[25]" and ".[25]")
		// Negative lookahead (?!\() ensures we don't match [text] from link patterns [text](url)
		const matches = allContent.matchAll(/\S\[([0-9,.\s]+)\](?!\()/g);
		const refs: number[] = [];
		const seen = new Set<number>();
		for (const match of matches) {
			const refString = match[1];
			// Extract all individual numbers, ignoring commas, spaces, and ellipsis
			const numbers = refString.match(/\d+/g) || [];
			for (const num of numbers) {
				const numInt = parseInt(num, 10);
				if (!seen.has(numInt)) {
					seen.add(numInt);
					refs.push(numInt);
				}
			}
		}
		return refs.sort((a, b) => a - b);
	}

	$: refs = extractRefs($page.url.pathname, $data.modules, $page.data.apidata)
		.filter((ref) => Bibliography.some((item) => item.index === ref));
	$: if (browser) document.title = Titlefy(locator);
</script>

{#if mobileView}
	<div class="pagelocator">
		<p>{locator} > {subpage}</p>
	</div>
	<Jumper data={$data.outline} />
{/if}
<section class="reader">
	<div class="container">
		{#if modules}
			<Reader modules={modulePath($page.url.pathname, modules)} data={$data.outline} />
		{/if}
	</div>
</section>

{#if refs.length > 0}
	<section id="ref">
		<div class="module references">
			<h2>References</h2>
			<ul class="ref">
				{#each refs as ref (ref)}
					<li>
						<a
							href={Bibliography.filter((item) => item.index === ref)[0].href}
							target="_blank"
							class="ref"
							><b>{ref}</b> — {Bibliography.filter((item) => item.index === ref)[0].title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/if}

<style>
	/* General Styles */
	.references {
		border-radius: 1.15rem 1.15rem 0 0;
		box-sizing: border-box;
		width: 1600px;
		padding: 3.5rem 10rem;
	}
	.references li {
		list-style: none;
	}
	.references h2 {
		text-align: center;
	}
	section.reader {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* Mobile Styles */
	@media (max-width: 768px) {
		.references {
			border-radius: 0;
			padding: 2rem;
		}
		.references a {
			font-size: 1.15rem;
		}
		.ref {
			padding: 0;
			margin: 0;
		}

		.pagelocator {
			display: flex;
			padding: 0.5rem 2rem;
			box-sizing: border-box;
			position: fixed;
			top: 4rem;
			width: 100%;
			justify-content: space-between;
			background: #236fb3;
			z-index: 100;
		}
		.pagelocator p {
			align-self: center;
			font-size: 1rem;
		}
		p {
			color: white;
			font-weight: 600;
		}
	}
</style>
