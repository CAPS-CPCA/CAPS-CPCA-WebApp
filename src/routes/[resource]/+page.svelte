<script lang="ts">
    import {images} from '../../assets/index';
    import { userLang } from '$lib/translations';
    import {page} from '$app/stores';

    let url = $page.url.pathname;
    $: url = $page.url.pathname;
    
</script>
<section>
    <div class="container">
        {#if $userLang === 'en' && (url === '/prescribing' || url === '/prescrire')}
        <div class="text-content">
            <h1>Medication Abortion <span>Prescribing</span> Resources</h1>
            <p>If you are a <span>physician, a nurse practitioner or a midwife</span> who is currently prescribing or plans to prescribe Mifegymiso, please scroll down for information about the <i>medication, abortion counselling, clinical processes, virtual care, billing codes and inclusivity toolkits.</i></p>
            <p>If you are a <span>midwife, a nurse or a medical officer</span> who is looking for information on prescribing Mifegymiso to support your team, you are also in the right place.</p>
        </div>
        <div class="image-content">
            <img src={images.PresBanner} alt="Logo">
        </div>
        {:else if $userLang === 'fr' && (url === '/prescribing' || url === '/prescrire')}
        <div class="text-content">
            <h1>Ressources pour <span>prescrire</span> l'avortement par médicaments</h1>
            <p>Si vous êtes <span>médecins, infirmières praticiennes spécialisées et sages-femmes</span> et que vous prescrivez actuellement ou envisagez de prescrire le Mifé-Miso, veuillez faire défiler vers le bas pour obtenir des informations sur <i>les médicaments, les conseils en matière d'avortement, les processus cliniques, les soins virtuels, les codes de facturation et les boîtes à outils d'inclusivité.</i></p>
            <p>Si vous êtes <span>sages-femmes, infirmières autorisées et médecins</span> et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.</p>
        </div>
        <div class="image-content">
            <img src={images.PresBanner} alt="Logo">
        </div>
        {:else}
        <div class="container" style="flex-direction: column; align-items: center;">
            <h1>Page not found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </div>
        {/if}
    </div>
</section>

<style>
    .container {
        padding: 5rem;
        align-items: center;
        box-sizing: border-box;
    }
    .container h1 {
        padding-top: 2rem;
        font-size: 32px;
        font-weight: 700;
        color: #1f2937;
    }
    .container p {
        padding-bottom: 2rem;
        font-size: 18px;
        line-height: 1.5;
    }
    .text-content {
        flex: 2;
    }
    .text-content h1 {
        font-family: 'Inter', sans-serif;
        font-size: 2rem;
        font-weight: 700;
        color: var(--Primary);
        margin: 1rem 0;
    }
    .text-content h1 span {
        color: var(--Prescribing);
    }
    .text-content p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.35rem;
        line-height: 1.5;
    }
    .text-content p span {
        font-weight: 600;
        color: rgb(0, 116, 228);
    }
    .image-content {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .image-content img {
        max-width: 100%;
        height: auto;
    }
</style>



