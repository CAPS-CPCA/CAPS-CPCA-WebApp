<script lang="ts">
	import { page } from '$app/stores';
	export let data;
	$: showSurvey = $page.data.surveyCompleted;
	$: consent = $page.data.cookieConsent;
</script>

<section class="survey">
	{#if data}
		<div class="container">
			{#if !$showSurvey}
				<div class="card">
					<h1>{data.title_init}</h1>
					{#each data.para_init as para}
						<p>{para}</p>
					{/each}
					{#if !$consent}
						<button class="primary" on:click={$page.data.toggleCookie}>{data.button_init}</button>
					{:else}
						<button class="primary disable" disabled>{data.button_accept}</button>
					{/if}
				</div>
				<a
					href={data.link}
					target="_blank"
					rel="noopener noreferrer"
					on:click={() => {
						if ($consent) $page.data.toggleSurvey();
					}}><enhanced:img class="responsive-img" src={data.image} alt="Survey" /></a
				>
			{:else}
				<div class="card">
					<h1>{data.title_end}</h1>
					{#each data.para_end as para}
						<p>{para}</p>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
</section>

<style>
	/* Common styles */
	.disable {
		background: var(--Primary);
		opacity: 0.3;
	}
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
	.responsive-img {
		width: 100%;
		height: auto;
		display: block;
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
