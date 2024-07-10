<script lang="ts">
    import Outline from './Outline.svelte';

    export let modules:any = [];

    function formatText(text: string[]) {
        if (!text) return '';
        let formattedText = text.map((item) => {
            let formattedItem = item.replace(/(MISO | misoprostol )/g, '<span style="color: var(--MISO);">$1</span>');
            formattedItem = formattedItem.replace(/(MIFE | mifepristone )/g, '<span style="color: var(--MIFE);">$1</span>');
            formattedItem = formattedItem.replace(/\[(.*?)\]/g, '<sup>[$1]</sup>');
            formattedItem = formattedItem.replace(/(Product monograph)/g, '<a href="/" class="in">$1</a>');
            formattedItem = formattedItem.replace(/(Initial visit:|Follow-up visit:|Initial visit and follow-up visit:|Telehealth:)/g, '<span style="color: blue; font-weight: bold;">$1</span>');
            formattedItem = formattedItem.replace(/(Notes:)/g, '<span font-weight: bold;">$1</span>');
            if (formattedItem.startsWith('<h2>') || formattedItem.startsWith('<ul>') || formattedItem.startsWith('<ol>') || formattedItem.startsWith('<li>')) {
                return formattedItem;
            }
            return `<p>${formattedItem}</p>`;
        });
        return formattedText.join('');
    }
</script>

<div class="reader">
    <Outline/>
    <div class="pane">
        {#if modules.length === 0}
            <h1>No Modules Found</h1>
        {:else}
        {#each modules as module}
        <h1>{module.title}</h1>
        <div class="module">
                <div class="idholder" id={module.id}></div>
                {@html formatText(module.content)}
                {#if module.images}
                    <img src={module.images[0].src} alt="Mifegymiso"/>
                {/if}
            </div>
        {/each}
        {/if}
    </div>
</div>

<style>
    .reader {
        position: relative;
        display: flex;
        overflow: hidden;
        margin-bottom: 5rem;
        background:#cbced1;
        border: 3px solid var(--Primary);
        border-radius: 1.15rem;
    }
    .pane {
        flex: 1;
        padding: 0 4rem 4rem 4rem;
        min-height: 50rem;
    }
    h1 {
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        padding: 1.5rem 4.5rem;
        color: var(--Primary);
    }
    .pane h1 {
        margin-top: 4rem;
        background: var(--Primary);
        color: white;
    }
    .idholder {
        position: absolute;
        height: 10rem;
        top: -10rem;
        left: 0;
        right: 0;
    }
</style>