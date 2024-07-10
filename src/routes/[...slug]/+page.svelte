<script lang='ts'>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { browser } from '$app/environment';
    import { getModules } from '../../components/content/Modules';
    import Reader from "../../components/content/Reader.svelte";

    $: if (browser) {
        $page.url.pathname === '/prescribing' ? goto('/prescribing/about-mifegymiso', { noScroll: true }) : null;
        $page.url.pathname === '/prescrire' ? goto('/prescrire/a-propos-du-mife-miso', { noScroll: true }) : null;
        $page.url.pathname === '/dispensing' ? goto('/dispensing/coverage-&-insurance', { noScroll: true }) : null;
        $page.url.pathname === '/dispenser' ? goto('/dispenser/couverture-et-assurance', { noScroll: true }) : null;
        $page.url.pathname === '/supporting%20roles' ? goto('/supporting%20roles/medication-abortion', { noScroll: true }) : null;
        $page.url.pathname === '/r%C3%B4les%20de%20soutien' ? goto('/r%C3%B4les%20de%20soutien/avortement-par-medicaments', { noScroll: true }) : null;
    }

    function modulePath(path:string) {
        if (path === '/prescribing/about-mifegymiso' || path === '/prescrire/a-propos-du-mife-miso') {
            return getModules(['M1','M2','M3']);
        } else if (path === '/prescribing/patient-counselling' || path === '/prescrire/counseling-de-la-personne') {
            return getModules(['M5','M6','M14','M15','M33','M16']);
        } else if (path === '/prescribing/medical-evaluation' || path === '/prescrire/evaluation-medicale') {
            return getModules(['M8','M9','M10','M11','M12','M13']);
        } else if (path === '/prescribing/assessment' || path === '/prescrire/evaluation-post-avortement') {
            return getModules(['M17','M18','M19','M20']);
        } else if (path === '/prescribing/virtual-hybrid-care' || path === '/prescrire/soins-virtuels-hybrides') {
            return getModules(['M21','M22','M14', 'M23']);
        } else if (path === '/prescribing/billing-codes' || path === '/prescrire/codes-de-facturation') {
            return getModules(['B1','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11','B12','B13']);
        } else if (path === '/prescribing/regulations-insurance-inclusivity' || path === '/prescrire/reglementation-assurance-inclusivite') {
            return getModules(['M26','M27','M28','C1','M36','M37','M38']);
        } else if (path === '/prescribing/clinical-resources' || path === '/prescrire/ressources-cliniques') {
            return getModules(['M4','M1','M3','M4','M5']);    
        } else if (path === '/dispensing/coverage-&-insurance' || path === '/prescrire/ressources-cliniques') {
            return getModules(['C1','M36','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13','C14']);
        } else if (path === '/dispensing/patient-communication' || path === '/prescrire/ressources-cliniques') {
            return getModules(['M32','M15','M33','M16','M19','M34','M20']);
        } else if (path === '/dispensing/about-mifegymiso' || path === '/prescrire/ressources-cliniques') {
            return getModules(['M1','M29','M30','M2','M3','M31']);
        } else if (path === '/dispensing/regulations-inclusivity' || path === '/prescrire/ressources-cliniques') {
            return getModules(['M26','M35','M299','M37','M38']);
        } else if (path === '/dispensing/clinical-resources' || path === '/prescrire/ressources-cliniques') {
            return getModules(['C1']);
        }
        return getModules(['M1','M2','M3','M4','M5']);
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