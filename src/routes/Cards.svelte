<script lang="ts">
	export let data;
</script>

<section class="cards">
	{#if data}
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
	.card:hover {
		background-color: #2094f32a;
	}
	.card:first-of-type:hover h1 {
		color: var(--Prescribing);
	}
	.card:nth-of-type(2):hover h1 {
		color: var(--Dispensing);
	}
	.card:last-of-type:hover h1 {
		color: var(--Supporting);
	}
	h1,
	p {
		color: #eaeaea;
	}
</style>
