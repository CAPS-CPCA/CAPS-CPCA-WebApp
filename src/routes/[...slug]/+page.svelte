<script lang='ts'>
    import { redirect } from '$lib/data';
    import { data } from '$lib/data';
    import { modulePath } from '$lib/modules';
    import { page } from '$app/stores';
    import { Bibliography } from '$lib/store';
    import Reader from "../../components/content/Reader.svelte";

    $: redirect($page.url.pathname);
    $: modules = $data.modules;

    function getRefs(path: string) {
        const refMap: { [key: string]: number[] } = {
            'about-mifegymiso': [5,6,7,10,11,13,21],
            'a-propos-du-mife-miso': [5,6,7,10,11,13,21],
            'patient-counselling': [2,4,6,7,10],
            'counseling-de-la-personne': [2,4,6,7,10],
            'medical-evaluation': [6,8,20],
            'evaluation-medicale': [6,8,20],
            'assessment': [3,6,7,],
            'evaluation-post-avortement': [3,6,7],
            'virtual-hybrid-care': [2,4,5,6,7,10,19],
            'soins-virtuels-hybrides': [2,4,5,6,7,10,19],
            'regulations-insurance-inclusivity': [1,2,12,16],
            'reglements-assurance-inclusivite': [1,2,12,16],

            'patient-communication': [6,9,10],
            'communication': [6,9,10],
            'regulations-inclusivity': [1,2,16],
            'reglements-inclusivite': [1,2,16],

            'medication-abortion': [2,5,6,7,11,13,14,15,18],
            'avortement-par-medicaments': [2,5,6,7,11,13,14,15,18],
            'client-counselling': [2,6,10],
            'counseling-de-la-client': [2,6,10],
        };
        for (const key in refMap) {
            if (path.includes(key)) {
                return refMap[key];
            }
        }
        return [];
    }

    $: refs = getRefs($page.url.pathname);
</script>

<section class="reader">
    <div class="container">
            <Reader modules={modulePath($page.url.pathname, modules)}/>
    </div>
</section>
{#if refs.length > 0}
<section id="ref">
    <div class="module references">
        <h2>References</h2>
        {#each refs as ref}
            <li><a href={Bibliography.filter((item) => item.index === ref)[0].href} target="_blank" class="ref"><b>{ref}</b> — {Bibliography.filter((item) => item.index === ref)[0].title}</a></li>
        {/each}
    </div>
</section>
{/if}

<style>
    .references {
        border-radius: 1.15rem 1.15rem 0 0;
        box-sizing: border-box;
        width: 1600px;
        padding: 3.5rem 10rem;
    }
    .references li {
        list-style: none;
    }
    .references h2 {
        text-align: center;
    }
    section.reader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>