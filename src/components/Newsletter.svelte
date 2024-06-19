<script lang="ts">
    import {data} from '$lib/translations'
</script>

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

<style>
    .container {
        background: url(../assets/newsletter.png) no-repeat center center;
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
        width: 70%;
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