<script lang="ts">
    export let content: string;
</script>

<div class="reader">
    <div class="outline">
        <button class="primary">Wassup</button>
    </div>
    <div class="pane">
        <div class="module">
            <h1>
                {content}
            </h1>
        </div>
    </div>
</div>

<style>
    .reader {
        overflow: hidden;
        display: flex;
        margin-bottom: 5rem;
        background:#cbced1;
        border: 3px solid var(--Primary);
        border-radius: 1.15rem;
    }
    .outline {
        width: 20%;
        background: var(--Primary);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .pane {
        width: 80%;
        padding: 1rem;
    }
</style>