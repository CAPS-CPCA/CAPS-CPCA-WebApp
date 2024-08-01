<script lang='ts'>
    import { redirect } from '$lib/data';
    import { data } from '$lib/data';
    import { modulePath } from '$lib/modules';
    import { page } from '$app/stores';
    import Reader from "../../components/content/Reader.svelte";

    $: redirect($page.url.pathname);
    $: modules = $data.modules;
</script>

<section class="reader">
    <div class="container">
            <Reader modules={modulePath($page.url.pathname, modules)}/>
    </div>
</section>

<style>
    section.reader {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>