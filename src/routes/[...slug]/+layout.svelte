<script lang="ts">
    import { page } from '$app/stores';
    import { getHeroConfig } from '$lib/store';
    import Hero from '../../components/Hero.svelte';

    $: hero = getHeroConfig($page.url.pathname);
</script>

{#if hero}
    <Hero {...hero} />
{/if}
<slot />