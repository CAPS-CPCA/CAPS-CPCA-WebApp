<script lang="ts">
import { formatText } from '$lib/modules';
import Outline from './Outline.svelte';

    export let modules:any = [];
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
                {#each module.content as obj}
                    {#if obj.type === 'p'  || obj.type === 'h2' || obj.type === 'ul' || obj.type === 'ol'}
                        {@html '<'+ obj.type + '>' + formatText(obj.data, obj.type) + '</'+ obj.type + '>'}
                    {:else if obj.type === 'img'}
                        <img src={obj.data.src} alt={obj.data.alt} />
                    {:else if obj.type === 'ol-2'}
                        <ol>{#each obj.data as item}
                            {#if typeof item === 'string'}
                                <li>{item}</li> 
                            {:else if item.type === 'ul'}
                                <ul>{#each item.data as subitem}
                                    <li>{subitem}</li>
                                {/each}</ul>
                            {:else if item.type === 'p'}
                                <li><p>{@html formatText(item.data, item.type)}</p></li>
                            {:else if item.type === 'img'}
                                <li class="no-count"><img src={item.data.src} alt={item.data.alt} /></li>
                            {/if}
                        {/each}</ol>
                    {:else if obj.type === 'ul-2'}
                        <ul>{#each obj.data as item}
                            {#if typeof item === 'string'}
                                <li>{item}</li> 
                            {:else if item.type === 'ul'}
                                <ul>{#each item.data as subitem}
                                    <li>{subitem}</li>
                                {/each}</ul>
                            {:else if item.type === 'p'}
                                <li><p>{@html formatText(item.data, item.type)}</p></li>
                            {:else if item.type === 'img'}
                                <li class="no-count"><img src={item.data.src} alt={item.data.alt} /></li>
                            {/if}
                        {/each}</ul>
                    {/if}
                {/each}
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