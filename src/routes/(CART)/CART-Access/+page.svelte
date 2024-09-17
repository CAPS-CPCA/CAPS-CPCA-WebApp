<script lang="ts">
</script>

<h1>This is CART Page</h1>
<section class="cart">
	<div class="grid">
		<div>
			<img src="https://picsum.photos/300/160" alt="random" />
			<h1>Res 1</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
		</div>
		<div>
			<img src="https://picsum.photos/300/160" alt="random" />
			<h1>Res 2</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
		</div>
		<div>
			<img src="https://picsum.photos/300/160" alt="random" />
			<h1>Res 3</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
		</div>
		<div>
			<img src="https://picsum.photos/300/160" alt="random" />
			<h1>Res 4</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	.grid div {
		border: 1px solid #ccc;
		padding: 20px;
	}
	.grid img {
		width: 100%;
	}
</style>
