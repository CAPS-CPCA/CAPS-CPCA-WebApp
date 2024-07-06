<script lang="ts">
    import {data} from '$lib/data'
</script>

<section class="newsletter">
  <div class="container">
      <div class="card">
          <h1>{$data.newsletter.title}</h1>
          <p>{$data.newsletter.para}</p>
      </div>
      <div class="card">
          <form class="form">
              <input type="email" placeholder="john.doe@email.com">
              <button class="primary" type="submit">{$data.newsletter.button}</button>
          </form>
      </div>
  </div>
</section>

<style>
    .newsletter {
        background: radial-gradient(148.27% 200.49% at 44.09% 11.06%, #011627 0%, #4E7385 100%);
        color: white;
    }
    .container {
        background: url(../../assets/newsletter.png) no-repeat center center;
        background-size: contain;
    }
    .card {
        display: flex;
        justify-content: center;
        padding: 7rem;
        flex-direction: column;
        gap: 2.5rem;
        transition: all 0.3s ease-in-out;
    }
    .card h1, .card p {
        color: white;
    }
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