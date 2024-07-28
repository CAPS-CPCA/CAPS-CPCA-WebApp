<script lang='ts'>
    import Hero from "../../components/Hero.svelte";
    import Reader from "../../components/content/Reader.svelte";
</script>

<Hero variant="icon" index={0}/>
<section class="reader">
    <div class="container">
        <Reader/>
    </div>
</section>