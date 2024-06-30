<script lang="ts">
    $: isCollapsed = false;

    const handleCollapse = () => {
        isCollapsed = !isCollapsed;
    }

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
    <div class="outline" class:collapsed={isCollapsed}>
        <button class="arrow" on:click={handleCollapse} class:collapsed={isCollapsed} aria-label="Toggle Collapse"></button>
        {#if !isCollapsed}
            <h1>Outline</h1>
            <ul>
                <li><a href="#introduction" class="secondary">About Mifegymiso</a></li>
                <li><a href="#chapter1" class="secondary">Patient Counselling</a></li>
                <li><a href="#chapter2" class="secondary">Pre-abortion Medical Evaluation</a></li>
                <li><a href="#chapter3" class="secondary">Post-abortion Assessment</a></li>
                <li><a href="#chapter4" class="secondary">Virtual & Hybrid Care</a></li>
            </ul>
            <ul>
                <li><a href="#chapter5" class="secondary">Physician Billing Codes</a></li>
                <li><a href="#chapter6" class="secondary">Regulations, Insurance & Inclusivity Toolkits</a></li>
                <li><a href="#chapter7" class="secondary">Guidelines, Checklists & Toolkits</a></li>
            </ul>
        {/if}
    </div>
    <div class="pane">
        <h1>Mechanism of Action</h1>
        <div class="module">
            {@html formatText(testText)}
            <img src="https://via.placeholder.com/800x400" alt="Mifegymiso"/>
        </div>
    </div>
</div>

<style>
    button {
        padding: 0;
        margin: 0;
        background: none;
        border: none;
        cursor: pointer;
    }
    ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
        gap: 1.5rem;
        margin: 0;
        padding: 1.5rem 0;
        border-bottom: 1px solid var(--Primary);
    }
    li {
        padding: 0 1.5rem;
    }
    .reader {
        display: flex;
        overflow: hidden;
        margin-bottom: 5rem;
        background:#cbced1;
        border: 3px solid var(--Primary);
        border-radius: 1.15rem;
    }
    .outline {
        position: relative;
        max-width: 100%;
        min-width: 5rem;
        display: flex;
        background: #F6F7F8;
        border-right: 1px solid var(--Primary);
        flex-direction: column;
        align-items: center;
        transition: max-width 0.5s ease-out;
    }
    .outline.collapsed {
        max-width: 0%;
    }
    .outline > * {
        width: 100%;
    }
    .outline h1 {
        border-bottom: 1px solid var(--Primary);
        box-sizing: border-box;
        text-align: center;
    }
    .arrow {
        position: absolute;
        right: 1rem;
        top: 2rem;
        width: 0;
        height: 0;
        border-left: 1.5rem solid transparent;
        border-right: 1.5rem solid transparent;
        border-top: 1.5rem solid var(--Primary);
        transform: rotate(90deg) scale(0.75);
    }
    .arrow.collapsed {
        transform: rotate(-90deg) scale(0.75);
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