<script lang="ts">
</script>

<div class="container">
    <div class="card">
        <h1>Stay in the loop</h1>
        <p>Sign up to our newsletter and learn about multiple ways to be part of our community.
        </p>
    </div>
    <form class="card">
        <input type="email" placeholder="john.doe@email.com">
        <button class="primary" type="submit">Subscribe</button>
    </form>
</div>

<style>
    .container {
        background: url(../assets/newsletter.png) no-repeat center center;
        background-size: contain;
    }
    .card {
        display: flex;
        padding: 7rem;
        flex-direction: column;
        gap: 2.5rem;
        transition: all 0.3s ease-in-out;
    }
    .card h1, .card p {
        color: white;
    }
    input {
        font-family: 'Open Sans', sans-serif;
        padding: 1rem;
        border: 1px solid var(--Highlight);
        border-radius: 0.5rem;
    }
</style>