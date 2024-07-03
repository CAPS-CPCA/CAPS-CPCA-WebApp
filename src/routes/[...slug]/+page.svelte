<script lang='ts'>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { getModules } from '../../components/content/Modules';
    import Reader from "../../components/content/Reader.svelte";

    $: onMount(() => {
    if ($page.url.pathname === '/prescribing') {
            goto('/prescribing/about-mifegymiso');
        }
    });

    const aboutmifegymiso = getModules(['M1','M2','M3','M4','M5']);
</script>

<section class="reader">
    <div class="container">
        {#if $page.url.pathname === '/prescribing/about-mifegymiso'}
            <Reader modules={aboutmifegymiso} />
        {:else}
            <Reader/>
        {/if}
    </div>
</section>

<style>
    .reader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>