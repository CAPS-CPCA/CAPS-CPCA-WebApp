<script lang='ts'>
    import { data } from '../lib/translations'

    $: hero = $data.hero;
    
    export let variant: string;
    export let index: number;
    export let reverse: boolean = false;
</script>

<section class={variant}>
    {#if variant === 'home'}
    <img src={hero.home.image} alt="Medication Abortion in Canada" />
    {:else if variant === 'content'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>{@html hero.content[index].title}</h1>
            {#if typeof hero.content[index].paragraphs === 'string'}
                <p>{@html hero.content[index].paragraphs}</p>
            {:else if typeof hero.content[index].paragraphs === 'object'}
                {#each hero.content[index].paragraphs as paragraph}
                    <p>{@html paragraph}</p>
                {/each}
            {/if}
        </div>
        <img src={hero.content[index].image} alt="Logo">
    </div>
    {:else if variant === 'icon'}
        <img src={hero.icon[index].image} alt="Logo">
        <h1>{@html hero.icon[index].title}</h1>
    {/if}
</section>

<style>
    /* variant: home */
    .home {
        flex-direction: column;
        padding: 1.5rem 3rem 3rem 3rem;
    }
    .home img {
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
    /* .base divp span {
        font-weight: 600;
        color: rgb(0, 116, 228);
    } */
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