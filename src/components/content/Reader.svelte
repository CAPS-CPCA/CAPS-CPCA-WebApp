<script lang="ts">
    import { getModule } from './Modules';
    import Outline from './Outline.svelte';

    let module: any = getModule('M1');
    $: content = module.content;

    function formatText(text: string[]) {
        if (!text) return '';
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
        <h1>{module.title}</h1>
        <div class="module">
            {@html formatText(content)}
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