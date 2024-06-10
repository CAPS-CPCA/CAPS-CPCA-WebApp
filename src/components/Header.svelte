<script lang='ts'>
    import { Header } from './header';
    import {images} from '../assets/index';
    let header = new Header('en');
    let partnersList = header.partners;
    let navList = header.navigation;

    function langHandler() {
        header.toggleLang();
        partnersList = header.partners;
        navList = header.navigation;
    }
</script>

<header>
    <div class="partner-sites">
        <ul>
            {#each Object.entries(partnersList) as [key, value]}
                <li><a href={key}>{value}</a></li>
            {/each}
        </ul>
    </div>
    <nav>
        <ul>
            <div class="logo">
                <img src={images.EnSOGC} alt="The Weather Network Logo" />
            </div>
            {#each Object.entries(navList) as [key, value]}
                {#if key === 'content'}
                    {#each value as i}
                        <li><a href={i.toLowerCase()}>{i}</a></li>
                    {/each}
                {:else if key === 'exit'}
                    <li><a href="https://www.theweathernetwork.com/ca" target="_self"><span id="exit">{value}</span></a></li>
                {:else if key === 'lang'}
                    <li><button on:click={langHandler}>{value}</button></li>
                {:else}
                    <li><a href={key}>{value}</a></li>
                {/if}
            {/each}
        </ul>
    </nav>
</header>

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
    .logo {
        position: absolute;
        top: 0;
        left: 0;
    }
    button {
        background: none;
        border: 1px solid var(--Background);
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 500;
        color: var(--Background);
        cursor: pointer;
    }
    .partner-sites {
        height: auto;
        display: flex;
        justify-content: center;
        gap: 1rem;
        background: white;
    }
    .partner-sites ul li:first-of-type {
        display: flex;
        align-items: center;
        padding: 0px 2rem;
        height: 3rem;
        background: var(--Primary);
    }
    .partner-sites ul li:first-of-type a {
        color: var(--Background);
    }
    .partner-sites ul li a{
        font-family: 'Roboto', sans-serif;
        font-size: 0.95rem;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--Primary);
        text-decoration: none;
    }
    .partner-sites ul li a:hover {
        color: var(--Highlight);
    }
    nav {
        height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--Primary);
        border-bottom: 1px solid var(--Pressed);
    }
    ul {
        margin: 0;
        position: relative;
        height: 100%;
        display: flex;
        width: 1200px;
        align-items: center;
        justify-content: flex-end;
        gap: 2rem;
        list-style-type: none;
    }
    ul li {
        font-family: 'Roboto', sans-serif;
        font-size: 0.95rem;
        font-weight: 400;
        text-transform: uppercase;
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
    #exit {
        color: white;
        background: #9E1A30;
        padding: 0px 15px;
        border-radius: 4px;
    }
    #exit:hover {
        color: white;
        background: #EE4B6A;
    }
</style>