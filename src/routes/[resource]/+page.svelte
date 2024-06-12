<script lang="ts">
    import {images} from '../../assets/index';
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
        font-size: 24px;
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
            <h1>Medication Abortion <span>Prescribing</span> Resources</h1>
            <p>
                If you are a <span>physician, a nurse practitioner or a midwife</span> who is currently prescribing or plans to prescribe Mifegymiso, please scroll down for information about the <em>medication, abortion counselling, clinical processes, virtual care, billing codes and inclusivity toolkits.</em>
            </p>
            <p>
                If you are a <span>midwife, a nurse or a medical officer</span> who is looking for information on prescribing Mifegymiso to support your team, you are also in the right place.
            </p>
        </div>
        <div class="image-content">
            <img src={images.PresBanner} alt="Logo">
        </div>
    </section>
</main>

