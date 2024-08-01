<script lang="ts">
    import { page } from '$app/stores';
    import Hero from '../../components/Hero.svelte';
    
    function setID(url: string) {
        return url.includes('prescribing') || url.includes('prescrire') ? 'P' :
            url.includes('dispensing') || url.includes('dispenser') ? 'D' :
            url.includes('supporting') || url.includes('soutien') ? 'S' :
            url.includes('about') || url.includes('a-propos') ? 'A' :
            'P';
    }
    $: id = setID($page.url.pathname);

</script>

<Hero type="content" id={id} />
<slot />