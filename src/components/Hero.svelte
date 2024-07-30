<script lang='ts'>
    import { images } from '../assets'
    import { data } from '../lib/data'
    $: hero = $data.hero;
    export let variant: 'home' | 'content' | 'icon';
    export let type: 'Prescribing' | 'Dispensing' | 'Supporting' | 'Prescrire' | 'Dispenser' | 'Soutenir' | 'About' | 'A propos';
    export let index: number = 0;
    export let reverse: boolean = false;
</script>

<!-- TODO: Semi static, needs to be updated later -->
<section class={variant}>
    {#if variant === 'home'}
    <img src={hero.home.image} alt="Medication Abortion in Canada" />
    <!-- for Prescribing -->
    {:else if type === 'Prescribing'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>Medication Abortion <span class={type}>{type}</span> Resources</h1>
            <p>If you are a <span>physician, a nurse practitioner or a midwife</span> who is currently prescribing or plans to prescribe Mifegymiso, please scroll down for information about the <i>medication, abortion counselling, clinical processes, virtual care, billing codes and inclusivity toolkits.</i></p>
            <p>If you are a <span>midwife, a nurse or a medical officer</span> who is looking for information on prescribing Mifegymiso to support your team, you are also in the right place.</p>
        </div>
        <img src={images.PrescribingIcon} alt="Logo">
    </div>
    <!-- for Dispensing -->
    {:else if type === 'Dispensing'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>Medication Abortion <span class={type}>{type}</span> Resources</h1>
            <p>If you are a <span>pharmacist or any other clinician who is currently dispensing or plans to dispense Mifegymiso</span>, please scroll down for information about the <i>medication, administration instructions, missed doses, side-effect management, insurance and inclusivity toolkits.</i></p>
        </div>
        <img src={images.DispensingIcon} alt="Logo">
    </div>
    <!-- for Supporting -->
    {:else if type === 'Supporting'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>Medication Abortion <span class={type}>{type}</span> Resources</h1>
            <p>If you are a <span>a community worker, a social worker or a counsellor, or if you are supporting your colleagues and friends</span> in taking medication abortion, please scroll down for information about <i>the medication, the consideration of different options and the process of medication abortion.</i></p>
        </div>
        <img src={images.SupportingIcon} alt="Logo">
    </div>
    <!-- for About -->
    {:else if type === 'About'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>About Us</h1>
            <p>Scroll down to learn more about <span> Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)</span>, our collaborating partners and the process we undertook to develop this website.</p>
        </div>
        <img src={images.AboutIcon} alt="Logo">
    </div>

    <!-- for Prescrire -->
    {:else if type === 'Prescrire'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>Ressources pour <span class="Prescribing">prescrire</span> l'avortement par médicaments</h1>
            <p>Si vous êtes <span>médecins, infirmières praticiennes spécialisées et sages-femmes</span> et que vous prescrivez actuellement ou envisagez de prescrire le Mifé-Miso, veuillez faire défiler vers le bas pour obtenir des informations sur <i>les médicaments, les conseils en matière d'avortement, les processus cliniques, les soins virtuels, les codes de facturation et les boîtes à outils d'inclusivité.</i></p>
            <p>Si vous êtes <span>sages-femmes, infirmières autorisées et médecins</span> et que vous recherchez des informations sur la prescription du Mifé-Miso pour soutenir votre équipe, vous êtes également au bon endroit.</p>
        </div>
        <img src={images.PrescribingIcon} alt="Logo">
    </div>
    <!-- for Dispenser -->
    {:else if type === 'Dispenser'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>Ressources pour <span class="Dispensing">dispenser</span> l'avortement par médicaments</h1>
            <p>Si vous êtes <span>pharmaciens ou tout autre clinicien qui dispense actuellement ou prévoyez de distribuer du Mifegymiso</span>, veuillez faire défiler vers le bas pour obtenir des informations sur <i>les médicaments, les instructions d'administration, les doses oubliées, la gestion des effets secondaires, l'assurance et les boîtes à outils d'inclusivité.</i></p>
        </div>
        <img src={images.DispensingIcon} alt="Logo">
    </div>
    <!-- for Soutenir -->
    {:else if type === 'Soutenir'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>Ressources pour <span class="Supporting">soutenir</span> l'avortement par médicaments</h1>
            <p>Si vous êtes <span>travailleurs communautaires, des travailleurs sociaux ou des conseillers, ou si vous aidez vos collègues et amis</span> à recourir à l'avortement par médicaments, veuillez faire défiler vers le bas pour obtenir des informations sur <i> les médicaments, l'examen des différentes options et le processus d'avortement par médicaments.</i></p>
        </div>
        <img src={images.SupportingIcon} alt="Logo">
    </div>
    <!-- for A propos -->
    {:else if type === 'A propos'}
    <div class="container base" class:reverse={reverse}>
        <div>
            <h1>À propos de nous</h1>
            <p>Faites défiler vers le bas pour en savoir plus sur <span>Canadian Abortion Provider Support – Communauté de pratique Canadienne sur l’avortement (CAPS-CPCA)</span>, nos partenaires collaborateurs, et le processus que nous avons entrepris pour développer ce site web.</p>
        </div>
        <img src={images.AboutIcon} alt="Logo">
    </div>

    <!-- for faq and search -->
    {:else if variant === 'icon' }
        <img src={hero.icon[index].image} alt="Logo">
        <h1>{hero.icon[index].title}</h1>
    {/if}
</section>

<style>
    .Prescribing {
        color: var(--Prescribing);
    }
    .Dispensing {
        color: var(--Dispensing);
    }
    .Supporting {
        color: var(--Supporting);
    }
    span {
        color: #0074e4;
        font-weight: 700;
    }
    /* variant: home */
    .home {
        flex-direction: column;
        padding: 1.5rem 3rem 3rem 3rem;
    }
    .home img {
        max-width: 1600px;
        width: 100%;
        height: auto;
        border-radius: 3rem 3rem 0 0;
    }
    /* variant: icon */
    .icon {
        gap: 2rem;
        flex-direction: column;
        padding: 3rem;
    }
    .icon img {
        max-height: 25rem;
    }
    /* variant: content */
    .base {
        gap: 3rem;
        padding: 5rem 10rem;
        align-items: center;
        box-sizing: border-box;
    }
    .base h1 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        color: var(--Primary);
        margin: 1rem 0;
        padding-top: 2rem;
        font-size: 32px;
    }
    .base p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.35rem;
        padding-bottom: 2rem;
    }
    .base img {
        max-width: 25rem;
        width: 100%;
        height: auto;
    }
    /* variant: content reverse */
    .reverse {
        flex-direction: row-reverse;
    }
</style>