<script lang="ts">
	import Outline from './Outline.svelte';
	import { isMobile } from '$lib/responsive';
	import { onMount } from 'svelte';
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

	function handleP(data: string) {
		return `<p>${data.replace(/\n/g, '<br>')}</p>`;
	}
	function handleImg(data: string) {
		return `<div class="img"><img src="${data}" alt="" /></div>`;
	}
	function handleLeft(data: string) {
		return `<div class="left"><img src="${data}" alt="" /></div>`;
	}
	function handleRight(data: string) {
		return `<div class="right"><img src="${data}" alt="" /></div>`;
	}
	function handleH2(data: string) {
		return `<h2>${data}</h2>`;
	}
	function handleList(data: string | string[], type: string) {
		let html = '';
		if (Array.isArray(data)) {
			const ptype = type.slice(0, 2);
			const ctype = type.slice(2);
			for (let i = 0; i < data.length; i++) {
				if (i % 2 === 0) {
					html += `${data[i]
						.split('\n')
						.map((item: string) => `<li>${item}</li>`)
						.join('')}`;
				} else {
					if (data[i].startsWith('/')) {
						html += '<li class="no-count">' + handleImg(data[i]) + '</li>';
					} else {
						html += handleList(data[i], ctype);
					}
				}
			}
			return `<${ptype}>${html}</${ptype}>`;
		} else {
			return `<${type}>${data
				.split('\n')
				.map((item: string) => `<li>${item}</li>`)
				.join('')}</${type}>`;
		}
	}
	function handleTable(data: string[][], type: string) {
		let html = '';
		for (let i = 0; i < data.length; i++) {
			html += '<tr>';
			for (let j = 0; j < data[i].length; j++) {
				if (i === 0) {
					html += `<th>${data[i][j]}</th>`;
				} else {
					html += `<td>${data[i][j]}</td>`;
				}
			}
			html += '</tr>';
		}
		return `<table>${html}</table>`;
	}

	const regex = (content: any) => {
		const replacementMap = [
			{ regex: /(\S)\[(.*?)\]/g, replacement: '$1<a href="#ref" class="ref"><sup>$2</sup></a>' },
			{
				regex: /\[(.*?)\]\((.*?)\)/g,
				replacement: '<a class="in" href="/resources/$2.pdf" target="_blank">$1</a>'
			},
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
		let html = '';
		for (let i = 0; i < content.type.length; i++) {
			switch (content.type[i]) {
				case 'p':
					html += handleP(content.data[i]);
					break;
				case 'i-full':
					html += handleImg(content.data[i]);
					break;
				case 'h2':
					html += handleH2(content.data[i]);
					break;
				case 'left':
					html += handleLeft(content.data[i]);
					break;
				case 'right':
					html += handleRight(content.data[i]);
					break;
				case 'table':
					html += handleTable(content.data[i], content.type[i]);
					break;
				default:
					if (content.type[i].startsWith('ul') || content.type[i].startsWith('ol')) {
						html += handleList(content.data[i], content.type[i]);
					}
					break;
			}
		}
		replacementMap.forEach((item) => {
			html = html.replace(item.regex, item.replacement);
		});
		return html;
	};
</script>

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
						<div class="idholder" id={module.id}></div>
						{@html regex(module.content)}
					</div>
				{/each}
			{/if}
		</div>
	{/if}
</div>

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
			border-radius: 1rem;
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
	}
</style>
