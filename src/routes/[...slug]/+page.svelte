<script lang='ts'>
    import { redirect } from '$lib/data';
    import { data } from '$lib/data';
    import { page } from '$app/stores';
    import Reader from "../../components/content/Reader.svelte";

    $: redirect($page.url.pathname);

    function getModules(ids: string[], modules: any) {
        const moduleMap = new Map(modules.map((module: any) => [module.id, module]));
        return ids.map((id) => moduleMap.get(id)).filter(Boolean);
    }

    function modulePath(path: string) {
        const modulePaths: { [key: string]: string[] } = {
            '/prescribing/about-mifegymiso': ['M1', 'M2', 'M3'],
            '/prescrire/a-propos-du-mife-miso': ['M1', 'M2', 'M3'],
            '/prescribing/patient-counselling': ['M5', 'M6', 'M14', 'M15', 'M33', 'M16'],
            '/prescrire/counseling-de-la-personne': ['M5', 'M6', 'M14', 'M15', 'M33', 'M16'],
            '/prescribing/medical-evaluation': ['M8', 'M9', 'M10', 'M11', 'M12', 'M13'],
            '/prescrire/evaluation-medicale': ['M8', 'M9', 'M10', 'M11', 'M12', 'M13'],
            '/prescribing/assessment': ['M17', 'M18', 'M19', 'M20'],
            '/prescrire/evaluation-post-avortement': ['M17', 'M18', 'M19', 'M20'],
            '/prescribing/virtual-hybrid-care': ['M21', 'M22', 'M14', 'M23'],
            '/prescrire/soins-virtuels-hybrides': ['M21', 'M22', 'M14', 'M23'],
            '/prescribing/billing-codes': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13'],
            '/prescrire/codes-de-facturation': ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12', 'B13'],
            '/prescribing/regulations-insurance-inclusivity': ['M26', 'M27', 'M28', 'C1', 'M36', 'M37', 'M38'],
            '/prescrire/reglementation-assurance-inclusivite': ['M26', 'M27', 'M28', 'C1', 'M36', 'M37', 'M38'],
            '/prescribing/clinical-resources': [''],
            '/prescrire/ressources-cliniques': [''],
            '/dispensing/coverage-&-insurance': ['C1', 'M36', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
            '/dispenser/couverture-et-assurance': ['C1', 'M36', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14'],
            '/dispensing/patient-communication': ['M32', 'M15', 'M33', 'M16', 'M19', 'M34', 'M20'],
            '/dispenser/communication': ['M32', 'M15', 'M33', 'M16', 'M19', 'M34', 'M20'],
            '/dispensing/about-mifegymiso': ['M1', 'M29', 'M30', 'M2', 'M3', 'M31'],
            '/dispenser/a-propos-du-mife-miso': ['M1', 'M29', 'M30', 'M2', 'M3', 'M31'],
            '/dispensing/regulations-inclusivity': ['M26', 'M35', 'M299', 'M37', 'M38'],
            '/dispenser/reglements-inclusivite': ['M26', 'M35', 'M299', 'M37', 'M38'],
            '/dispensing/clinical-resources': [''],
            '/dispenser/ressources-cliniques': [''],
            '/supporting%20roles/medication-abortion': ['M39', 'M3', 'M40', 'M41'],
            '/r%C3%B4les%20de%20soutien/avortement-par-medicaments': ['M39', 'M3', 'M40', 'M41'],
            '/supporting%20roles/client-counselling': ['M42', 'M43', 'M15', 'M33', 'M16', 'M44'],
            '/r%C3%B4les%20de%20soutien/counseling-de-la-personne': ['M42', 'M43', 'M15', 'M33', 'M16', 'M44'],
            '/supporting%20roles/resources': [''],
            '/r%C3%B4les%20de%20soutien/ressources': ['']
        };

        return getModules(modulePaths[path] || [''], $data.modules);
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