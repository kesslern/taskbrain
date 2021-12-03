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
	.panel {
		margin-top: 1em;
		width: calc(100% - 30px);
		margin-left: 10px;
    margin-right: 20px;
	}
</style>

<div class='tui-screen-800-600 bordered centered purple-168'>
<nav class="tui-nav static">
	<ul>
		<li class="tui-dropdown">
			<span class="red-168-text">F</span>ile
			<div class="tui-dropdown-content">
				<ul>
					<li on:click={setClicked("new")}><span class="red-168-text">N</span>ew</li>
					<li on:click={setClicked("save")}><span class="red-168-text">S</span>ave</li>
					<li on:click={setClicked("exit")}><span class="red-168-text">E</span>xit</li>
				</ul>
			</div>
		</li>
		<li>
			{clicked}
		</li>
		<li class="tui-datetime" data-format="h:m:s a"></li>
	</ul>
</nav>

	<div class="panel tui-panel">
		<div class="tui-panel-header black-255-text white-168">
			App
		</div>
		<div class="tui-panel-content">
			<slot></slot>
		</div>
	</div>
</div>