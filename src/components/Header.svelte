<script lang="ts">
    let list: { [key: string]: string | string[] } = { '/': 'Home', content: ['Prescribing', 'Dispensing', 'Supporting Roles'], faqs: 'FAQ', about: 'About', search: '🔍'}
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
            {#each Object.keys(list) as key}
                {#if key === 'content'}
                    {#each list[key] as item}
                        <li><a href={item.toLowerCase()}>{item}</a></li>
                    {/each}
                {:else}
                    <li><a href={key}>{list[key]}</a></li>
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