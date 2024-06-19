<script lang="ts">
    import {images} from '../../assets/index';
    import { data } from '$lib/translations';
</script>

<style>
    .content {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text-content {
        flex: 1;
    }

    .text-content h1 {
        font-size: 32px; 
        font-weight: 700;
        color: #1f2937; 
    }

    .text-content h1 span {
        color: #ff007f;
    }

    .text-content p {
        font-size: 18px;
        line-height: 1.5;
    }

    .text-content p span {
        color: #007bff;
    }

    .text-content p em {
        font-style: italic;
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

<main>
    <section class="content">
        <div class="text-content">
            <h1>{@html $data.prescribing.title}</h1>
            {#each $data.prescribing.paragraphs as paragraph}
                <p>{@html paragraph}</p>
            {/each}
        </div>
        <div class="image-content">
            <img src={images.PresBanner} alt="Logo">
        </div>
    </section>
</main>

