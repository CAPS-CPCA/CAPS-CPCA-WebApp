<script lang="ts">
	export let data;
</script>

<section>
	{#if data}
		<div class="container">
			<div class="card">
				<enhanced:img src={data.image} alt="SOGC Logo" />
				<h2>{data.title}</h2>
				{#each data.para as para}
					<p>{para}</p>
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
	/* Common styles */
	img {
		margin-bottom: 5rem;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgb(240, 240, 240);
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h2 {
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		text-align: center;
		margin-bottom: 2rem;
	}
	p {
		line-height: 2rem;
		font-family: 'Roboto', sans-serif;
		text-align: center;
		margin-bottom: 2rem;
	}

	/* Mobile specific styles */
	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}
		.card {
			padding: 2.5rem;
		}
		h2 {
			font-size: 1.5rem;
		}
		p {
			font-size: 1.25rem;
		}
	}

	/* Desktop specific styles */
	@media (min-width: 769px) {
		.card {
			padding: 5rem 20rem;
		}
		h2 {
			font-size: 2rem;
		}
		p {
			font-size: 1.5rem;
		}
	}
</style>
