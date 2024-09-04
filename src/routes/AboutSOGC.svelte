<script lang="ts">
	export let data;
</script>

<section>
	{#if data}
		<div class="container">
			<div class="card">
				<img src={data.image} alt="SOGC Logo" />
				<h2>{data.title}</h2>
				{#each data.para as para}
					<p>{para}</p>
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
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
		padding: 5rem 20rem;
	}
	h2 {
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}
	p {
		line-height: 2rem;
		font-family: 'Roboto', sans-serif;
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 2rem;
	}
</style>
