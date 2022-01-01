<script lang="ts">
	import InitTuiCss from 'tuicss-components/src/InitTuiCss.svelte';
</script>

<InitTuiCss />
<div class="tui-screen-800-600 bordered centered purple-168">
	<nav class="tui-nav static white-168">
		<ul>
			<li class="tui-datetime" data-format="h:m:s a" />
		</ul>
	</nav>

	<slot />
</div>

<style lang="scss">
	nav {
		height: 20px;
	}

	.tui-datetime {
		margin-top: 1px;
	}
</style>
