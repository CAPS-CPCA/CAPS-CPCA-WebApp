<script lang='ts'>
    import { data } from '../lib/translations';
</script>

<div class="container">
    <div class="card">
        <h1>{$data.survey.title}</h1>
        {#each $data.survey.para as para}
            <p>{para}</p>
        {/each}
        <button class="primary">{$data.survey.button}</button>
    </div>
    <img src={$data.survey.image} alt="Survey" />
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        padding: 4rem 7rem;
        gap: 3rem;
        transition: all 0.3s ease-in-out;
    }
    img {
        margin-right: 4rem;
        transition: all 0.3s ease-in-out;
    }
    img:hover{
        transform: scale(1.1);
    }
</style>
