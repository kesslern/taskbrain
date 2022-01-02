<script lang="ts">
	import * as Color from "../styles/Color.ts";

	export let label = ""
	export let ref: string | undefined;
	export let colors: Color.ColorProps | undefined

	let calcedColors: Color.ColorProps
	$: calcedColors = {
		background: Color.Background.White168,
		text: Color.Text.Black,
		...colors
	}

	let calcedClasses: string
	$: calcedClasses = Color.toClasses(calcedColors)
</script>

<button {ref} class='tui-button {calcedClasses} {$$props.class}' on:click>
	{label}
</button>