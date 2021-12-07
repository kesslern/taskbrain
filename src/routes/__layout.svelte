<script lang='ts'>
	import { browser } from '$app/env';
	import "tuicss/dist/tuicss.css";
	import { onMount } from 'svelte';

	let clicked: null | string;
	$: clicked = null;

	function setClicked(value: string) {
		return () => {
			clicked = value;
		}
	}

	onMount(async () => {
		if (browser) {
			await import ("tuicss/dist/tuicss.js");
		}
	})
</script>

<style lang='scss'>
	nav {
		height: 20px;
	}

	.tui-datetime {
		margin-top: 1px;
	}
</style>

<div class='tui-screen-800-600 bordered centered purple-168'>
	<nav class="tui-nav static white-168">
		<ul>
			<li class="tui-datetime" data-format="h:m:s a"></li>
		</ul>
	</nav>

	<slot></slot>
</div>