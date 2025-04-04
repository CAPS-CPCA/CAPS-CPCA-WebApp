<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	export let data;

	const handleSticky = () => {
		const reader = document.querySelector('.reader');
		if (reader) {
			const rect = reader.getBoundingClientRect();
			if (rect.top <= 0) {
				outlineClass = 'sticky';
			} else {
				outlineClass = 'atTop';
			}
			if (rect.bottom <= window.innerHeight) {
				outlineClass = 'atBot';
			}
		}
	};
	const handleCollapse = () => {
		isCollapsed = !isCollapsed;
	};
	const handleScroll = () => {
		const h1s = document.querySelectorAll('div[id]');
		let selectedId = null;
		h1s.forEach((h1) => {
			const rect = h1.getBoundingClientRect();
			if (rect.top <= 100 && rect.bottom >= 0) {
				selectedId = h1.id;
			}
		});
		if (selectedId) {
			const a = document.querySelector(`a[href="#${selectedId}"]`);
			if (a) {
				const selectedlink = document.querySelector('.tertiary.selected');
				if (selectedlink) selectedlink.classList.remove('selected');
				a.classList.add('selected');
				window.removeEventListener('scroll', handleScroll);
				setTimeout(() => {
					window.addEventListener('scroll', handleScroll);
				}, 75);
			}
		}
	};

	let isCollapsed = false;
	let outlineClass = 'atTop';

	$: current = $page.url.pathname;
	$: outlineType = '/' + current.split('/')[1];
	$: outline = data[outlineType] || {};

	$: if (browser) {
		window.addEventListener('scroll', handleSticky);
		window.addEventListener('scroll', handleScroll);
	}

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleSticky);
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

{#if current !== '/faq'}
	<div class="outline" class:collapsed={isCollapsed}>
		<button
			class="arrow"
			on:click={handleCollapse}
			class:collapsed={isCollapsed}
			aria-label="Toggle Collapse"
		></button>
		{#if !isCollapsed}
			<h1>Outline</h1>
			<div class={outlineClass}>
				{#each Object.keys(outline) as section}
					<ul>
						{#each Object.keys(outline[section]) as page}
							<li>
								<a
									href={outline[section][page].href}
									class="secondary"
									class:selected={outline[section][page].href.includes(current)}
									>{outline[section][page].title}</a
								>
							</li>
							<li
								class="bulletin"
								style={outline[section][page].href.includes(current) ? '' : 'display: none;'}
							>
								<menu>
									{#each Object.keys(outline[section][page].modules) as module}
										<li>
											<a href={'#' + module} class="tertiary" class:selected={false}
												>{outline[section][page].modules[module]}</a
											>
										</li>
									{/each}
								</menu>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	<div class="outline" class:collapsed={isCollapsed}>
		<button
			class="arrow"
			on:click={handleCollapse}
			class:collapsed={isCollapsed}
			aria-label="Toggle Collapse"
		></button>
		{#if !isCollapsed}
			<h1>Outline</h1>
			<div class={outlineClass}>
				{#each Object.keys(outline) as section}
					<ul>
						{#each Object.keys(outline[section]) as page}
							<li>
								<a href={outline[section][page].href} class="secondary"
									>{outline[section][page].title}</a
								>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	.tertiary {
		font-family: 'Roboto', sans-serif;
		color: var(--Primary);
		font-weight: 400;
		font-size: 1.15rem;
		transition: all 0.1s ease-in-out;
	}
	.tertiary:hover {
		color: var(--Highlight);
	}
	.tertiary.selected {
		font-weight: 500;
		color: var(--Pressed);
	}
	.tertiary.selected::before {
		content: '>';
		margin-right: 0.5rem;
	}
	menu {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0;
		margin: 0;
	}
	menu li {
		list-style-type: none;
		padding: 0;
	}
	.bulletin {
		display: flex;
		flex-direction: column;
		margin-left: 2.5rem;
		border-left: 0.3rem solid var(--Primary);
		gap: 0.5rem;
	}
	button {
		padding: 0;
		margin: 0;
		background: none;
		border: none;
		cursor: pointer;
	}
	ul {
		display: flex;
		flex-direction: column;
		list-style-type: none;
		gap: 1.5rem;
		margin: 0;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--Primary);
	}
	ul:last-of-type {
		border-bottom: none;
	}
	li {
		padding: 0 1.5rem;
	}
	.outline {
		position: relative;
		width: 30rem;
		display: flex;
		background: #f6f7f8;
		border-right: 1px solid var(--Primary);
		flex-direction: column;
		align-items: center;
		transition: all 0.1s ease-in-out;
	}
	.atTop {
		top: 0;
		width: 30rem;
		transition: all 0.1s ease-in-out;
	}
	.atBot {
		width: 30rem;
		position: absolute;
		bottom: 0;
	}
	.sticky {
		position: fixed;
		width: 30rem;
		top: 6rem;
	}
	.outline.collapsed {
		width: 5rem;
	}
	.outline h1 {
		width: 100%;
		padding: 1.5rem 4.5rem;
		font-family: 'Open Sans', sans-serif;
		font-size: 2rem;
		font-weight: 600;
		border-bottom: 1px solid var(--Primary);
		box-sizing: border-box;
		text-align: center;
		color: var(--Primary);
	}
	.arrow {
		position: absolute;
		right: 1rem;
		top: 2rem;
		width: 0;
		height: 0;
		border-left: 1.5rem solid transparent;
		border-right: 1.5rem solid transparent;
		border-top: 1.5rem solid var(--Primary);
		transform: rotate(90deg) scale(0.75);
	}
	.arrow.collapsed {
		transform: rotate(-90deg) scale(0.75);
	}
</style>
