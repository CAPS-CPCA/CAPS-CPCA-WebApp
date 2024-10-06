<script lang="ts">
	import { page } from '$app/stores';
	$: current = $page.url.href;

	const showToast = (message: string) => {
		const toast = document.createElement('div');
		toast.textContent = message;
		Object.assign(toast.style, {
			fontFamily: 'Roboto, sans-serif',
			position: 'fixed',
			bottom: '1rem',
			left: '50%',
			transform: 'translateX(-50%)',
			background: 'var(--Primary)',
			color: 'white',
			padding: '0.5rem 1rem',
			borderRadius: '0.5rem',
			zIndex: '100'
		});
		document.body.appendChild(toast);
		setTimeout(() => toast.remove(), 1500);
	};

	const copyLink = (e: Event) => {
		const target = e.target as HTMLElement;
		const nextId = target.nextElementSibling?.id;
		if (!nextId) return;

		const newLink = current.includes('#')
			? current.replace(/#.*$/, `#${nextId}`)
			: `${current}#${nextId}`;

		navigator.clipboard
			.writeText(newLink)
			.then(() => {
				showToast('Link copied to clipboard');
			})
			.catch((err) => {
				console.error('Failed to copy: ', err);
			});
	};
</script>

<button class="copy" on:click={copyLink} aria-label="Copy link">🔗</button>

<style>
	@media (max-width: 768px) {
		.copy {
			right: 1rem;
		}
	}
	.copy {
		position: absolute;
		top: -4rem;
		right: 2.5rem;
		background: none;
		border: none;
		padding: 0.5rem 1rem;
		cursor: pointer;
		z-index: 50;
	}
</style>
