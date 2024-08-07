<script lang="ts">
  import Reader from '../../components/content/Reader.svelte';
  import type { ModuleType } from '$lib/modules';
  import { data } from '$lib/data';
  import { createSearch, searchHandler } from '$lib/search'
  import { onDestroy } from 'svelte'
  import Hero from '../../components/Hero.svelte';

  const searchModules: ModuleType[] = $data.modules.map((module: ModuleType) => ({
      ...module,
      searchTerms: `${module.title} ${module.content.data}`
    }));

  const searchStore = createSearch(searchModules);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

  onDestroy(() => {
    unsubscribe();
  });
</script>

<Hero type="icon" id="Search"/>
<form class="form">
  <input type="search" placeholder={$data.search.placeholder} bind:value={$searchStore.search}>
  <!-- <button class="primary" type="submit">{$data.search.button}</button> -->
</form>
<br><br>
<section class="reader">
  <div class="container">
    <Reader modules={$searchStore.filtered} outline={false}/>
  </div>
</section>


<style>
.form {
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
}
input {
  padding: 0.95rem;
  width: 20rem;
  background-color: #F6F7F8;
  border: 2px solid #01162740;
  transition: all 0.1s ease-in-out;
}
input::placeholder {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
}
input:hover {
  background-color: #8FD5FF;
}
input:focus {
  outline: none;
  background-color: #F6F7F8;
  border: 2px solid var(--Highlight);
}
input:first-of-type {
  border-radius: 1rem;
}
/* button:last-of-type {
  border-radius: 0 1rem 1rem 0;
} */
</style>


