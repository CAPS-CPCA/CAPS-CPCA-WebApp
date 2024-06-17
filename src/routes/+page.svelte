<script lang="ts">
    import Cards from '../components/Cards.svelte';
    import Survey from '../components/Survey.svelte';
    import Newsletter from '../components/Newsletter.svelte';
    import AboutSogc from '../components/AboutSOGC.svelte';
    import {images} from '../assets/index';
</script>

<section class="hero">
    <img src={images.EnBanner} alt="Medication Abortion in Canada" />
</section>
<section class="cards">
    <Cards />
</section>
<section class="survey">
    <Survey />
</section>
<section class="newsletter">
    <Newsletter />
</section>
<section class="aboutSOGC">
    <AboutSogc />
</section>
<style>
    .hero {
        flex-direction: column;
        padding: 1.5rem 3rem 3rem 3rem;
    }
    .cards {
        background: radial-gradient(148.27% 200.49% at 44.09% 11.06%, #011627 0%, #4E7385 100%);
    }
    .survey {
        padding: 6.25rem;
    }
    .newsletter {
        background: radial-gradient(148.27% 200.49% at 44.09% 11.06%, #011627 0%, #4E7385 100%);
        color: white;
    }
    img {
        max-width: 1600px;
        width: 100%;
        height: auto;
        border-radius: 3rem 3rem 0 0;
    }
</style>