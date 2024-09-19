<script lang="ts">
	export let data;
</script>

<section class="newsletter">
	{#if data}
		<div class="container m-container">
			<div class="card m-card">
				<h1>{data.title}</h1>
				<p>{data.para}</p>
			</div>
			<div class="card m-card">
				<form class="form">
					<input type="email" placeholder="john.doe@email.com" />
					<button class="primary" type="submit">{data.button}</button>
				</form>
			</div>
		</div>
	{/if}
</section>

<style>
	/* Common styles */
	.newsletter {
		background: radial-gradient(148.27% 200.49% at 44.09% 11.06%, #011627 0%, #4e7385 100%);
		color: white;
	}
	.container {
		background: url(../../lib/assets/newsletter.png) no-repeat center center;
	}
	.card {
		display: flex;
		justify-content: center;
		flex-direction: column;
		transition: all 0.3s ease-in-out;
	}
	.card h1,
	.card p {
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
		width: 100%;
		background-color: #f6f7f8;
		border: 2px solid #01162740;
		transition: all 0.1s ease-in-out;
	}
	input::placeholder {
		font-family: 'Open Sans', sans-serif;
		font-style: italic;
	}
	input:hover {
		background-color: #8fd5ff;
	}
	input:focus {
		outline: none;
		background-color: #f6f7f8;
		border: 2px solid var(--Highlight);
	}
	input:first-of-type {
		border-radius: 1rem 0 0 1rem;
	}
	button:last-of-type {
		border-radius: 0 1rem 1rem 0;
	}

	/* Mobile specific styles */
	@media (max-width: 768px) {
		.container {
			flex-direction: column;
			background: none;
			padding: 3.5rem;
			gap: 2rem;
		}
		.card {
			gap: 1.5rem;
		}
		.card h1 {
			font-size: 1.75rem;
		}
		.card p {
			font-size: 1.25rem;
		}
	}

	/* Desktop specific styles */
	@media (min-width: 769px) {
		.container {
			padding: 0 5rem;
			background-size: contain;
		}
		.card {
			gap: 2.5rem;
			padding: 5rem;
		}
		.card h1 {
			font-size: 2rem;
		}
		.card p {
			font-size: 1.5rem;
		}
	}
</style>
