<script lang="ts">
    import { replaceState } from '$app/navigation';
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { getOutline } from './Outline';

    let isCollapsed = false;
    
    // This stuff handles sticky class for outline: very hacky solution. To be refactored later.
    let isSticky = false;
    $: if (browser) {
        const scrollY = window.scrollY;
        isSticky = scrollY >= 600;
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            isSticky = scrollY >= 600;
        });
    }

    $: current = $page.url.pathname;
    $: hash = $page.url.hash;
    $: outline = getOutline('/prescribing');

    const handleCollapse = () => {
        isCollapsed = !isCollapsed;
    }

    $: if (browser) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const a = document.querySelector(`a[href="#${id}"]`);
                    if (a) {
                        const selectedlink = document.querySelector('.tertiary.selected');
                        if (selectedlink) selectedlink.classList.remove('selected');
                        a.classList.add('selected');
                        replaceState(current + '#' + id, { replace: true });
                    }
                }});
            }, { rootMargin: '0px 0px -90% 0px' });

        const h1s = document.querySelectorAll('h1[id]');
        h1s.forEach(h1 => observer.observe(h1));
    }
</script>

<div class="outline" class:collapsed={isCollapsed} >
    <button class="arrow" on:click={handleCollapse} class:collapsed={isCollapsed} aria-label="Toggle Collapse"></button>
    {#if !isCollapsed}
    <h1>Outline</h1>
    <div class:sticky={isSticky}>
    {#each Object.keys(outline) as section}
            <ul>
                {#each Object.keys(outline[section]) as page}
                    <li><a data-sveltekit-noscroll href={outline[section][page].href} class="secondary" class:selected={current === outline[section][page].href}>{outline[section][page].title}</a></li>
                    <div class="bulletin" style={current === outline[section][page].href ? '' : 'display: none;'}>
                        {#each Object.keys(outline[section][page].modules) as module}
                        <li><a href={'#'+module} class="tertiary" class:selected={hash === '#'+module}>{outline[section][page].modules[module]}</a></li>
                        {/each}
                    </div>
                {/each}
            </ul>
        {/each}
    </div>
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
    .tertiary.selected, .tertiary:focus {
        font-weight: 500;
        color: var(--Pressed);
    }
    .tertiary.selected::before {
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
    .sticky{
        position: fixed;
        width: 30rem;
        top: 6rem;
    }
    .outline.collapsed {
        width: 5rem;
    }
    .outline h1 {
        width: 100%;
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