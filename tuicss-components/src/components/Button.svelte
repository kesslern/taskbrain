<script lang="ts">
	import * as Color from "../styles/Color.ts";

	export let label = ""
	export let colors: Color.ColorProps | undefined

	let classes: string
	$: classes = Color.toClasses({
		background: Color.Background.White168,
		text: Color.Text.Black,
		...colors
	})
</script>

<button class='tui-button {classes} {$$props.class}' on:click>
	{label}
</button>