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
      border-radius: 1rem 0 0 1rem;
    }
    button:last-of-type {
      border-radius: 0 1rem 1rem 0;
    }
  </style>
  

