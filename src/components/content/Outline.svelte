<script lang="ts">
    let isCollapsed = false;
    let isHidden = true;

    const handleCollapse = () => {
        isCollapsed = !isCollapsed;
    }
</script>

<div class="outline" class:collapsed={isCollapsed}>
    <button class="arrow" on:click={handleCollapse} class:collapsed={isCollapsed} aria-label="Toggle Collapse"></button>
    {#if !isCollapsed}
        <h1>Outline</h1>
        <ul>
            <li><a href="#introduction" class="secondary" on:click={() => isHidden = !isHidden}>About Mifegymiso</a></li>
            <div class="bulletin" style={isHidden ? 'display: none;' : ''}>
                <li><a href="#chapter1" class="tertiary">Mechanism of Action</a></li>
                <li><a href="#chapter2" class="tertiary">Efficacy & Safety</a></li>
                <li><a href="#chapter3" class="tertiary">Indication & Contraindications</a></li>
            </div>
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