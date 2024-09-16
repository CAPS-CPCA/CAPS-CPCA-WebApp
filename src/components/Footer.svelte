<script lang="ts">
	import { assets } from '../lib/assets/index';
	import { isMobile } from '$lib/responsive';
	import { onMount } from 'svelte';

	export let data;

	let mobileView: boolean;

	const unsubscribe = isMobile.subscribe((value) => {
		mobileView = value;
	});

	onMount(() => {
		return () => {
			unsubscribe();
		};
	});
</script>

{#if data}
	<footer>
		{#if mobileView}
			<div class="container m-container">
				<a class="top" href="#top"><enhanced:img src={assets.ArrowUp} alt="back to top" /></a>
				<div class="social m-social">
					{#each data.social as i}
						<li>{i}</li>
					{/each}
				</div>
				<div class="bottom m-bottom">
					<a href="http://sogc.org/"><enhanced:img src={data.logo} alt="footer logo" /></a>
					<div class="contact">
						<ul>
							{#each Object.entries(data.contact) as [key, value]}
								{#if key !== 'mailto:info@sogc.com'}
									<li>{value}</li>
								{:else}
									<li><a href={key}>{value}</a></li>
								{/if}
							{/each}
						</ul>
					</div>
					<p class="copyright">{data.copyright}</p>
				</div>
			</div>
		{:else}
			<div class="container d-container">
				<a class="top" href="#top"><enhanced:img src={assets.ArrowUp} alt="back to top" /></a>
				<div class="social d-social">
					{#each data.social as i}
						<li>{i}</li>
					{/each}
				</div>
				<div class="bottom d-bottom">
					<a href="http://sogc.org/"><enhanced:img src={data.logo} alt="footer logo" /></a>
					<div class="contact d-contact">
						<ul>
							{#each Object.entries(data.contact) as [key, value]}
								{#if key !== 'mailto:info@sogc.com'}
									<li>{value}</li>
								{:else}
									<li><a href={key}>{value}</a></li>
								{/if}
							{/each}
						</ul>
					</div>
					<p class="copyright d-copyright">{data.copyright}</p>
				</div>
			</div>
		{/if}
	</footer>
{/if}

<style>
	/* Common styles */
	a {
		transition: all 0.2s ease-in-out;
	}
	.top {
		position: absolute;
		top: 1.5rem;
		width: 2rem;
		height: 2rem;
		filter: invert();
		transition: all 0.3s ease-in-out;
	}
	.top img {
		width: 100%;
		height: 100%;
	}
	.top:hover {
		filter: invert(0.8);
	}
	footer {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.container {
		width: 100%;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		background: linear-gradient(to bottom, #292f3c 0%, #031f2d 100%);
	}
	.social {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin: 4rem 0 2rem 0;
	}
	.bottom {
		display: flex;
		box-sizing: border-box;
		position: relative;
		width: 100%;
		border-top: 3px solid #4e7385;
		padding-top: 2rem;
	}
	.bottom a:hover {
		opacity: 0.75;
	}
	.contact {
		display: flex;
	}
	.copyright {
		margin: 0 2rem;
		color: #4e7385;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
	.social li {
		list-style-type: none;
		border: 2px solid #ffffff;
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
	}
	.social li::before {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		-webkit-mask: url(../lib/assets/ico-share.svg) no-repeat center / 100%;
		mask: url(../lib/assets/ico-share.svg) no-repeat center / 100%;
		background-color: #ffffff;
		transform: scale(0.5);
		transition: all 0.3s ease-in-out;
	}
	.social li:nth-child(2)::before {
		-webkit-mask: url(../lib/assets/ico-print.svg) no-repeat center / 100%;
		mask: url(../lib/assets/ico-print.svg) no-repeat center / 100%;
	}
	.social li:nth-child(3)::before {
		-webkit-mask: url(../lib/assets/ico-facebook.svg) no-repeat center / 100%;
		mask: url(../lib/assets/ico-facebook.svg) no-repeat center / 100%;
	}
	.social li:nth-child(4)::before {
		-webkit-mask: url(../lib/assets/ico-twitter.svg) no-repeat center / 100%;
		mask: url(../lib/assets/ico-twitter.svg) no-repeat center / 100%;
	}
	.social li:nth-child(5)::before {
		-webkit-mask: url(../lib/assets/ico-youtube.svg) no-repeat center / 100%;
		mask: url(../lib/assets/ico-youtube.svg) no-repeat center / 100%;
	}
	.social li:hover {
		border-color: #4e7385;
	}
	.social li:hover::before {
		background-color: #4e7385;
	}
	.contact ul {
		list-style-type: none;
		color: #4e7385;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
		margin: 0;
	}
	.contact li {
		list-style-type: none;
	}
	.contact li:first-of-type {
		font-weight: 700;
		margin: 1rem 0;
	}
	.contact li a {
		color: #4e7385;
	}
	.contact li a:hover {
		color: #ffffff;
	}
	/* Mobile difference styles */
	@media (max-width: 768px) {
		.m-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 4.375rem 0;
			box-sizing: border-box;
			background: linear-gradient(to bottom, #292f3c 0%, #031f2d 100%);
		}
		.m-social {
			display: flex;
			align-items: center;
			gap: 1.5rem;
			margin: 4rem 0 2rem 0;
		}
		.m-social li {
			width: 2.75rem;
			height: 2.75rem;
		}
		.m-bottom {
			gap: 1.5rem;
			flex-direction: column;
			align-items: center;
		}
	}
	/* Desktop difference styles */
	.d-container {
		padding: 4.375rem 11.25rem;
	}
	.d-social li {
		width: 3.125rem;
		height: 3.125rem;
	}
	.d-contact {
		border-left: 3px solid #4e7385;
	}
	.d-bottom {
		gap: 3rem;
		align-items: end;
	}
	.d-copyright {
		position: absolute;
		right: 0;
		bottom: 0;
	}
</style>
