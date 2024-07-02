<script lang="ts">
    import Hero from '../../components/Hero.svelte';
    import {page} from '$app/stores';

    interface HeroConfig {
        variant: "content" | "home" | "icon";
        index: number;
        reverse?: boolean;
    }

    function getHeroConfig(path: string): HeroConfig | undefined {
        if ((path.startsWith('/prescribing')) || (path.startsWith('/prescrire'))) {
            return { variant: 'content', index: 0, reverse: true };
        } else if ((path.startsWith('/dispensing')) || (path.startsWith('/dispenser'))) {
            return { variant: 'content', index: 1 };
        } else if ((path.startsWith('/supporting%20roles')) || (path.startsWith('/r%C3%B4les%20de%20soutien'))) {
            return { variant: 'content', index: 2, reverse: true };
        }
    }

    $: path = $page.url.pathname;
    $: hero = getHeroConfig(path);
</script>

{#if hero}
    <Hero {...hero} />
{/if}
<slot />