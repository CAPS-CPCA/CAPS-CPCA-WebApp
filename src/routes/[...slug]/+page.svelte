<script lang='ts'>
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { browser } from '$app/environment';
    import { getModules } from '../../components/content/Modules';
    import Reader from "../../components/content/Reader.svelte";

    $: if (browser) {
        $page.url.pathname === '/prescribing' ? goto('/prescribing/about-mifegymiso') : null;
        $page.url.pathname === '/dispensing' ? goto('/dispensing/coverage-&-insurance') : null;
        $page.url.pathname === '/supporting%20roles' ? goto('/supporting%20roles/medication-abortion') : null;
    }

    function modulePath(path:string) {
        if (path === '/prescribing/about-mifegymiso') {
            return getModules(['M1','M2','M3']);
        } else if (path === '/prescribing/patient-counselling') {
            return getModules(['M5','M6','M14','M15','M33','M16']);
        } else if (path === '/prescribing/medical-evaluation') {
            return getModules(['M3','M2','M3','M4','M5']);
        } else if (path === '/prescribing/assessment') {
            return getModules(['M4','M2','M3','M4','M5']);
        } else if (path === '/prescribing/virtual-hybrid-care') {
            return getModules(['M1','M1','M3','M4','M5']);
        } else if (path === '/prescribing/billing-codes') {
            return getModules(['M2','M1','M3','M4','M5']);
        } else if (path === '/prescribing/regulations-insurance-inclusivity') {
            return getModules(['M3','M1','M3','M4','M5']);
        } else if (path === '/prescribing/clinical-resources') {
            return getModules(['M4','M1','M3','M4','M5']);
        } return getModules(['M1','M2','M3','M4','M5']);
    }

    $: path = $page.url.pathname;
</script>

<section class="reader">
    <div class="container">
        {#if $page.url.pathname === path}
            <Reader modules={modulePath(path)} />
        {:else}
            <Reader/>
        {/if}
    </div>
</section>

<style>
    section.reader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>