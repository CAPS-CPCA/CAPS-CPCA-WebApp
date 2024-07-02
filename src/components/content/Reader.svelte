<script lang="ts">
    import Outline from './Outline.svelte';

    const testText = ["In Canada, the medication abortion pills are packaged and sold as Mifegymiso. Mifegymiso comes in an outer white box, containing two smaller boxes: a green box containing mifepristone 200 mg (MIFE) and an orange box containing misoprostol 800 mcg (MISO) (four small tablets of 200 mcg each)[10].","MIFE is a progesterone receptor modulator. It is a potent anti-progestin that also exhibits strong antiglucocorticoid and weak antiandrogenic properties. It blocks progesterone receptors in early pregnancy, which leads to endometrial degeneration, synthesis of prostaglandins, and decline in beta-human chorionic gonadotropin (βhCG) secretion. These events promote cervical dilation and facilitate the onset of bleeding[10].","MISO is a potent synthetic prostaglandin E1 that induces cervical ripening and uterine contractions, which cause the pregnancy tissues to leave the body[10].","Click here to download the Product monograph."]

    // Function to format text: 1) wrap each element with <p> tag, 2) wrap (MISO) / MISO with <span style="color: var(--MISO);"> and </span> tags, 3) wrap (MIFE) / MIFE with <span style="color: var(--MIFE);"> and </span> tags, 4) wrap [*] with <sup> and </sup> tags, 5) wrap Product monograph with <a href="/" class="in"> and </a> tags
    function formatText(text: string[]) {
        let formattedText = text.map((item) => {
            let formattedItem = item.replace(/(MISO)/g, '<span style="color: var(--MISO);">$1</span>');
            formattedItem = formattedItem.replace(/(MIFE)/g, '<span style="color: var(--MIFE);">$1</span>');
            formattedItem = formattedItem.replace(/\[(.*?)\]/g, '<sup>[$1]</sup>');
            formattedItem = formattedItem.replace(/(Product monograph)/g, '<a href="/" class="in">$1</a>');
            return `<p>${formattedItem}</p>`;
        });
        return formattedText.join('');
    }
</script>

<div class="reader">
    <Outline/>
    <div class="pane">
        <h1>Mechanism of Action</h1>
        <div class="module">
            {@html formatText(testText)}
            <img src="https://via.placeholder.com/800x400" alt="Mifegymiso"/>
        </div>
    </div>
</div>

<style>
    .reader {
        display: flex;
        overflow: hidden;
        margin-bottom: 5rem;
        background:#cbced1;
        border: 3px solid var(--Primary);
        border-radius: 1.15rem;
    }
    .pane {
        flex: 1;
        padding: 4rem;
    }
    h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding: 1.5rem 4.5rem;
        color: var(--Primary);
    }
    .pane h1 {
        background: var(--Primary);
        color: white;
    }
</style>