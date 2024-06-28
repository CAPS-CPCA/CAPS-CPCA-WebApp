<script lang="ts">
    import Hero from '../../components/Hero.svelte';
    import {page} from '$app/stores';

    $: path = $page.url.pathname;

    const heroConfig: any = {
        '/prescribing': { variant: 'content', index: 0, reverse: true },
        '/prescrire': { variant: 'content', index: 0, reverse: true },
        '/dispensing': { variant: 'content', index: 1 },
        '/dispenser': { variant: 'content', index: 1 },
        '/supporting%20roles': { variant: 'content', index: 2, reverse: true },
        '/r%C3%B4les%20de%20soutien': { variant: 'content', index: 2, reverse: true }
    };

    $: hero = heroConfig[path] || {};
</script>
{#if hero}
    <Hero {...hero} />
{/if}
<slot/>