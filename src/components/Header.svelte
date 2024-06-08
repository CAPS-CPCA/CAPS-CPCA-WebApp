<script lang='ts'>
    import { Header } from './header';
    let header = new Header('en');
    let list = header.navigation;

    function langHandler() {
        header.toggleLang();
        list = header.navigation;
    }
</script>

<section class="header">
    <div class="partner-sites focus">
        <ul>
            <li>Medication Abortion</li>
            <li>sogc.org</li>
        </ul>
    </div>
    <nav>
        <ul>
            {#each Object.entries(list) as [key, value]}
                {#if key === 'content'}
                    {#each value as item}
                        <li><a href={item.toLowerCase()}>{item}</a></li>
                    {/each}
                {:else if key === 'exit'}
                    <li><a href="https://www.theweathernetwork.com/ca" target="_self">{value}</a></li>
                {:else if key === 'lang'}
                    <li><button on:click={langHandler}>{value}</button></li>
                {:else}
                    <li><a href={key}>{value}</a></li>
                {/if}
            {/each}
        </ul>
    </nav>
</section>

<style>
/* Specific Sheet for Navigation bar */
    /* * {
        box-sizing: border-box;
        border: 1px solid gray;
    } */
    /* .focus {
        box-sizing: border-box;
        border: 1px solid greenyellow;
    } */
    .partner-sites {
        height: 45px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        background: white;
    }
    nav {
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--Primary);
    }
    ul {
        gap: 2rem;
        display: flex;
        list-style-type: none;
    }
    ul li a {
        letter-spacing: 1px;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 500;
        text-decoration: none;
        text-transform: uppercase;
        color: var(--Background);
        transition: all 0.3s ease-in-out;
    }
    ul li a:hover {
        color: var(--Highlight);
    }
</style>