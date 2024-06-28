<script lang="ts">
    import Hero from '../../components/Hero.svelte';
    import {page} from '$app/stores';

    $: path = $page.url.pathname;

</script>
{#if path === '/prescribing' || path === '/prescrire'}
    <Hero variant="content" index={0} reverse/>
{:else if path === '/dispensing' || path === '/dispenser'}
    <Hero variant='content' index={1}/>
{:else if path === '/supporting%20roles' || path === '/r%C3%B4les%20de%20soutien'}
    <Hero variant='content' index={2} reverse/>
{/if}

<slot/>