<script lang='ts'>
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { onMount } from 'svelte';
import Reader from "../../components/content/Reader.svelte";

onMount(() => {
    $page.url.pathname === '/prescribing' && goto('/prescribing/about-mifegymiso');
});
</script>

<section class="reader">
    <div class="container">
        <Reader />
    </div>
</section>

<style>
    .reader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>