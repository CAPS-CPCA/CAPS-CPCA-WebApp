<script lang="ts">
	import { isMobile } from '$lib/responsive';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	export let data;
	let mobileView: boolean;
	let isSticky = false;
	let toggleMenu = false;

	const unsubscribe = isMobile.subscribe((value) => {
		mobileView = value;
	});

	onMount(() => {
		if (window.location.hash) {
			setTimeout(() => {
				const element = document.getElementById(window.location.hash.slice(1));
				if (element) {
					element.scrollIntoView();
				}
			}, 150);
		}
		return () => {
			unsubscribe();
		};
	});

	$: {
		if (browser) {
			const updateView = () => {
				isSticky = window.scrollY > 0;
			};
			window.addEventListener('scroll', updateView);
		}
	}

	$: currentUrl = $page.url.pathname;
</script>

{#if data}
	<header>
		{#if mobileView}
			<nav>
				<ul>
					<li>
						<a href="/"><h2>CAPS-CPCA</h2></a>
					</li>
					{#each data.nav as { type, title, href }}
						{#if type === 'switch'}
							<li><button on:click={$page.data.toggleLang}>{title}</button></li>
						{:else if type === 'normal' && title === '🔍'}
							<li><a {href}>{title}</a></li>
						{/if}
					{/each}
					<li>
						<button class="burger" on:click={() => (toggleMenu = !toggleMenu)}>
							{toggleMenu ? '✖' : '☰'}
						</button>
					</li>
				</ul>
			</nav>
			<div class="menu" class:active={toggleMenu}>
				{#each data.nav as { type, title, content, href }}
					{#if type === 'normal' && title !== '🔍'}
						<a on:click={() => (toggleMenu = false)} {href} class:selected={href === currentUrl}
							>{title}</a
						>
					{:else if type === 'content'}
						{#each content as { title, href }}
							<a
								on:click={() => (toggleMenu = false)}
								data-sveltekit-noscroll
								{href}
								class:selected={currentUrl.includes(href)}>{title}</a
							>
						{/each}
					{/if}
				{/each}
			</div>
		{:else}
			<div class="partner-sites" style={isSticky ? 'display: none;' : ''}>
				<ul>
					{#each data.partners as { href, title }}
						<li><a {href} target="_blank">{title}</a></li>
					{/each}
				</ul>
			</div>
			<nav>
				<ul>
					<li>
						<div class="logo">
							{#if isSticky}
								<a href={data.logos[1].href}
									><enhanced:img src={data.logos[1].src} alt="CAPS-CPCA Logo" /></a
								>
							{:else}
								<a href={data.logos[0].href} target="_blank">
									<enhanced:img src={data.logos[0].src} alt="SOGC Logo" />
								</a>
							{/if}
						</div>
					</li>
					{#each data.nav as { type, title, content, href }}
						{#if type === 'normal'}
							<li><a {href} class:selected={href === currentUrl}>{title}</a></li>
						{:else if type === 'content'}
							{#each content as { title, href }}
								<li>
									<a data-sveltekit-noscroll {href} class:selected={currentUrl.includes(href)}
										>{title}</a
									>
								</li>
							{/each}
						{:else if type === 'exit'}
							<li><a {href} target="_self"><span id="exit">{title}</span></a></li>
						{:else if type === 'switch'}
							<li><button on:click={$page.data.toggleLang}>{title}</button></li>
						{/if}
					{/each}
				</ul>
			</nav>
		{/if}
	</header>
{/if}

<style>
	/* Mobile specific styles */
	@media (max-width: 768px) {
		nav ul {
			justify-content: space-between;
		}
		.burger {
			border: none;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
		}
		h2 {
			font-family: 'Roboto', sans-serif;
			font-size: 1.25rem;
			font-weight: 500;
			color: var(--Background);
		}
		.menu {
			display: flex;
			flex-direction: column;
			position: fixed;
			top: 4rem;
			right: 0;
			width: 70%;
			height: 100vh;
			background: var(--Primary);
			transition: all 0.3s ease-in-out;
			transform: translateX(100%);
		}
		.menu a {
			padding: 1rem 3rem;
			font-family: 'Roboto', sans-serif;
			font-size: 1.25rem;
		}
		.menu a:first-of-type {
			margin-top: 2rem;
		}
		.menu.active {
			transform: translateX(0%);
		}
	}
	/* Specific Sheet for Navigation bar */
	.logo {
		position: absolute;
		top: 0;
		left: 0;
		height: 90px;
		background: #f1f1f1;
		transition: all 0.3s ease-in-out;
	}
	.logo:hover {
		background: #b5b5b5;
	}
	header {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 1000;
		background: var(--Primary);
	}
	.selected {
		color: var(--Highlight);
	}
	button {
		background: none;
		border: 1px solid var(--Background);
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		font-weight: 500;
		color: var(--Background);
		cursor: pointer;
	}
	.partner-sites {
		height: 2.5rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
		background: white;
	}
	.partner-sites ul li:nth-of-type(1) {
		display: flex;
		align-items: center;
		padding: 0px 2rem;
		height: 3rem;
		background: var(--Primary);
	}
	.partner-sites ul li:nth-of-type(1) a {
		color: var(--Background);
	}
	.partner-sites ul li a {
		font-family: 'Roboto', sans-serif;
		font-size: 0.85rem;
		font-weight: 300;
		text-transform: uppercase;
		color: var(--Primary);
		text-decoration: none;
	}
	.partner-sites ul li a:hover {
		color: var(--Highlight);
	}
	nav {
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--Primary);
		border-bottom: 1px solid var(--Primary-stroke);
	}
	ul {
		margin: 0;
		padding: 0 3rem;
		height: 100%;
		width: 1200px;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 2rem;
		list-style-type: none;
	}
	ul li {
		font-family: 'Roboto', sans-serif;
		font-size: 0.95rem;
		font-weight: 400;
		text-transform: uppercase;
	}
	ul li a {
		letter-spacing: 1px;
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
		font-weight: 500;
		text-decoration: none;
		text-transform: uppercase;
		color: var(--Background);
		transition: all 0.1s ease-in-out;
	}
	ul li a:hover {
		color: var(--Highlight);
	}
	ul li a:focus {
		color: var(--Pressed);
	}
	#exit {
		color: white;
		background: #9e1a30;
		padding: 0px 15px;
		border-radius: 4px;
	}
	#exit:hover {
		color: white;
		background: #ee4b6a;
	}
</style>
