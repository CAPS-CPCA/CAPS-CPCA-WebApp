<script lang="ts">
    import Hero from '../components/Hero.svelte';
    import Cards from '../components/homepage/Cards.svelte';
    import Survey from '../components/homepage/Survey.svelte';
    import Newsletter from '../components/homepage/Newsletter.svelte';
    import AboutSogc from '../components/homepage/AboutSOGC.svelte';
</script>

<Hero variant="home"/>
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
</style>