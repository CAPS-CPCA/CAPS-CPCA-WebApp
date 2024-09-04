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
			<img src={data.image} alt="Survey" />
		</div>
	{/if}
</section>

<style>
	.survey {
		padding: 6.25rem;
	}
	.card {
		display: flex;
		flex-direction: column;
		padding: 4rem 7rem;
		gap: 3rem;
		transition: all 0.3s ease-in-out;
	}
	img {
		margin-right: 4rem;
		transition: all 0.3s ease-in-out;
	}
	img:hover {
		transform: scale(1.1);
	}
</style>
