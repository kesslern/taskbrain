<script lang="ts">
	import * as Color from "../styles/Color.ts";
	import Util from '../styles/Util.ts';

	export let ref: string | undefined;
	export let label = ""
	export let colors: Color.ColorProps | undefined
	export let classes: Util[] = []

	let calcedColors: Color.ColorProps
	$: calcedColors = {
		background: Color.Background.White168,
		text: Color.Text.Black,
		...colors
	}

	let calcedClasses: string
	$: calcedClasses = [classes.join(' '), Color.toClasses(calcedColors)].join(' ')

	$: console.log(Color.toClasses(calcedColors))
</script>

<button {ref} class='tui-button {calcedClasses}'>
	{label}
</button>