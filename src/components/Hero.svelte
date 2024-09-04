<script lang="ts">
	export let data: any;
	export let type: string;
	export let id: string;

	let hero: any = null;
	$: if (data) hero = data.find((hero: any) => hero.type === type && hero.id === id);
</script>

<main>
	{#if hero !== null}
		<section class={hero.type}>
			{#if hero.id === 'home'}
				<enhanced:img src={hero.data.image.src} alt={hero.data.image.alt} />
			{:else if ['P', 'D', 'S', 'A'].includes(hero.id)}
				<div class="container base" class:reverse={hero.reverse}>
					<div>
						{#if typeof hero.data.title === 'string'}
							<h1>{hero.data.title}</h1>
						{:else}
							<h1>
								{hero.data.title.f1}<span class={hero.id}>{hero.data.title.f2}</span>{hero.data
									.title.f3}
							</h1>
						{/if}
						{#each hero.data.paragraphs as paragraph}
							<p>
								{paragraph.f1}<span>{paragraph.f2}</span>{paragraph.f3}
								{#if paragraph.f4}
									<i>{paragraph.f4}</i>
								{/if}
							</p>
						{/each}
					</div>
					<img src={hero.data.image.src} alt={hero.data.image.alt} />
				</div>
			{:else if ['FAQ', 'Search'].includes(hero.id)}
				<img src={hero.data.image.src} alt={hero.data.image.alt} />
				<h1>{hero.data.title}</h1>
			{/if}
		</section>
	{/if}
</main>

<style>
	.P {
		color: var(--Prescribing);
		font-weight: 700;
	}
	.D {
		color: var(--Dispensing);
		font-weight: 700;
	}
	.S {
		color: var(--Supporting);
		font-weight: 700;
	}
	/* variant: home */
	.banner {
		flex-direction: column;
		padding: 1.5rem 3rem 3rem 3rem;
	}
	.banner img {
		max-width: 1600px;
		width: 100%;
		height: auto;
		border-radius: 3rem 3rem 0 0;
	}
	/* variant: icon */
	.icon {
		gap: 2rem;
		flex-direction: column;
		padding: 3rem;
	}
	.icon img {
		max-height: 25rem;
	}
	/* variant: content */
	span {
		color: #0074e4;
		font-weight: 700;
	}
	.base {
		gap: 3rem;
		padding: 5rem 10rem;
		align-items: center;
		box-sizing: border-box;
	}
	.base h1 {
		font-family: 'Inter', sans-serif;
		font-weight: 700;
		color: var(--Primary);
		margin: 1rem 0;
		padding-top: 2rem;
		font-size: 32px;
	}
	.base p {
		font-family: 'Roboto', sans-serif;
		font-size: 1.35rem;
		padding-bottom: 2rem;
	}
	.base img {
		max-width: 25rem;
		width: 100%;
		height: auto;
	}
	/* variant: content reverse */
	.reverse {
		flex-direction: row-reverse;
	}
</style>
