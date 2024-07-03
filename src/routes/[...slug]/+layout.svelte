<script lang="ts">
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { getHeroConfig } from '$lib/store';
    import Hero from '../../components/Hero.svelte';

    if ($page.url.pathname === '/prescribing') {
        goto('/prescribing/about-mifegymiso');
    }

    $: hero = getHeroConfig($page.url.pathname);
</script>

{#if hero}
    <Hero {...hero} />
{/if}
<slot />