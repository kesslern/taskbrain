<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import Util from '../src/styles/Util.ts';
	import * as Color from "../src/styles/Color.ts";

	import Button from '../src/components/Button.svelte';
</script>

<Meta title='Components/Button' component={Button} />

<Story
	id='story1'
	name='Button'
>
	<Button
		ref='button'
		class='button'
		label='Default'/>
	<Button
		ref='button'
		label='Alternate Colors'
		colors={{
		  background: Color.Background.Blue168,
		  text: Color.Text.White
		}}/>
</Story>

<style>
	:global([ref='button']) {
		display:block;
		margin-top: 16px;
	}
</style>