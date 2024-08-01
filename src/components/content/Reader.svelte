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
                {#each module.content as content}
                    {#if content.type === 'p'}
                        {#each content.data as para}
                            <p>{@html formatText(para)}</p>
                        {/each}
                    {:else if content.type === 'h2'}
                        <h2>{content.data}</h2>
                    {:else if content.type === 'ul'}
                        <ul>
                            {#each content.data as item}
                                <li>{@html formatText(item)}</li>
                            {/each}
                        </ul>
                    {:else if content.type === 'ol'}
                        <ol>
                            {#each content.data as item}
                                <li>{item}</li>
                            {/each}
                        </ol>
                    {:else if content.type === 'img'}
                        <img src={content.data.src} alt={content.data.alt}/>
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