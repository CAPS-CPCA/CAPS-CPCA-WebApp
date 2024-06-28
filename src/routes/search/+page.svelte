<script lang="ts">
    import Hero from '../../components/Hero.svelte';
    import { data } from '$lib/translations';
  </script>
  
    <Hero variant="icon" index={1}/>
    <form class="form">
      <input type="search" placeholder={$data.search.placeholder}>
      <button class="primary" type="submit">{$data.search.button}</button>
    </form>

  <style>
    .form {
        display: flex;
        height: 4rem;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 20rem;
        font-family: 'Open Sans', sans-serif;
        font-style: italic;
        color: #69727d;
        padding: 1rem;
        border: 1px solid #69727d;
        transition: all 0.1s ease-in-out;
    }
    input:focus {
        outline: none;
        border: 1px solid var(--Highlight);
    }
    input:first-of-type {
        border-radius: 1rem 0 0 1rem;
    }
    button:last-of-type {
        border-radius: 0 1rem 1rem 0;
    }
  </style>
  

