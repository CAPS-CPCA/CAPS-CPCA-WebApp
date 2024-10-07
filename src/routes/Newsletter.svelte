<script lang="ts">
	export let data;
	let email = '';
	let successMessage = '';
	let isSubmitting = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		if (isSubmitting) return;
		isSubmitting = true;

		if (!validateEmail(email)) {
			alert('Please enter a valid email address.');
			isSubmitting = false;
			return;
		}

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			});

			const result = await response.json();
			successMessage = response.ok ? result.success : 'Failed to send email.';
		} catch (error) {
			console.error('Error:', error);
			alert('An error occurred.');
		} finally {
			isSubmitting = false;
		}
	}

	function validateEmail(email: string): boolean {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
</script>

<section class="newsletter">
	{#if data}
		<div class="container">
			<div class="card">
				<h1>{data.title}</h1>
				<p>{data.para}</p>
			</div>
			<div class="card">
				<form method="POST" class="form" on:submit={handleSubmit}>
					<input name="email" type="email" placeholder="john.doe@email.com" bind:value={email} />
					<button class="primary" type="submit" disabled={isSubmitting}>{data.button}</button>
				</form>
				{#if successMessage}
					<p class="success">{successMessage}</p>
				{/if}
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
		padding: 0 5rem;
		background: url(../lib/assets/newsletter.png) no-repeat center center;
		background-size: contain;
	}
	.card {
		display: flex;
		gap: 2.5rem;
		padding: 5rem;
		justify-content: center;
		flex-direction: column;
		transition: all 0.3s ease-in-out;
	}
	.card h1 {
		font-size: 2rem;
		color: white;
	}
	.card p {
		font-size: 1.5rem;
		color: white;
	}
	.card p.success {
		font-size: 1rem;
		color: greenyellow;
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
			background-size: cover;
			flex-direction: column;
			padding: 3rem;
			gap: 2rem;
		}
		.card {
			padding: 0;
			gap: 1.5rem;
		}
		.card h1 {
			font-size: 1.75rem;
		}
		.card p {
			font-size: 1.25rem;
		}
	}
</style>
