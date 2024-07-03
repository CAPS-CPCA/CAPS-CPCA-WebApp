<script lang="ts">
    import { page } from '$app/stores';
    import { getOutline } from './Outline';

    let isCollapsed = false;

    $: current = $page.url.pathname;
    $: outline = getOutline('/prescribing');

    const handleCollapse = () => {
        isCollapsed = !isCollapsed;
    }
</script>

<div class="outline" class:collapsed={isCollapsed}>
    <button class="arrow" on:click={handleCollapse} class:collapsed={isCollapsed} aria-label="Toggle Collapse"></button>
    {#if !isCollapsed}
        <h1>Outline</h1>
        {#each Object.keys(outline) as section}
            <ul>
                {#each Object.keys(outline[section]) as page}
                    <li><a data-sveltekit-noscroll href={outline[section][page].href} class="secondary" class:selected={current === outline[section][page].href}>{outline[section][page].title}</a></li>
                    <div class="bulletin" style={current === outline[section][page].href ? '' : 'display: none;'}>
                        {#each Object.keys(outline[section][page].modules) as module}
                        <li><a href={'#'+module} class="tertiary">{outline[section][page].modules[module]}</a></li>
                        {/each}
                    </div>
                {/each}
            </ul>
        {/each}
    {/if}
</div>

<style>
    .tertiary {
        font-family: 'Roboto', sans-serif;
        color: var(--Primary);
        font-weight: 400;
        font-size: 1.15rem;
        transition: all 0.1s ease-in-out;
    }
    .tertiary:hover {
        color: var(--Highlight);
    }
    .tertiary:focus {
        font-weight: 500;
        color: var(--Pressed);
    }
    .tertiary:focus::before {
        content: '>';
        margin-right: 0.5rem;
    }
    .bulletin {
        display: flex;
        flex-direction: column;
        margin-left: 2.5rem;
        border-left: 0.3rem solid var(--Primary);
        gap: 0.5rem;
    }
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
    .outline {
        position: relative;
        width: 30rem;
        display: flex;
        background: #F6F7F8;
        border-right: 1px solid var(--Primary);
        flex-direction: column;
        align-items: center;
        transition: all 0.1s ease-in-out;
    }
    .outline.collapsed {
        width: 5rem;
    }
    .outline > * {
        width: 100%;
    }
    .outline h1 {
        padding: 1.5rem 4.5rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        border-bottom: 1px solid var(--Primary);
        box-sizing: border-box;
        text-align: center;
        color: var(--Primary);
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
</style>