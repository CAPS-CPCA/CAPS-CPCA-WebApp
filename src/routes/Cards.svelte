<script lang="ts">
	import { isMobile } from '$lib/responsive';
	import { onMount } from 'svelte';

	export let data;

	let mobileView: boolean;

	const unsubscribe = isMobile.subscribe((value) => {
		mobileView = value;
	});

	onMount(() => {
		return () => {
			unsubscribe();
		};
	});

	let selectedCard: number = 0;

	const handleShowCard = (index: number) => {
		selectedCard = index;
	};
</script>

<section class="cards">
	{#if data}
		{#if mobileView}
			<div class="container">
				<div class="band">
					{#each data as { title }, index}
						<button on:click={() => handleShowCard(index)} class:active={selectedCard === index}
							>{title}</button
						>
					{/each}
				</div>
				{#if data[selectedCard]}
					<div class="card">
						<p>{data[selectedCard].desc}</p>
						<a class="primary" href={data[selectedCard].link[0]}>{data[selectedCard].link[1]}</a>
					</div>
				{/if}
			</div>
		{:else}
			<div class="container">
				{#each data as { title, desc, link }}
					<div class="card">
						<h1>{title}</h1>
						<p>{desc}</p>
						<a class="primary" href={link[0]}>{link[1]}</a>
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</section>

<style>
	.cards {
		background: radial-gradient(148.27% 200.49% at 44.09% 11.06%, #011627 0%, #4e7385 100%);
	}
	.card {
		display: flex;
		flex-direction: column;
		padding: 4rem 7rem;
		gap: 3rem;
		transition: all 0.3s ease-in-out;
	}

	h1,
	p {
		color: #eaeaea;
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		.container {
			display: flex;
			flex-direction: column;
		}
		.band {
			display: flex;
			width: 100%;
		}
		button {
			flex: 1;
			padding: 1.5rem;
			background: var(--Primary);
			color: gray;
			font-family: 'Roboto', sans-serif;
			font-size: 1.5rem;
			border: none;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
		}
		.active {
			background: none;
			color: white;
		}
		.card {
			padding: 3.5rem;
			text-align: center;
			align-items: center;
		}
	}

	/* Desktop styles */
	@media (min-width: 768px) {
		.container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
		.card:hover {
			background-color: #2094f32a;
		}
		.card:first-of-type:hover h1 {
			color: var(--Prescribing);
		}
		.card:nth-of-type(2):hover h1 {
			color: var(--Dispensing);
		}
		.card:nth-of-type(3):hover h1 {
			color: var(--Supporting);
		}
	}
</style>
