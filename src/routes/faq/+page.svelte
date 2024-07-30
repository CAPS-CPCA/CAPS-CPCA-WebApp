<script lang='ts'>
    import { modulePath } from '$lib/modules';
    import { data } from '$lib/data';
    import { page } from '$app/stores';
    import Hero from "../../components/Hero.svelte";
    import Reader from "../../components/content/Reader.svelte";
</script>

<Hero variant="icon" index={0}/>
<section class="reader">
    <div class="container">
        <Reader modules={modulePath($page.url.pathname, $data.modules)} />
    </div>
</section>