<script lang="ts">
	import CopyBtn from './CopyBtn.svelte';
	import Outline from './Outline.svelte';
	import { isMobile } from '$lib/responsive';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	export let data;

	let mobileView: boolean;
	export let modules: any = [];
	export let outline = true;

	const unsubscribe = isMobile.subscribe((value) => {
		mobileView = value;
	});

	onMount(() => {
		return () => {
			unsubscribe();
		};
	});

	const apiregex = (content: any) => {
		const replacementMap = [
			{
				regex: /\[(.*?)\]\((.*?)\)/g,
				replacement: '<a class="in" href="/resources/$2.pdf" target="_blank">$1</a>'
			},
			{ regex: /(\S)\[(.*?)\]/g, replacement: '$1<a href="#ref" class="ref"><sup>$2</sup></a>' },
			{
				regex:
					/(Initial visit:|Follow-up visit:|Initial visit and follow-up visit:|Telehealth:|Première visite:|Visite de suivi:|Télésanté:|Visite initiale et visite de suivi:)/g,
				replacement: '<span style="color: #0074e4; font-weight: bold;">$1</span>'
			},
			{ regex: /Q: (.*?)<br>/g, replacement: '<b>Q: $1</b><br>' },
			{
				regex: /(MISO |misoprostol|\(MISO\))/g,
				replacement: '<span style="color: var(--MISO);">$1</span>'
			},
			{
				regex: /(MIFE |MIFÉ |mifepristone|\(MIFE\)|(MIFÉ)|mifépristone)/g,
				replacement: '<span style="color: var(--MIFE);">$1</span>'
			},
			{
				regex: /Exhale/g,
				replacement: '<a class="ex" href="https://exhaleprovoice.org/" target="_blank">Exhale</a>'
			},
			{
				regex: /All-Options/g,
				replacement:
					'<a class="ex" href="https://www.all-options.org/" target="_blank">All-Options</a>'
			},
			{
				regex: /It’s a plan/g,
				replacement: '<a class="ex" href="https://www.itsaplan.ca/" target="_blank">It’s a plan</a>'
			},
			{
				regex: /Action Canada’s Sexual Health Hub/g,
				replacement:
					'<a class="ex" href="https://www.actioncanadashr.org/sexual-health-hub/birth-control" target="_blank">Action Canada’s Sexual Health Hub</a>'
			},
			{
				regex: /SOGC’s Medical Abortion Training Program/g,
				replacement:
					'<a class="ex" href="https://sogc.org/en/rise/Events/event-display.aspx?EventKey=MATP2&WebsiteKey=4d1aa07b-5fc4-4673-9721-b91ff3c0be30" target="_blank">SOGC’s Medical Abortion Training Program</a>'
			},
			{
				regex: /NAF Canada’s Medication Abortion Training/g,
				replacement:
					'<a class="ex" href="https://nafcanada.org/medication-abortion-virtual-course/" target="_blank">NAF Canada’s Medication Abortion Training</a>'
			},
			{
				regex: /It’s My Choice/g,
				replacement:
					'<a class="ex" href="https://www.sexandu.ca/its-my-choice/" target="_blank">It’s My Choice</a>'
			},
			{
				regex: /SOGC’s Guideline on Prevention of RhD Alloimmunization/g,
				replacement:
					'<a class="ex" href="https://www.jogc.com/article/S1701-2163(24)00260-3/abstract" target="_blank">SOGC’s Guideline on Prevention of RhD Alloimmunization</a>'
			},
			{
				regex: /(Link|Lien): (.*?)\((.*?)\)/g,
				replacement: '$1: <a class="ex" href="$3" target="_blank">$2</a>'
			},
			{
				regex: /Patient Assistance Fund:/g,
				replacement:
					'<a class="ex" href="https://prochoice.org/patients/naf-hotline/" target="_blank">Patient Assistance Fund:</a>'
			},
			{
				regex: /Norma Scarborough Fund \| Action Canada: Visit actioncanadashr.org/g,
				replacement:
					'<a class="ex" href="https://actioncanadashr.org/" target="_blank">Norma Scarborough Fund | Action Canada: Visit actioncanadashr.org</a>'
			},
			{
				regex: /bib: (.*?)\((.*?)\)/g,
				replacement: '<a class="ref" href="$2" target="_blank">$1</a>'
			}
		];
		replacementMap.forEach((item) => {
			content = content.replace(item.regex, item.replacement);
		});
		return content;
	};

	function getContent(title: string, slug:string) {
		// if title has '&' replace it with '&amp;' to match the api
		if (title.includes('&')) {
			title = title.replace('&', '&amp;');
		}

		const objArray = $page.data.apidata.filter((item: any) => item.title.rendered === title);
		const obj = objArray.find((item: any) => item.class_list.includes('category-' + slug));
		if (obj) {
			return obj.content.rendered;
		} else {
			return undefined;
		}
	}

	function getSlug(slug: string) {
		// Extract the first segment of the slug after removing the leading '/'
		const segments = slug.split('/').filter(Boolean);
		const result = segments[0] || '';
		return result;
	}
</script>

{#if $page.url.pathname != '/search'}
	<div class="reader">
		{#if data}
			{#if outline && !mobileView}
				<Outline {data} />
			{/if}
			<div class="pane">
				{#if modules.length === 0}
					<h1>No Modules Found</h1>
				{:else}
					{#each modules as module}
						<h1>{module.title}</h1>
						<div class="module">
							<CopyBtn />
							<div class="idholder" id={module.id}></div>
							{
								#if getContent(module.title, getSlug($page.url.pathname)) !== undefined
							}
							{@html apiregex(getContent(module.title, getSlug($page.url.pathname)))}
							{:else}
								<p>Content not found</p>
							{/if}
						</div>
					{/each}
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<div class="reader">
		{#if data}
			{#if outline && !mobileView}
				<Outline {data} />
			{/if}
			<div class="pane">
				{#if modules.length === 0}
					<h1>No Modules Found</h1>
				{:else}
					{#each modules as module}
						<h1>{module.title.rendered}</h1>
						<div class="module">
							<CopyBtn />
							<div class="idholder" id={module.id}></div>
							{@html apiregex(module.content.rendered)}
						</div>
					{/each}
				{/if}
			</div>
		{/if}
	</div>
{/if}

<style>
	/* Common styles */
	.reader {
		position: relative;
		display: flex;
		overflow: hidden;
		margin-bottom: 5rem;
		background: #cbced1;
		border: 3px solid var(--Primary);
		border-radius: 1.15rem;
	}
	.pane {
		flex: 1;
		padding: 0 4rem 4rem 4rem;
		min-height: 50rem;
	}
	h1 {
		font-family: 'Open Sans', sans-serif;
		font-size: 2rem;
		font-weight: 600;
		padding: 1.5rem 4.5rem;
		color: var(--Primary);
	}
	.pane h1 {
		margin-top: 4rem;
		background: var(--Primary);
		color: white;
	}
	.idholder {
		position: absolute;
		height: 10rem;
		top: -10rem;
		left: 0;
		right: 0;
	}

	/* Module styles */
	@media (max-width: 768px) {
		.reader {
			flex-direction: column;
			margin-bottom: 2rem;
			border: none;
			border-radius: none;
			background: none;
		}
		.pane {
			padding: 0;
		}
		.pane h1 {
			margin-top: 2rem;
			padding: 2rem;
			font-size: 1.5rem;
		}
		.module {
			padding: 2rem;
			border: none;
		}
		.idholder {
			top: -12rem;
		}
	}
</style>
