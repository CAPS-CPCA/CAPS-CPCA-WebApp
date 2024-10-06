<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	let selectedHref = '';
	let selectedHash = '';

	export let data;

	$: current = $page.url.pathname;
	$: outlineType = '/' + current.split('/')[1];
	$: outline = data[outlineType] || {};

	onMount(() => {
		const firstSection = Object.keys(outline)[0];
		if (firstSection && outline[firstSection] && outline[firstSection].length > 0) {
			selectedHref = outline[firstSection][0].href;
		}
		if (selectedHref) {
			const firstModule = Object.keys(outline[firstSection][0].modules)[0];
			if (firstModule) {
				selectedHash = firstModule;
			}
		}
	});
	$: selectedUrl = selectedHref.split('#')[0] + '#' + selectedHash;
</script>

<section>
	{#if outline}
		<div class="container base">
			<h1>Jump to a section</h1>
			<p>Please select both section and module</p>
			<select bind:value={selectedHref}>
				{#each Object.keys(outline) as section}
					{#each outline[section] as item}
						<option value={item.href}>{item.title}</option>
					{/each}
				{/each}
			</select>
			{#each Object.keys(outline) as section}
				{#each outline[section] as item}
					{#if item.href === selectedHref}
						<select bind:value={selectedHash}>
							{#each Object.entries(item.modules) as [id, module]}
								<option value={id}>{module}</option>
							{/each}
						</select>
					{/if}
				{/each}
			{/each}
			<button
				on:click={() => {
					goto(selectedUrl, { replaceState: true, state: { from: current } });
				}}
			>
				Go</button
			>
		</div>
	{/if}
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		padding: 2rem;
		margin-bottom: 2rem;
		background: radial-gradient(148.27% 200.49% at 44.09% 11.06%, #011627 0%, #4e7385 100%);
	}
	h1 {
		color: white;
		font-weight: 600;
		font-size: 1.5rem;
	}
	p {
		color: white;
		font-size: 1rem;
	}
	select {
		width: 100%;
		padding: 0.75rem;
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		border: none;
		border-radius: 0.5rem;
		background: white;
	}
	button {
		align-self: center;
		width: fit-content;
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 0.5rem;
		background: var(--Highlight);
		color: white;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
	}
</style>
