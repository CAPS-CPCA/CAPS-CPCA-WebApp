<script lang="ts">
	export let data;
</script>

<section class="survey">
	{#if data}
		<div class="container">
			<div class="card">
				<h1>{data.title}</h1>
				{#each data.para as para}
					<p>{para}</p>
				{/each}
				<button class="primary">{data.button}</button>
			</div>
			<a href={data.link} target="_blank" rel="noopener noreferrer"
				><enhanced:img src={data.image} alt="Survey" /></a
			>
		</div>
	{/if}
</section>

<style>
	/* Common styles */
	.card {
		display: flex;
		transition: all 0.3s ease-in-out;
	}
	img {
		transition: all 0.3s ease-in-out;
	}
	img:hover {
		transform: scale(0.95);
	}

	/* Mobile styles */
	@media (max-width: 768px) {
		.container {
			display: flex;
			flex-direction: column;
		}
		.card {
			flex-direction: column;
			padding: 3.5rem;
			gap: 2rem;
		}
		.card h1 {
			font-size: 1.75rem;
		}
		.card p {
			font-size: 1.25rem;
		}
		img {
			height: auto;
			width: 100%;
		}
	}

	/* Desktop styles */
	@media (min-width: 769px) {
		.card {
			flex-direction: column;
			padding: 4rem 7rem;
			gap: 3rem;
		}
	}
</style>
