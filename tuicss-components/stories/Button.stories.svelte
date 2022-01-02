<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import { Color, Button } from '../src';
</script>

<Meta title='Components/Button' component={Button} />

<Story
	id='story1'
	name='Button'
>
	<Button
		class='button'
		label='Default'/>
	<Button
		class='button'
		label='Alternate Colors'
		colors={{
		  background: Color.Background.Blue168,
		  text: Color.Text.White
		}}/>
</Story>

<style>
	:global(.button) {
		display:block;
		margin-top: 16px;
	}
</style>